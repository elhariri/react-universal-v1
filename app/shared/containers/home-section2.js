import React, {Component} from "react"
import Button from "../components/button"
import Comp from "../components/comp"
import config from "../config.json"

export default class How extends Component{

    render(){
        let howComponents = config.how.map((el)=><Comp key={el.image} type="how" image={el.image} text={el.text} class="how-component"/>)
        return (<div className="home-section">
                    <h1 className="section-title">KIFACH?</h1>
                    <div className="how-container">
                        {howComponents}
                    </div>
                </div>)
    }
}