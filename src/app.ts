import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as config from 'config';
import * as basicAuth from 'express-basic-auth';

import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {Actions} from './actions';
import {Calculator} from "./calculator";
import {Fxfunc} from "./fxfunc";
import {Atmfunc} from "./atmfunc";
import {Mortfunc} from "./mortgagefunc";
import {Bookfunc} from "./bookfunc";
import {Welcome} from "./welcomefunc";

import {DefaultApi, HttpBasicAuth} from "./hsbc-api";

'use strict';

const app: express.Express = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
let DF_USER = process.env.DIALOGFLOW_USER;
let DF_PASS = process.env.DIALOGFLOW_PASS;

function basicAuthorizer(username, password) {
    return username == DF_USER && password == DF_PASS;
}

app.use(basicAuth({authorizer: basicAuthorizer}));

app.route('/dialogflow').post(function (req: any, res: any) {

    handleRequest(req).then(response => {
        res.json(response);
    }).catch(err => {
        console.error(err);
        res.sendStatus(400);
    });

});



function handleRequest(req: express.Request): Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse>((resolve, reject) => {

        let action = req.body.result.action;
        if(typeof action === "undefined") {
            reject("invalid request");
        }

        switch (action) {


            case Actions.WELCOME :
                Welcome.handleInputWelcome(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.MORTGAGERATE_SPECIALOFFER_ADVANCE :
                Mortfunc.handleMortgageRateSpecialOfferAdvance(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.MORTGAGERATE_SPECIALOFFER_PREMIER :
                Mortfunc.handleMortgageRateSpecialOfferPremier(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.MORTGAGERATE_SPECIALOFFER_PERSONALRATES :
                Mortfunc.handleMortgageRateSpecialOfferPersonalRates(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.MORTGAGERATE_SPECIALOFFER_SMARTSAVER :
                Mortfunc.handleMortgageRateSpecialOfferSmartSaver(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.FIND_WHAT_EXCHANGERATE :

                Fxfunc.handleFindWhatExchangeRate(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.FIND_ATM :
                Atmfunc.handleFindAtm(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.SEARCH_WHERE_ATM_LOCATION :
                Atmfunc.handleSearchWhereAtmLocation(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.SEARCH_WHERE_ATM_LOCATION_FALLBACK :
                Atmfunc.handleSearchWhereAtmLocationFallback(req).then(response => {
                    resolve(response);
                });
                break;

            /*case Actions.SEARCH_CURRENCY_EXCHANGE:
                Fxfunc.handleSearchCurrencyExchange(req).then(response => {
                    resolve(response);
                });
                break;*/

            case Actions.SEARCH_WHAT_EXCHANGERATE :
                Fxfunc.handleSearchWhatExchangeRate(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.SEARCH_WHAT_MORTGAGETYPE :
                Mortfunc.handleSearchWhatMortgageType(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.SEARCH_WHERE_ATM :
                Atmfunc.handleSearchWhereAtm(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.FIND_HOW_MONTHLY_PAYMENT :
                Calculator.handleSearchWhatMortgageCalculatorMonthlyPayment(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.FIND_HOW_REMAINING_LOAN_PAYMENT :
                Calculator.handleSearchWhatMortgageCalculatorRemainingPayment(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.BOOKING :
                Bookfunc.handleBooking(req).then(response => {
                    resolve(response);
                });
                break;

            default:
                reject("unsupported action");
        }

    });

}




export default app;
