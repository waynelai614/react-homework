import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../ProductList';

import ComfirmModal from '../Modal/ComfirmModal';
import ImageModal from '../Modal/ImageModal';

import LoadingSpinner from '../Common/LoadingSpinner';
import Notification from '../Common/Notification';

import { MODAL } from '../../constants/ModalNames';

const ESCAPE_KEY = 27;

const renderModals = (modalDisplay, findProductById, actions) => {
  if (!modalDisplay.modal) {
    document.documentElement.className = '';
    return null;
  }
  document.documentElement.className = 'is-clipped';
  const { modal, itemId } = modalDisplay;
  const { deleteProdcut, closeModal} = actions;
  const product = findProductById(itemId);
  return (
    <section>
      <ImageModal
        isShown={modal === MODAL.IMAGE_MODAL}
        imageUrl={product.imageUrl}
        closeModal={closeModal}
      />
      <ComfirmModal
        isShown={modal === MODAL.COMFIRM_MODAL}
        product={product}
        deleteProdcut={deleteProdcut}
        closeModal={closeModal}
      />
    </section>
  );
};

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.findProductById = this.findProductById.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentDidMount() {
    this.props.actions.getProducts();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    switch (e.keyCode) {
      case ESCAPE_KEY:
        this.props.actions.closeModal();
        break;
      default:
        break;
    }
  }

  findProductById(id) {
    const array = this.props.products.data.filter((product) => {
      return product.id === id;
    });
    return array.length !== 0 ? array[0] : {};
  }

  render() {
    const { products, actions, modalDisplay } = this.props;
    const { isFetching, hasError, error } = products;
    const { clearErrorState } = actions;
    return (
      <div>
        <LoadingSpinner isFetching={isFetching} />
        <Notification
          hasError={hasError}
          error={error}
          clearErrorState={clearErrorState}
        />
        <section className="hero is-fullheight is-dark is-bold">
          <div className="hero-body" style={{alignItems: 'flex-start'}}>
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-8 is-offset-2">
                  <h1 className="title">
                    Product Management System
                    <Link
                      to="/create"
                      className="button is-primary is-outlined"
                      style={{marginLeft: '1.5rem'}}
                    >
                      <span className="icon">
                        <i className="fa fa-plus-circle"></i>
                      </span>
                      <span>Add Product</span>
                    </Link>
                  </h1>
                  <div className="box">
                    <ProductList {...this.props} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {renderModals(modalDisplay, this.findProductById, actions)}
      </div>
    );
  }
}

MainSection.propTypes = {
  products: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  modalDisplay: React.PropTypes.object.isRequired
};

export default MainSection;
