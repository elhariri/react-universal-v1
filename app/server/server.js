import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { render } from 'react-dom';
import { StaticRouter as Router, matchPath } from 'react-router';
//import helmet from 'react-helmet';
import App from '../shared/app';
import routes from '../shared/routes/routes';

const app = express();

app.use('/dist', express.static('./dist'));

app.get('*', async (req, res) => {
	try {
        let comp = routes.find((route)=>{
            return matchPath(req.path,route) != null          
        })
        
        if(comp != undefined){
          const context = {}
          const html = ReactDOM.renderToString(
            <Router context={context} location={req.path}>
                <App context={context} />
            </Router>)
          res.send(renderFullPage(html))
          res.end()
        }else{
          res.end()
        }
        
	} catch (error) {
    console.log(error)
		res.status(400).send(renderFullPage('An error occured.', {}, {}));
	}
});


app.listen(8080, function () {
	console.log('app running on localhost:8080');
});


function renderFullPage(html) {
	return `<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title> Mor ACADEMY </title>
        <link rel="stylesheet" href="/dist/public/style.css">
    </head>
    <body >
        <div id="app" >
            ${html}
        </div>
        <script type="text/javascript" src="./dist/public/bundle.js"></script>
    </body>
</html>`

}