import React, { Component } from 'react'
import { Switch } from 'react-router'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'

import Header from './components/Header'
import Footer from './components/Footer'
import FrontPage from './containers/FrontPage'
import AboutPage from './containers/AboutPage'
import NoMatchPage from './containers/NoMatchPage'

class App extends Component {
    render() {
        return (
            <main className="main">
                <Provider store={store}>
                    <Router history={history}>
                        <div>
                            <Header />
                            <Switch>
                                <Route exact path="/" component={FrontPage} />
                                <Route path="/about" component={AboutPage} />
                                <Route path="*" component={NoMatchPage} />
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
