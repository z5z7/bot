import * as express from 'express';
import * as bodyParser from 'body-parser';

import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {Calculator} from "./Calculator";
import {Exchange} from "./Exchange";
import {AtmFunc} from "./atmFunc";
import {MortFunc} from "./mortgageFunc";
import {Appointments} from "./Appointments";
import {Welcome} from "./welcomeFunc";
import {RrspFunc} from "./rrspFunc";
import {WsfFunc} from "./wsfFunc";
import {Convo_Components} from "./ConversationComponents";

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
                    "find.where.atm" : AtmFunc.handleFindAtm,
                    "search.where.atm" : AtmFunc.handleSearchWhereAtm,
                    //
                    "find.what.exchangeRate" : Exchange.handleFindWhatExchangeRate,
                    "search.what.exchangeRate" : Exchange.handleSearchWhatExchangeRate,
                    //
                    "search.what.mortgageType": MortFunc.handleSearchWhatMortgageType,
                    "find.how.mortgages.calculate.monthlyPayment" : Calculator.handleSearchWhatMortgageCalculatorMonthlyPayment,
                    "find.how.mortgages.calculate.remainingLoan" : Calculator.handleSearchWhatMortgageCalculatorRemainingPayment,
                    //
                    "direct.rrsp" : RrspFunc.handleDirectRRSP,
                    "find.how.apply.rrsp" : RrspFunc.handleApplyRRSP,
                    "find.what.rrsp.benefits" : RrspFunc.handleRRSPBenefits,
                    //
                    "direct.wsf" : WsfFunc.handleDirectWsf,
                    "find.what.wsf.eligible" : WsfFunc.handleEligibilityWSF,
                    "find.what.wsf.more" : WsfFunc.handleWsfMore,
                    //
                    "direct.mortgages" : MortFunc.handleDirectMortgage,
                    "direct.apply" : Appointments.handleBooking,
                    "book.appointment" : Appointments.handleBooking
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
                resolve(Convo_Components.returnSimpleResponse("I'm sorry. My mind skipped a beat. What was that?   \n I didn't catch: " + currentAction))
            }
        });
    }
}
