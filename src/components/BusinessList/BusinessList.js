import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className ="BusinessList">
      {this.props.businesses.map(business => {                //Important
      return <Business business={business} key = {business.id}/>;})              //Important
      }
      </div>
    );
  }
}
export default BusinessList;
