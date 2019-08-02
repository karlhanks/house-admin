import React,{Component} from 'react'
import { connect } from 'react-redux'
class Settings extends Component{
    constructor (props){
        super(props)
        props.navUpdate('后台首页>设置')
    }
    render(){
        return (
            <div>
                设置
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
export default connect(mapState, mapDispatch)(Settings)