import React, {Component} from "react"
import {Link} from 'react-router-dom'
import Button from "../components/button"
import Comp from "../components/comp"
import config from "../config.json"

export default class Why extends Component{

    render(){
        let whyComponents = config.why.map((el)=><Comp key={el.image} type="why" image={el.image} text={el.text} class="why-component"/>)
        return (<div className="why-section">
                    <h1 className="section-title">3LACH?</h1>
                    <div className="why-container">
                        <h2 className="section-title">Hadi wa7ed l moubadara khayria li hadaf menha houwa nwefrou dorouss f lmoustawa, fabour o b darija (o l amazighia nchaelah) bach nsehlou ta3aloum 3la chabab lmaghribi</h2>
                        <div className="why-container"  style={{backgroundColor : "#f8f8f8", overflow : "hidden"}}>
                            {whyComponents}
                        </div>
                        <Link to="/Help" className="help-us">&rarr;&emsp;3awna</Link>
                    </div>
                </div>)
    }
}