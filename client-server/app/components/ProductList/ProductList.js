import React from 'react';
import ProductItem from './ProductItem';

const renderProductList = (products, actions) => {
  return products.map((product) => (
    <ProductItem
      key={product.id}
      product={product}
      {...actions}
    />
  ));
};

const ProductList = (props) => {
  const { products, actions } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th><p className="has-text-right">Price</p></th>
            <th><p className="has-text-right">In Stock</p></th>
            <th><p className="has-text-centered">Status</p></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(products.data && products.data.length > 0)
            ?
            renderProductList(products.data, actions)
            :
            <tr>
              <td colSpan="7" className="has-text-centered">No records found</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

ProductList.propTypes = {
  products: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default ProductList;
