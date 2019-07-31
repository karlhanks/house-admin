import React, { Component } from 'react'
import { Card, List, Avatar, Button,Badge } from 'antd';
export default class Notify extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[
                {
                  title: 'Ant Design Title 1',
                },
                {
                  title: 'Ant Design Title 2',
                },
                {
                  title: 'Ant Design Title 3',
                },
                {
                  title: 'Ant Design Title 4',
                },
              ]
        }
    }
    render() {
        return (
            <div>
                <Card title="通知中心" extra={<Button>全部标记为已读</Button>} >
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item extra={<Button>标记为已读</Button>}>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design"><Badge dot>
                                    {item.title}
                                  </Badge></a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    
                                />
                            </List.Item>
                        )}
                    />,
                </Card>
            </div>
        )
    }
}