import React, { Component } from 'react'
import { Card, Button, Table, Tag, Modal, message } from 'antd';
import { getArtApi, deleteArtapi } from '../../api/index'
import { connect } from 'react-redux'
import moment from 'moment'
import { exportExcel } from 'xlsx-oc'
const { confirm } = Modal;
class ArticleCreate extends Component {//定义文章列表模块
    constructor(props) {
        super(props)
        this.state = {
            data: [],//存放文章数据
            total: null,
            pageno: 1,//当前页数
            pagesize: 5,//每页显示的数据,
            loading: false
        }
        props.navUpdate('后台首页>文章列表')
    }
    showConfirm(record) {
        confirm({
            title: '提示',
            content: '是否删除【' + record.titile + '】文章记录？',
            onOk() {
                deleteArtapi(record.id).then(res => {
                    if (res.meta.state === 200) {
                        let trobj = document.querySelector(`tr[data-row-key="${record.id}"]`)
                        trobj.style.display = 'none'
                        message.success('删除成功')
                    } else {
                        message.error(res.meta.msg)
                    }
                })
            },
            onCancel() {

            },
        });
    }
    initdata() {//初始化请求数据
        this.setState({ loading: true })
        getArtApi({
            pageSize: this.state.pagesize,
            pageno: this.state.pageno
        })
            .then(res => {
                this.setState({
                    data: res.data.list,
                    total: res.data.total,
                    loading: false
                })

            })
    }
    changepage(params) {
        this.setState({
            pageno: params.current
        },
            () => {
                this.initdata()
            }
        )
    }
    componentDidMount() {
        this.initdata()
    }
    exportDefaultExcel = () => {//导出excel
        var _headers = [{ k: 'id', v: '编号' }, { k: 'titile', v: '标题' },
        { k: 'author', v: '作者' }, { k: 'pv', v: '阅读量' }, { k: 'created_at', v: '创建于' },]
        exportExcel(_headers, this.state.data);
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
                render: (tags) => {
                    let color = tags > 200 ? 'geekblue' : 'green';
                    return (<Tag color={color}>{tags}</Tag>)

                }
            },
            {
                title: '创建于',
                dataIndex: 'created_at',
                key: 'created_at',
                render: (text) => {
                    return moment(text).format('YYYY年MM月DD日 hh:mm:ss')
                }
            },
            {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (text, record) => {
                    let blue = {
                        background: 'blue',
                        border: 'none',
                        marginRight: '5px'
                    };
                    return (
                        <div>
                            <Button type="danger" size='small' style={blue}>编辑</Button>
                            <Button type="primary" size='small' onClick={this.showConfirm.bind(this, record)}>删除</Button>
                        </div>
                    )
                }
            },
        ];
        return (
            <div>
                <Card title="文章列表" extra={<Button type="primary" onClick={this.exportDefaultExcel.bind(this)}>导出Excel</Button>} >
                    <Table
                        loading={this.state.loading}
                        columns={columns} dataSource={this.state.data}
                        pagination={{ pageSize: this.state.pagesize, total: this.state.total }}
                        onChange={this.changepage.bind(this)}
                    />
                </Card>
            </div>
        )
    }
}
const mapState = state => {
    return {

    }
}
const mapDispatch = dispatch => {
    return {
        navUpdate: (content) => dispatch({
            type: 'NAV_BREAD',
            payload: {
                content: content
            }
        })
    }
}
export default connect(mapState, mapDispatch)(ArticleCreate)