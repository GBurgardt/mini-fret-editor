import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './index.css';

import { Tablature } from './tablature/tablature';

const App = () => (
    <div className="App">
        <Tablature></Tablature>
    </div>
);


ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
