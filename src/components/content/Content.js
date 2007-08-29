import React, { Component } from 'react';

export default class Content extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-content-wrapper d-flex clearfix">

                <div id="sidebar"></div>

                { /* Product Catagories Area Start */ }
                <div className="products-catagories-area clearfix">
                    <div className="amado-pro-catagory clearfix" id="news">

                    </div>
                </div>
                { /* Product Catagories Area End */ }
            </div>
        );
    }

}