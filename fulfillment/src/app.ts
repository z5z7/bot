import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {Actions} from './actions';

'use strict';

const app: express.Express = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * IMPORTANT:
 *
 * The index URI of this service has to be the same as the Google AppEngine dispatch URL,
 * in order for routing and service-discovery to function correctly.
 *
 * AppEngine routing is specified for the default app in ../hscb-api/dispatch.yaml
 *
 */
app.route('/apiai/v0').post(function (req: any, res: any) {

    handleRequest(req).then(response => {
        res.json(response);
    }).catch(err => {
        res.sendStatus(400)
    });

});

function handleRequest(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse>((resolve, reject) => {

        let action = req.body.result.action;
        if(typeof action === 'undefined') {
            reject("invalid request");
        }

        switch (action) {

            case Actions.MY_ACTION :
                handleMyAction(req).then(response => {
                    resolve(response);
                });
                break;

            default:
                reject("unsupported action");
        }

    });

}

function handleMyAction(req: any) : Promise<FulfillmentResponse>{

    return new Promise<FulfillmentResponse>((resolve, reject) => {

        if(!req.body.result) {
            reject("invalid request");
        }

        let result : FulfillmentResponse = {
            speech: "",
            displayText: "",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

export default app;