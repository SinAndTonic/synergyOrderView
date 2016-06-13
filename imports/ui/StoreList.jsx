import React, { PropTypes } from 'react';

export default class StoreList extends React.Component{
  render(){
    return(
      <li>
        {this.props.storeName}
      </li>
    );
  }
}
