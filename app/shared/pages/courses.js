import React, {Component} from "react"
import Course from "../containers/course"
import Navbar from "../containers/nav-bar"
import config from "../config.json"


export default class Courses extends Component{

    render(){
        return (<div className="courses-container" >
                    <div id="courses-display">
                        {config.coursestest.map((el,index)=><Course key={index} linkUrl={el.url} imgUrl={el.image} title={el.title} duration={el.duration} difficulty={el.difficulty}/>)}
                    </div>
                    <Navbar/>
                </div>)
    }
}