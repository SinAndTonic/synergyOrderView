import React, { PropTypes } from 'react';
import StoreList from './StoreList.jsx';
import SearchBox from './SearchBox.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  getStores() {
    return[
        { id: 1, name: 'Unichem Morrinsville' },
        { id: 2, name: 'Unichem Superville' },
        { id: 3, name: 'Life Matamata' },
        { id: 4, name: 'Greys Pharmacy' },
        { id: 5, name: 'Health 2000 Center City' }
      ];
  }
  render() {
    let storeList = this.getStores().map((store) => {
      if (store.name.toLowerCase().indexOf(this.state.name.toLowerCase())!==-1){
        return <StoreList key={store.id} storeName={store.name} />;
      }
    });
    return (
      <div>
        <SearchBox type="text" value={this.state.name} handle={this.handleChange.bind(this)} />
        {storeList}
      </div>
    );
  }
}
