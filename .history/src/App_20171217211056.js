import React, { Component } from 'react'
import { Switch } from 'react-router'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'

import Header from './components/Header'
import Footer from './components/Footer'
import FrontPage from './containers/FrontPage'
import AboutPage from './containers/AboutPage'
import UserPage from './containers/UserPage'
import NoMatchPage from './containers/NoMatchPage'

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: FrontPage,
        exact: true,
        show: true
    },
    {
        name: '',
        path: '/*',
        component: NoMatch,
        Page,
        exact: false,
        show: false
    }
]

class App extends Component {
    render() {
        return (
            <main className="main">
                <Provider store={store}>
                    <Router history={history}>
                        <div>
                            <Header />
                            <Switch>
                                {routes.map(r => (
                                    <Route
                                        key={r.path}
                                        exact
                                        path={r.path}
                                        component={r.component}
                                    />
                                ))}
                            </Switch>
                            <Footer />
                        </div>
                    </Router>
                </Provider>
            </main>
        )
    }
}

export default App
