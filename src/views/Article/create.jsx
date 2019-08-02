import React, { Component } from 'react'
import { Card, Button, Form, Input,DatePicker ,message} from 'antd';
import wangEditor from 'wangeditor'
import {postArtapi} from '../../api'
import moment from 'moment'
import {connect} from 'react-redux'
 class ArticleCreate extends Component {
   constructor(props){
     super(props)
     this.state={
       editor:'',
       loading:false
     }
     props.navUpdate('后台首页>创建文章')
   }
   componentDidMount(){
    this.state.editor=new wangEditor(this.refs.editor)
    this.state.editor.create()
   }
    
    onChange(date, dateString) {
        console.log(date, dateString);
      }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.setState({loading:true})
            postArtapi({
              title:values.title,
              author:values.author,
              pv:values.pv,
              created_at:moment(values.created_at).valueOf(),
              content:this.state.editor.txt.html()
            }).then(res=>{
              if(res.meta.state===201){
                message.success(res.meta.msg,2);
                this.props.history.push('admin/article')
              }else{
                message.error(res.meta.msg,2);
              }
              this.setState({loading:false})
            })
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
        <DatePicker onChange={this.onChange} />
        </Form.Item>
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
          <div ref="editor"></div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
            发表文章
          </Button>
        </Form.Item>
        
      </Form>
                </Card>
            </div>
        )
    }
}
const mapState=state=>{
  return {
  
  }
}
const mapDispatch=dispatch=>{
  return {
      navUpdate:(content)=>dispatch({
          type:'NAV_BREAD',
          payload:{
              content:content
          }
      })
  }
}
export default connect(mapState,mapDispatch)(Form.create({ name: '标识' })(ArticleCreate))