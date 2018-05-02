import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import style from './assets/styles.css'
import Header from './header'
import routes from './routes/routes';

export default class App extends Component {

    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    {
                        routes.map((route, index)=><Route key={index} exact={route.exact} path={route.path} component={route.component}/>)
                    }
                </Switch>
            </div>
        )
    }
}