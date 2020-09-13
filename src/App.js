import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {makeMainRoutes} from './routes'


class App extends Component {
    render() {
        const routes = makeMainRoutes()
        return (
            <BrowserRouter>
                <div style={{backgroundColor: '#f2f6fa'}}>
                    {routes}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
