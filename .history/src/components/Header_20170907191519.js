import React from 'react'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import { routes } from '../App.js'
import { getFullName } from '../utilities/helpers'

const Header = props => {
    const { app } = props
    const userFullName = `${app.users[0].firstName} ${app.users[0].lastName}`
    return (
        <header className="header">
            <h1 className="logo">Logo</h1>
            {props.app.logged_in &&
                <p>
                    Hei
                    <img
                        style={{ width: '50px', borderRadius: '50%' }}
                        src={app.users[0].avatar}
                        alt={userFullName}
                    />
                    {userFullName}
                </p>}
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
