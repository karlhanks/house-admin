import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox ,Card, message} from 'antd';
import {getLoginApi} from '../../api'
import './index.less'
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                getLoginApi(values).then(res=>{
                    if(res.meta.state===200){
                        if(values.remember){
                            localStorage.setItem('uname',res.data.username)
                            localStorage.setItem('token',res.data.token)
                        }
                        else{
                            sessionStorage.setItem('uname',res.data.username)
                            sessionStorage.setItem('token',res.data.token)
                        }
                        message.success('登录成功')
                        setTimeout(()=>{
                            this.props.history.push('/admin/dashboard')
                        },1000)
                    }
                    else{
                        message.error(res.meta.msg)
                    }
                })
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='biglogin'>
                <Card title="karl-shop" bordered={false} className="login" headStyle={{color:'#fff'}}>
                <Form onSubmit={this.handleSubmit} className="login-form" bordered={true}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    
                    </Form.Item>
                </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create({ name: 'normal_login' })(Login);
