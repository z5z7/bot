import * as express from 'express';
import * as bodyParser from 'body-parser';

import {FulfillmentResponse, ContentObject} from './contracts';
import {Convo_Components} from "./ConversationComponents";
import {Content} from "./contentObject";

'use strict';


const app: express.Express = express();

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


export namespace Actions {
    //called in app.ts and handles all of the action to function mapping and calling
    export function handleRequest(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let currentAction = req.body.result.action;
            let contentObj: ContentObject = Content[currentAction];

            console.log("current action: " + currentAction + "  contentObj.simpleResponse is: " + contentObj.simpleResponse);

            //is action valid?
            if(typeof currentAction === "undefined") {
                resolve(Convo_Components.returnSimpleResponse("I'm sorry. This current action is undefined."));
            }

            //is our request valid?
            if ((!req.body.result)) {
                console.log("request is malformed");
                let result: Promise<FulfillmentResponse> = Convo_Components.returnSimpleResponse("Request Body is malformed");
                reject(result);
            }

            //if here all is good... let's make some utterances!
            Convo_Components.handleUtterance(req, contentObj).then(response =>{
                resolve(response);
            }).catch(err => {
                resolve(Convo_Components.returnSimpleResponse("I'm sorry. There has been an error: " + err));
            })

        })
    }
}
