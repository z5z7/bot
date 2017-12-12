import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as basicAuth from 'express-basic-auth';

import {Actions} from './actions';


//const { DialogflowApp } = require('actions-on-google');

'use strict';
import request = require("request");
import {Content} from "./contentObject";
import {Convo_Components} from "./ConversationComponents";
import {FulfillmentResponse} from "./contracts";


const app: express.Express = express();

//const app: any = new DialogflowApp({request: request, response: response});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Basic-auth function only takes one valid username-password pair
// Not intended for production: replace with integration with an auth server
let DF_USER = process.env.DIALOGFLOW_USER;
let DF_PASS = process.env.DIALOGFLOW_PASS;
function basicAuthorizer(username: string, password: string) {
    return username == DF_USER && password == DF_PASS;
}

// Check the process environment for debug flag
// If set, do not require authentication
if(process.env.DEBUG!='1') {
    app.use(basicAuth({authorizer: basicAuthorizer}));
}

app.route('/dialogflow').post(function (req: any, res: any) {


    //error checking for both the req body and the req action to ensure they are valid
    //else return error
    if ((!req.body.result) || (typeof req.body.result.action === "undefined")) {
        console.log("request is malformed");
        Convo_Components.returnSimpleResponse("Request Body is malformed").then(response => {
            res.json(response);
        })
    }

    let currentAction = req.body.result.action;

    //is content object valid
    if(Content[currentAction]){
        //if here all is good... let's make some utterances!
        Convo_Components.handleUtterance(req).then(response =>{
            res.json(response);
        }).catch(err => {
            res.json(Convo_Components.returnSimpleResponse("I'm sorry. There has been an error: " + err));
        })
    }else{
        console.log("our contentObj is malformed");
        let result: Promise<FulfillmentResponse> = Convo_Components.returnSimpleResponse("HandleRequest: ContentObject is malformed");
        res.json(result);
    }

});

export default app;

