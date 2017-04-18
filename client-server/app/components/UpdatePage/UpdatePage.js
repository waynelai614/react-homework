import React from 'react';
import { Link } from 'react-router-dom';
import ProductForm from '../ProductForm';
import LoadingSpinner from '../Common/LoadingSpinner';

import { EDIT_PAGE_PATH } from '../../routes';

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    const { match, products } = props;
    this.state = {
      isEdit: match.path === EDIT_PAGE_PATH ? true : false,
      isLoaded: products.data ? true : false
    };
    this.findProductById = this.findProductById.bind(this);
  }

  componentDidMount() {
    const { isLoaded } = this.state;
    if (!isLoaded) this.props.actions.getProducts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.products.data) {
      this.setState({ isLoaded: true });
    }
  }

  findProductById(id) {
    const array = this.props.products.data.filter((product) => {
      return product.id === id;
    });
    return array.length !== 0 ? array[0] : {};
  }

  render() {
    const { isEdit, isLoaded } = this.state;
    const { products, actions, history, match } = this.props;
    const { addProdcut, editProdcut } = actions;
    return (
      <div>
        <LoadingSpinner isFetching={products.isFetching} />
        <section className="hero is-fullheight is-primary is-bold">
          <div className="hero-body" style={{alignItems: 'flex-start'}}>
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-8 is-offset-2">
                  <h1 className="title">
                    {isEdit ? 'Edit the product' : 'Add new product'}
                    <Link
                      to="/"
                      className="button is-dark"
                      style={{marginLeft: '1.5rem'}}
                    >
                      <span className="icon">
                        <i className="fa fa-chevron-circle-left"></i>
                      </span>
                      <span>Back</span>
                    </Link>
                  </h1>
                  <div className="box">
                    {(isEdit && isLoaded)
                      ?
                      <ProductForm
                        history={history}
                        updateProdcut={editProdcut}
                        product={this.findProductById(match.params.id)}
                      />
                      :
                      <ProductForm
                        history={history}
                        updateProdcut={addProdcut}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

UpdatePage.propTypes = {
  history: React.PropTypes.object.isRequired,
  products: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  match: React.PropTypes.object.isRequired
};

export default UpdatePage;
