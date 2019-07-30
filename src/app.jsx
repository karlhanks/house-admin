import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Frame from './components/Frame'
import Articlecreate from './views/Article/create'
import Articlelist from './views/Article'
import Dashboard from './views/Dashboard'
import Settings from './views/Settings'
export default class App extends Component {
    render() {
        return (
            <Frame>
                <Switch>
                    <Route path='/admin/article/create' component={Articlecreate} />
                    <Route path='/admin/article' component={Articlelist} />
                    <Route path='/admin/dashboard' component={Dashboard} />
                    <Route path='/admin/settings' component={Settings} />
                    <Redirect to='/404' />
                </Switch>
            </Frame>

        )
    }
}

