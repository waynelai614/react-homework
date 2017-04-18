import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UpdatePage from '../components/UpdatePage';

import { actions as ProductActions } from '../redux/modules/products';

const mapStateToProps = (state) => ({
  products: state.products
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...ProductActions }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePage));
