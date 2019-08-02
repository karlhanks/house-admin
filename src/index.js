import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import App from './app'
import zhCN from 'antd/es/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import Login from './views/Login'
import NotFound from './views/NotFound'
import {Provider} from 'react-redux'
import store from './store'
render(<LocaleProvider locale={zhCN}>
  <Provider store={store}>
    <Router>
      <Switch>
      <Route path='/admin' component={App}/>
      
      <Route path='/login' component={Login}/>
      <Route path='/404' component={NotFound}/>
      <Route path='/' component={Login}/>
      <Redirect to='/404' />
      </Switch>
    </Router>
    </Provider>
  </LocaleProvider>,document.querySelector('#root'))
