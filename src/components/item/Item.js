import React, { Component } from 'react';

class Item extends Component {

  render() {
    for(var i = 0; i < this.props.size; i++ ) {
      return (
          <div className="single-products-catagory clearfix">
              <a href="shop.html">
                  <img src="img/bg-img/7.jpg" alt="" />
                  <div className="hover-content">
                    <div className="line"></div>
                    <p>From $318</p>
                    <h4>Metallic Chair</h4>
                  </div>
              </a>
          </div>
      );
    }
  }
}

export default Item;
