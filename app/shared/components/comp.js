import React, {Component} from "react"


export default class Howcomp extends Component{

    render(){
        return (<div className={"component "+this.props.class}>
                    <div className="how-img-container">
                        <img className="how-img" src={"icons/"+this.props.type+"/"+this.props.image + ".svg"}/>
                    </div>
                    <span className="how-text" >{this.props.text}</span>
                </div>)
    }
}