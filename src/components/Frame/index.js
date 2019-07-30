import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import './index.less'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Sider } = Layout;
export default class Frame extends Component{
    render(){
        return(
            <Layout>
    <Header className="header">
      <img src={logo} alt='logo'/>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="1"><Link to='/admin/dashboard'><Icon type="dashboard" />仪表盘</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/admin/article'><Icon type="database" />文章管理</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/admin/Settings'><Icon type="setting" />设置</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
        )
    }
}
