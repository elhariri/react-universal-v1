import React, {Component} from "react"

export default class Lsit extends Component{

    constructor(props){
        super(props)
        this.state = {
            value : "",
            drop : "Off",
            active : "Off",
            input : this,
        }

        this.inputClick = this.inputClick.bind(this)
        this.foucusOut = this.foucusOut.bind(this)
        this.dropClick = this.dropClick.bind(this)
        //this.dataClick = this.dataClick.bind(this)
    }

    componentDidMount(){
        this.setState({input : document.getElementById(this.props.id)})
}

    inputClick(e,callBack){
        if(this.state.active == "Off"){
            this.setState({active : "On"})
            this.state.input.focus()
        }    
        if(this.state.drop == "Off"){
            this.setState({drop : "On"})
            this.state.input.focus()
        } 
        if(callBack != undefined){
            callBack()
        }  
    }

    dropClick(){
        if(this.state.drop == "Off"){
            this.setState({drop : "On"})
            this.state.input.focus()
        }else{
            this.setState({drop : "Off"})
            this.state.input.focusOut()
        }
    }

    componentDidUpdate(){
        this.state.input.value = this.state.value
    }

    foucusOut(e){
        setTimeout(()=>{
            if(this.state.input.value ==""){
                this.setState({drop : "Off",active : "Off"})
            }else{
                this.setState({drop : "Off"})
            }
        },200)
    }

    render(){
        return (
                    <div className={this.props.class}>
                        <input 
                            id={this.props.id}
                            className="default select-input"
                            defaultValue={this.state.value || ""}
                            type="text"
                            name={this.props.name}
                            readOnly={this.props.readOnly}
                            onClick={(e)=>this.inputClick(e)}
                            onBlur={(e)=>this.foucusOut(e)}
                            onChange={(e)=>console.log(e)}
                            placeholder={this.props.placeholder}
                        />
                        <i className={"default input-dropdown "+this.props.dropClass} onClick={this.dropClick}></i>
                        
                        <div className="default dropdown-menu" style={(this.state.drop == "Off"? {visibility : "hidden", height: "135px"} : {visibility : "visible", height: "135px"})}>
                            <svg 
                                width="100%" 
                                height="100%" 
                                viewBox="0 0 190 135"
                                preserveAspectRatio="none">
                                <path 
                                    className="svg-dropdown" 
                                    d={"M95,0 L 100,5 H 185 C185,5 190,5 190,10 V 130 C190,130 190,135 185,135 H 5 C5,135 0,135 0,130 V 10 C0,10 0,5 5,5 H 90 L 95,0 Z"} 
                                    stroke="none" 
                                    fill="white" 
                                    vectorEffect="non-scaling-stroke"/>
                            </svg>
                            
                        </div>
                    </div>)
    }
}