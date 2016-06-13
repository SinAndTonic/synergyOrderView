import React, { PropTypes } from 'react';

export default class SearchBox extends React.Component{
  render(){
    return(
      <input type="text" value={this.props.value} onChange={this.props.handle} />
    )
  }
}
