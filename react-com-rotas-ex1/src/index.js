import React, { Suspense } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Suspense fallback={null}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/sobre" component={Sobre} />
            </Switch>            
        </BrowserRouter>
    </Suspense>, 
    document.getElementById('root')
);

serviceWorker.unregister();
