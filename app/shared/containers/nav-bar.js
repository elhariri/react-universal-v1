import React, {Component} from "react"
import List from "../components/list"

export default class Navbar extends Component{
    render(){
        return (
            <div id="navbar-container">
                <div id="navbar">
                    <input className="navbar-elem input" type="search" placeholder="Chnou bghiti?"/>
                    <List class="navbar-elem" id="courses-domaine" dropClass="fas fa-arrow-circle-down" readOnly="true" name="discipline" placeholder="informatik, lmath, lphisic..."/>
                    <List class="navbar-elem" id="courses-tag" dropClass="fas fa-plus-circle" readOnly={false} name="tags" placeholder="Cheyer 3ellah"/>
                </div>
            </div>
        )
    }
}