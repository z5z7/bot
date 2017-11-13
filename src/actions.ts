import * as express from 'express';
import * as bodyParser from 'body-parser';

import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {Calculator} from "./calculator";
import {Fxfunc} from "./fxfunc";
import {Atmfunc} from "./atmfunc";
import {Mortfunc} from "./mortgagefunc";
import {Bookfunc} from "./bookfunc";
import {Welcome} from "./welcomefunc";
import {Google_Components} from "./google_ConversationComponents";

'use strict';

const app: express.Express = express();

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//so let's map our dialogFlow actions to our webhook functions
let actionToFuncMap = {
                    //
                    "welcome" : Welcome.handleInputWelcome,
                    "GOOGLE_ASSISTANT_WELCOME " : Welcome.handleInputWelcome,
                    "smalltalk.agent.talk_to_me" : Welcome.handleInputWelcome,
                    //
                    "find.where.atm" : Atmfunc.handleFindAtm,
                    "search.where.atm" : Atmfunc.handleSearchWhereAtm,
                    //
                    "find.what.exchangeRate" : Fxfunc.handleFindWhatExchangeRate,
                    "search.what.exchangeRate" : Fxfunc.handleSearchWhatExchangeRate,
                    //
                    "search.what.mortgageType": Mortfunc.handleSearchWhatMortgageType,
                    "find.how.mortgages.calculate.monthlyPayment" : Calculator.handleSearchWhatMortgageCalculatorMonthlyPayment,
                    "find.how.mortgages.calculate.remainingLoan" : Calculator.handleSearchWhatMortgageCalculatorRemainingPayment,
                    //
                    "book.appointment": Bookfunc.handleBooking
                    };

export namespace Actions {
    //called in app.ts and handles all of the action to function mapping and calling
    export function handleRequest(req: express.Request): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let currentAction = req.body.result.action;
            console.log("current action: " + currentAction);
            if(typeof currentAction === "undefined") {
                reject("invalid request");
            }
            //call the appropriate function according to its action... IF it exists
            if(actionToFuncMap[currentAction]){
                actionToFuncMap[currentAction](req).then(response =>{
                    resolve(response);
                })
            }else{
                resolve(Google_Components.returnSimpleResponse("I'm sorry. My mind skipped. What was that?   \n I didn't catch: " + currentAction))
            }
        });
    }
}
