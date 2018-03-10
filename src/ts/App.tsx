import * as React from 'react';
import '../css/App.css';
import { Add } from '../ts/components/Add';
import { Get } from '../ts/components/Get';

const logo = require('../img/logo.svg');

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>

            <Get/>
            <Add/>
        </div>
    );
};
