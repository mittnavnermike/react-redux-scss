import React from 'react'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

const Header = props => {
    return (
        <header className="header">
            <h1 className="logo">Logo</h1>
            {props.app.logged_in && <p>Hei bruker</p>}
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
