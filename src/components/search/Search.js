import React, { Component } from 'react';
import config from '../config.js';

export default class Search extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="search-wrapper section-padding-100">
                <div className="search-close">
                    <i className={ config.search.close } aria-hidden="true"></i>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="search-content">
                                <form action={ config.search.url } method="get">
                                    <input type="search" name="search" id="search" placeholder={ config.search.placeholder } />
                                    <button type="submit">
                                        <img src={ config.search.icon } alt="" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}