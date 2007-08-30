import React, { Component } from 'react';

export default class Content extends Component {

    constructor() {
        super();
        
        fetch('http://172.30.28.204:48080/api/d/nice-api/rest/management/users?type=6')
        .then(resData => {
            console.log(resData);
            //console.log(JSON.stringify(resData))
            //do your logic here
            //let person = resData.results
            // this.setState({ person: resData.results }); //this is an asynchronous function
        });
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