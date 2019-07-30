import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import App from './app'
import zhCN from 'antd/es/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import Login from './views/Login'
import NotFound from './views/NotFound'
render(<LocaleProvider locale={zhCN}>
    <Router>
      <Switch>
      <Route path='/admin' component={App}/>
      <Route path='/login' component={Login}/>
      <Route path='/404' component={NotFound}/>
      <Redirect to='/404' />
      </Switch>
    </Router>
  </LocaleProvider>,document.querySelector('#root'))
