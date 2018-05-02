import React, {Component} from "react"
import { withRouter } from "react-router-dom"
import config from "../config.json"

class Course extends Component{

    constructor(props){
        super(props)
        this.click = this.click.bind(this)
    }

    click(e){
        this.props.history.push("/Courses/"+this.props.linkUrl)
    }

    render(){
        return (<div className="course">
                    <img onClick={(e)=>{this.click(e)}} className="course-image" src={"/coursesImages/"+this.props.imgUrl+".jpg"}/>
                    <span onClick={(e)=>{this.click(e)}} className="course-title">{this.props.title}</span>
                    <div className="course-info">
                        <div className="course-duration course-info-element">{this.props.duration}</div>
                        <div className="course-difficulty course-info-element">{this.props.difficulty}</div>
                        <input type="checkbox" className="course-save-later course-info-element fas fa-heart"/>
                    </div>
                </div>)
    }
}

export default withRouter(Course)