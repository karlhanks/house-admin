import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col } from 'antd'
import './index.less'
import echarts from 'echarts'
class Dashboard extends Component {
    constructor(props){
        super(props)
        props.navUpdate('后台首页>仪表盘')
    }
    componentDidMount() {
        var myChart = echarts.init(this.refs.main);
        var option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }],
        }
        myChart.setOption(option)
    }
    render() {
        return (
            <div>
                <Card title="概览" bordered={false} >
                    <div className="gutter-example">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box" style={{ background: 'red' }}>col-6</div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box" style={{ background: 'green' }}>col-6</div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box" style={{ background: 'yellow' }}>col-6</div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box" style={{ background: 'orange' }}>col-6</div>
                            </Col>
                        </Row>
                    </div>,
                </Card>
                <Card title="最近浏览量" bordered={false}>
                    <div ref="main" style={{ width: '600px', height: '400px' }}></div>
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
export default connect(mapState, mapDispatch)(Dashboard)