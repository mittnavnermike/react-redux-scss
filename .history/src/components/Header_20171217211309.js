import React from 'react'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import { routes } from '../App.js'
import { getFullName } from '../utilities/helpers'

const Header = props => {
    const { app } = props
    return (
        <header className="header">
            <h1 className="logo">Logo</h1>
            {props.app.logged_in && <p>Hei, Bruker</p>}
            {routes
                .filter(r => r.show)
                .map(r => <li key={r.name}><a href={r.path}>{r.name}</a></li>)}
        </header>
    )
}

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
