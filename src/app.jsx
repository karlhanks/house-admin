import React,{Component} from 'react'
import { Button ,Pagination} from 'antd';
export default class App extends Component{
    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
      }
    render(){
        return (
            <div>webopenfather<Button type="primary">Button</Button>
            <Pagination
      showSizeChanger
      onShowSizeChange={this.onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
            </div>
        )
    }
}