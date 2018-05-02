import React, {Component} from 'react'

export default class Button extends Component{

    constructor(props){
        super(props)
        this.state = {
            hovered : 'Off',
            color : this.props.color,
            type : this.props.type
        }
        this.enter = this.enter.bind(this)
        this.leave = this.leave.bind(this)
    }

    enter(e){
        this.setState({hovered : 'On'})
    }

    leave(e){
        this.setState({hovered : 'Off'})
    }

    render(){
        if(this.state.type == 'normal'){
            let style = Object.assign(this.props.style,{backgroundColor : this.state.color, border : '1px solid '+this.state.color})
            return <button onMouseLeave={(e)=>this.leave(e)} onMouseEnter={(e)=>this.enter(e)} className={'button '+this.props.class} style={{...style,filter : (this.state.hovered == 'On'? 'grayscale(15%)' : 'grayscale(0%)')}} value={this.props.value}>{this.props.value}</button>
        }else if(this.state.type == 'empty'){
            let style = Object.assign(this.props.style,{border : '1px solid '+this.state.color})
            return <button onMouseLeave={(e)=>this.leave(e)} onMouseEnter={(e)=>this.enter(e)} className={'button '+this.props.class} style={{...style,backgroundColor : (this.state.hovered == 'On'? this.state.color : 'transparent')}} value={this.props.value}>{this.props.value}</button>
        }
    }
}