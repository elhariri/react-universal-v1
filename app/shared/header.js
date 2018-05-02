import React, {Component} from "react"
import {NavLink as Link} from "react-router-dom"
import config from "../shared/config.json"

export default class Header extends Component{

    render(){
        return (
        <header id="header">
            <ul className="header-menu">{config.header.map(
                (el)=>{
                    if(el.name == "logo"){
                        return <Link to={"/"+el.path} key="logo" className="logo" replace></Link>
                    }else{
                        return <Link to={"/"+el.path} activeStyle={{borderBottom: "2px solid white"}} key={el.name} style={{backgroundImage : "url(icons/header/"+el.icon+".svg)"}} className="header-item" replace>{el.name}</Link>
                    }
                }
            )}
            </ul>
        </header>)
    }
}
