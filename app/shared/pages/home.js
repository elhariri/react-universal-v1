import React, {Component} from "react"
import Bg from '../containers/home-section1'
import How from '../containers/home-section2'
import Why from '../containers/home-section3'
import Footer from '../containers/footer'

export default class Home extends Component{

    render(){
        return (<div><Bg/><How/><Why/><Footer/></div>)
    }
}

