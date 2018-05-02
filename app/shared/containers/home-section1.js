import React, {Component} from "react"
import Button from "../components/button";


export default class Bg extends Component{


    render(){
        return (<div>
                    <img className="home-bg" src="bg1.svg"/>
                    <h1 className="title">dir 3lach twelli a khay diali</h1>
                    <h2 className="sub-title">courat b darija o fabouuur</h2>
                    <Button type="empty" color="#20cb97" value="M9EYED" class="sign-in" style={{}}/>
                    <Button type="normal" color="#ff6364" value="LA!! DOUZ T9EYED" class="sign-up" style={{}}/>
                </div>)
    }
}

