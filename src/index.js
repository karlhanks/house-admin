import React from 'react'
import {render} from 'react-dom'
import App from './app'
import zhCN from 'antd/es/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
render(<LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,document.querySelector('#root'))
