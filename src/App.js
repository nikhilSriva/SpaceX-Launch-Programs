import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {makeMainRoutes} from './routes'
import './App.css'

class App extends Component {
    render() {
        const routes = makeMainRoutes()
        return (
            <BrowserRouter>
                <div className={'Content'}>
                    {routes}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
