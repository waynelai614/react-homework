import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ElementListItem from './elementListItem.jsx';

class ElementList extends Component {
  constructor() {
    super();
  }
  render() {
    const style = {
      marginTop: '32px',
      marginBottom: '128px'
    };
    return (
      <div id="element-list" style={style}>
        <table className="highlight bordered centered" >
          <thead>
            <tr>
              <th>sequence</th>
              <th>status</th>
              <th>category name</th>
              <th>title</th>
              <th>owner</th>
              <th>priority</th>
              <th>edit</th>
            </tr>
          </thead>

          <tbody >
            {
              this.props.elementList.map((element, i )=> {
                element.sequenceNumber = i + 1;
                return (
                  <ElementListItem
                    key= {'ElementListItem' + i}
                    element = {element}
                  />);
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
ElementList.PropTypes = {
  elementList: PropTypes.object
};
function mapStateToProps(state) {
  return {
    elementList: state.elementList
  };
}

export default connect(mapStateToProps)(ElementList);
