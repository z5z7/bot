import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {Calculator} from "./calculator";
import {Fxfunc} from "./fxfunc";
import {Atmfunc} from "./atmfunc";
import {Mortfunc} from "./mortgagefunc";
import {Bookfunc} from "./bookfunc";
import {Welcome} from "./welcomefunc";

'use strict';

const app: express.Express = express();

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const WELCOME = "welcome";
const MORTGAGERATE_SPECIALOFFER_ADVANCE = "mortgageRate.specialOffer.advance";
const MORTGAGERATE_SPECIALOFFER_PREMIER = "mortgageRate.specialOffer.premier";
const MORTGAGERATE_SPECIALOFFER_PERSONALRATES = "mortgageRate.specialOffer.personalRates";
const MORTGAGERATE_SPECIALOFFER_SMARTSAVER = "mortgageRate.specialOffer.smartSaver";
const FIND_WHAT_EXCHANGERATE = "find.what.exchangeRate";
const SEARCH_WHERE_ATM_LOCATION = "search.where.atm.location";
const SEARCH_WHERE_ATM_LOCATION_FALLBACK = "actions.intent.PERMISSION";
const FIND_ATM = "find.atm";
const SEARCH_WHERE_ATM = "search.where.atm";
const SEARCH_WHAT_EXCHANGERATE = "search.what.exchangeRate";
const SEARCH_WHAT_MORTGAGETYPE = "search.what.mortgageType";
const FIND_HOW_MONTHLY_PAYMENT = "find.how.mortgages.calculate.monthlyPayment";
const FIND_HOW_REMAINING_LOAN_PAYMENT = "find.how.mortgages.calculate.remainingLoan";
const BOOKING = "book.appointment";


export namespace Actions {

    export function handleRequest(req: express.Request): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            let action = req.body.result.action;
            if(typeof action === "undefined") {
                reject("invalid request");
            }

            switch (action) {


                case WELCOME :
                    Welcome.handleInputWelcome(req).then(response => {
                        resolve(response);
                    });
                    break;

                case MORTGAGERATE_SPECIALOFFER_ADVANCE :
                    Mortfunc.handleMortgageRateSpecialOfferAdvance(req).then(response => {
                        resolve(response);
                    });
                    break;

                case MORTGAGERATE_SPECIALOFFER_PREMIER :
                    Mortfunc.handleMortgageRateSpecialOfferPremier(req).then(response => {
                        resolve(response);
                    });
                    break;

                case MORTGAGERATE_SPECIALOFFER_PERSONALRATES :
                    Mortfunc.handleMortgageRateSpecialOfferPersonalRates(req).then(response => {
                        resolve(response);
                    });
                    break;

                case MORTGAGERATE_SPECIALOFFER_SMARTSAVER :
                    Mortfunc.handleMortgageRateSpecialOfferSmartSaver(req).then(response => {
                        resolve(response);
                    });
                    break;

                case FIND_WHAT_EXCHANGERATE :

                    Fxfunc.handleFindWhatExchangeRate(req).then(response => {
                        resolve(response);
                    });
                    break;

                case FIND_ATM :
                    Atmfunc.handleFindAtm(req).then(response => {
                        resolve(response);
                    });
                    break;

                case SEARCH_WHERE_ATM_LOCATION :
                    Atmfunc.handleSearchWhereAtmLocation(req).then(response => {
                        resolve(response);
                    });
                    break;

                case SEARCH_WHERE_ATM_LOCATION_FALLBACK :
                    Atmfunc.handleSearchWhereAtmLocationFallback(req).then(response => {
                        resolve(response);
                    });
                    break;

                /*case Actions.SEARCH_CURRENCY_EXCHANGE:
                 Fxfunc.handleSearchCurrencyExchange(req).then(response => {
                 resolve(response);
                 });
                 break;*/

                case SEARCH_WHAT_EXCHANGERATE :
                    Fxfunc.handleSearchWhatExchangeRate(req).then(response => {
                        resolve(response);
                    });
                    break;

                case SEARCH_WHAT_MORTGAGETYPE :
                    Mortfunc.handleSearchWhatMortgageType(req).then(response => {
                        resolve(response);
                    });
                    break;

                case SEARCH_WHERE_ATM :
                    Atmfunc.handleSearchWhereAtm(req).then(response => {
                        resolve(response);
                    });
                    break;

                case FIND_HOW_MONTHLY_PAYMENT :
                    Calculator.handleSearchWhatMortgageCalculatorMonthlyPayment(req).then(response => {
                        resolve(response);
                    });
                    break;

                case FIND_HOW_REMAINING_LOAN_PAYMENT :
                    Calculator.handleSearchWhatMortgageCalculatorRemainingPayment(req).then(response => {
                        resolve(response);
                    });
                    break;

                case BOOKING :
                    Bookfunc.handleBooking(req).then(response => {
                        resolve(response);
                    });
                    break;

                default:
                    reject("unsupported action");
            }

        });

    }
}
