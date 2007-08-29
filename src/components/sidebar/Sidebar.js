import React, { Component } from 'react';

export default class Sidebar extends Component {

    constructor(){
        super();
    }

    render() {
        const links = [
            { name: "Home", href: "#home" },
            { name: "Shop", href: "#shop" },
            { name: "Product", href: "#product" },
            { name: "Checkout", href: "#checkout" }
        ];
        return(
            <div>
                { /* Mobile Nav (max width 767px) */ }
                <div className="mobile-nav">
                    { /* Navbar Brand */ }
                    <div className="amado-navbar-brand">
                        <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                    </div>
                    { /* Navbar Toggler */ }
                    <div className="amado-navbar-toggler">
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div className="header-area clearfix">
                    { /* Close Icon */ }
                    <div className="nav-close">
                        <i className="fa fa-close" aria-hidden="true"></i>
                    </div>
                    { /* Logo */ }
                    <div className="logo">
                        <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                    </div>
                    { /* Amado Nav */ }
                    <nav className="amado-nav">
                        <ul>
                            {
                                links.map((link, index) => {
                                    return (
                                        <li key={index}><a href={ link.href }>{ link.name }</a></li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    { /* Button Group */ }
                    <div className="amado-btn-group mt-30 mb-100">
                        <a href="#" className="btn amado-btn mb-15">%Discount%</a>
                        <a href="#" className="btn amado-btn active">New this week</a>
                    </div>
                    { /* Cart Menu */ }
                    <div className="cart-fav-search mb-100">
                        <a href="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span></a>
                        <a href="#" className="fav-nav"><img src="img/core-img/favorites.png" alt="" /> Favourite</a>
                        <a href="#" className="search-nav"><img src="img/core-img/search.png" alt="" /> Search</a>
                    </div>
                    { /* Social Button */ }
                    <div className="social-info d-flex justify-content-between">
                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
