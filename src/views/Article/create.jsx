import React, { Component } from 'react'
import { Card, Button, Form, Input,DatePicker } from 'antd';
import wangEditor from 'wangeditor'
 class ArticleCreate extends Component {
   componentDidMount(){
    var E = wangEditor
    var editor = new E(this.refs.editor)
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.create()
   }
    
    onChange(date, dateString) {
        console.log(date, dateString);
      }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="文章列表" extra={<Button>返回</Button>} >
                <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入文章标题' }],
          })(
            <Input placeholder="请输入文章标题"/>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('author', {
            rules: [{ required: true, message: '请输入作者' }],
          })(
            <Input placeholder="请输入作者"/>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('pv', {
            rules: [{ required: true, message: '阅读量' }],
          })(
            <Input placeholder="阅读量"/>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('pv', {
            rules: [{ required: true, message: '阅读量' }],
          })(
            <Input placeholder="阅读量"/>,
          )}
        </Form.Item>
        <Form.Item>
        <DatePicker onChange={this.onChange} />
        </Form.Item>
        <Form.Item>
          <div ref="editor"></div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            发表文章
          </Button>
        </Form.Item>
        
      </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create({ name: '标识' })(ArticleCreate);