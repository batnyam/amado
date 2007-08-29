import React, { Component } from 'react';

export default class Item extends Component {

    constructor() {
        super();
    }

    render() {
        let news = [
            { link: "", img: "img/bg-img/1.jpg", desc: "From $180", title: "Modern Chair" },
            { link: "", img: "img/bg-img/2.jpg", desc: "From $200", title: "Minimalistic Plant Pot" },
            { link: "", img: "img/bg-img/3.jpg", desc: "From $280", title: "Home Deco" },
            { link: "", img: "img/bg-img/4.jpg", desc: "From $318", title: "Night Stand" },
            { link: "", img: "img/bg-img/5.jpg", desc: "From $10", title: "Plant Pot" },
            { link: "", img: "img/bg-img/6.jpg", desc: "From $400", title: "Small Table" },
            { link: "", img: "img/bg-img/7.jpg", desc: "From $380", title: "Metallic Chair" },
            { link: "", img: "img/bg-img/8.jpg", desc: "From $760", title: "Modern Rocking Chair" },
        ];

        return (
            news.map((item, index) => {
                if( index < this.props.size ) {
                    return (
                        <div className="single-products-catagory clearfix" key={index}>
                            <a href={ item.link }>
                                <img src={ item.img } alt="" />
                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>{ item.desc }</p>
                                    <h4>{ item.title }</h4>
                                </div>
                            </a>
                        </div>
                    )
                }
            })
        )
    }
}
