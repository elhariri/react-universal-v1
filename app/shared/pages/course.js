import React, {Component} from "react"
import YouTube from "react-youtube"
import Coursenav from "../containers/course-nav"

export default class Coursedisp extends Component{

    render(){
        return (<div id="course-display">
                    <div id="course-body">
                        <div className="course-domaine-bg"></div>
                        <div id="course-video-container">
                            <h1 className="chapter-title">Besmellah!!</h1>
                            <YouTube videoId="79nucpqjA2k" opts={{height : "100%", width : "100%", autoplay : 1}} containerClassName="youtube-video-container"/>
                        </div>
                    </div>
                    <div id="course-text-display">
                        <div id="course-text"></div>
                    </div>
                    <Coursenav/>
                </div>)
    }
}

