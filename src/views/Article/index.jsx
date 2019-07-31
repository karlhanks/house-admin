import React, { Component } from 'react'
import { Card, Button, Table, Divider, Tag } from 'antd';
import {getArtApi} from '../../api/index'
import moment from 'moment'
export default class ArticleCreate extends Component {//定义文章列表模块
    constructor(props){
        super(props)
        this.state={
            data:[],//存放文章数据
            total:null,
            pageno:1,//当前页数
            pagesize:5//每页显示的数据
        }
    }
    initdata(){//初始化请求数据
        getArtApi({
            pageSize:this.state.pagesize,
            pageno:this.state.pageno
        })
        .then(res=>{
            this.setState({
                data:res.data.list,
                total:res.data.total
            })
            
        })
    }
    changepage(params){
        this.setState({
            pageno:params.current
        },
        ()=>{
            this.initdata()
        }
        )
    }
    componentDidMount(){
        this.initdata()
    }

    render() {
        const columns = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id',

            },
            {
                title: '标题',
                dataIndex: 'titile',
                key: 'titile',
            },
            {
                title: '作者',
                dataIndex: 'author',
                key: 'author',
            },
            {
                title: '阅读量',
                dataIndex: 'pv',
                key: 'pv',
                render:(tags)=>{
                    let color=tags>200 ? 'geekblue':'green';
                    return (<Tag color={color}>{tags}</Tag>)
                    
                }
            },
            {
                title: '创建于',
                dataIndex: 'created_at',
                key: 'created_at',
                render:(text)=>{
                    return moment(text).format('YYYY年MM月DD日 hh:mm:ss')
                }
            },
            {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render:()=>{
                    let blue={background:'blue',
                    border:'none',
                    marginRight:'5px'
                };
                    return (
                        <div>
                        <Button type="danger" size='small' style={blue}>编辑</Button>
                        <Button type="primary" size='small'>删除</Button>
                        </div>
                    )
                }
            },
        ];
        return (
            <div>
                <Card title="文章列表" extra={<Button type="primary">导出Excel</Button>} >
                    <Table columns={columns} dataSource={this.state.data} 
                    pagination={{pageSize:this.state.pagesize,total:this.state.total}} 
                    onChange={this.changepage.bind(this)}
                    />
                </Card>
            </div>
        )
    }
}