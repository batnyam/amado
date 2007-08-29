import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import Item from './components/item/Item';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';

ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
ReactDOM.render(<Item size="7" />, document.getElementById('news'));
ReactDOM.render(<Newsletter/>, document.getElementById('newsletter'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
