import React, {Component} from "react"
import Footer from "../containers/footer"

export default class Help extends Component{

    render(){
        return (<div className="help-container" style={{backgroundColor : "rgb(248, 248, 248)"}}>
                    <h1 className="section-title" >LTA7E9</h1>
                    <h2 className="section-title" >Had l moubadara maymken liha tenje7 ila blmoussa3ada dialkoum</h2>
                    <form className="help-form" >
                        <label className="input-label">Smia :</label><input className="help-input" name="first Name" type="text" />
                        <label className="input-label">Lknia :</label><input className="help-input" name="Last Name" type="text" />
                        <label className="input-label">Nmira :</label><input className="help-input" name="Phone number" type="tel" />
                        <label className="input-label">lmail :</label><input className="help-input" name="e-mail" type="email" />
                        <label className="input-label">Fach ghat3awen :</label><input className="help-input" name="Phone number" type="tel" />
                        <label className="input-label">Chi kalima :</label><textarea className="textarea" name="comment"/>
                    </form>
                    <Footer/>
                </div>)
    }
}