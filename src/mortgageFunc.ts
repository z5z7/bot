import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {Convo_Components} from './ConversationComponents';
import {Content} from './contentObject';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

export namespace MortFunc {
    export function handleDirectMortgage(req): Promise<FulfillmentResponse> {
        return new Promise((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.directMortgages);
            resolve(result);
        })
    }
    export function handleSearchWhatMortgageCalculatorMonthlyPayment(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                reject("invalid request");

            }

            let loanAmount = req.body.result.parameters.loanAmount;
            let interestRate = req.body.result.parameters.interestRate;
            let loanDuration = req.body.result.parameters.loanDuration;


            let arg = "0001/?amount=" + loanAmount.toString() + "&interestRate=" + interestRate + "&years=" + loanDuration.toString();
            console.log("arg: " + arg);


            client.calculateProductIdGet("loans", arg).then(result => {
                let pay = req.body.result.body.result;

                let answer = "Your monthly payment should be " + pay.toString();

                let response: Promise<FulfillmentResponse> = Convo_Components.returnSimpleResponse(answer);
                resolve(response);


            }).catch(err => {

                let answer = "I'm sorry, there was an error with our calculation. Shall we try again?";

                let response = Convo_Components.returnSimpleResponse(answer + " : error " + err);
                resolve(response);


            });

        });

    }

    export function handleMortgageRateSpecialOfferAdvance(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // get mortgage rate from backend for Advance Customer


            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "Our Fixed Rates are:\n" +
                "For a 2 year Fixed Closed: API_CALL\n" +
                "For a 5 year Fixed Closed: API_CALL\n" +
                "\n" +
                "Our Variable Rates are:\n" +
                "For a 5 year Variable Closed: API_CALL",
                displayText: "Our Fixed Rates are:\n" +
                "For a 2 year Fixed Closed: API_CALL\n" +
                "For a 5 year Fixed Closed: API_CALL\n" +
                "\n" +
                "Our Variable Rates are:\n" +
                "For a 5 year Variable Closed: API_CALL",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });

    }


    export function handleMortgageRateSpecialOfferPremier(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // get mortgage rate from backend for Premier Customer

            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "Our Fixed Rates are:\n" +
                "For a 2 year Fixed Closed: API_call\n" +
                "For a 5 year Fixed Closed: API_call\n" +
                "\n" +
                "Variable\n" +
                "For a 5 year Variable Closed: API_call",
                displayText: "Our Fixed Rates are:\n" +
                "For a 2 year Fixed Closed: API_call\n" +
                "For a 5 year Fixed Closed: API_call\n" +
                "\n" +
                "Variable\n" +
                "For a 5 year Variable Closed: API_call",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });

    }

    //TODO: export out to database
    export function handleMortgageRateSpecialOfferPersonalRates(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // get mortgage rate from backend for Personal Customer

            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "Our Fixed Rates are:\n" +
                "For a 2 year Fixed Closed: API_call\n" +
                "For a 5 year Fixed Closed: API_call\n" +
                "\n" +
                "Variable\n" +
                "For a 5 year Variable Closed: API_call",
                displayText: "Our Fixed Rates are:\n" +
                "For a 2 year Fixed Closed: API_call\n" +
                "For a 5 year Fixed Closed: API_call\n" +
                "\n" +
                "Variable\n" +
                "For a 5 year Variable Closed: API_call",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });

    }
    //TODO: export this response out to database
    export function handleMortgageRateSpecialOfferSmartSaver(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {


            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "Our Fixed Rates are:\n" +
                "For a 2 year Fixed Closed: API_call\n" +
                "For a 5 year Fixed Closed: API_call\n" +
                "\n" +
                "Variable\n" +
                "For a 5 year Variable Closed: API_call",
                displayText: "Our Fixed Rates are:\n" +
                "For a 2 year Fixed Closed: API_call\n" +
                "For a 5 year Fixed Closed: API_call\n" +
                "\n" +
                "Variable\n" +
                "For a 5 year Variable Closed: API_call",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });

    }

    //TODO: this should NOT be returning a FulfillmentResponse
    export function handleSearchWhatMortgageType(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // Param 1 = Currency from
            // Param 2 = Corrency To (optional) set default to CAD
            // Param 3 = Amount (optional) set default to 1
            // Call the backend with all the param passed

            // getting the param

            // var cur1 = req.body.result.parameters.currency;
            // var cur2 = req.body.result.parameters.currency;
            // var Amt = req.body.result.parameters.amount;

            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "This will calculate the rate depending on stuff... this will be a dialogue\n" +
                "I need to work on this one as I need to let you know about incoming parameters and outgoing expected result. Just put in a stub for this guy please",
                displayText: "This will calculate the rate depending on stuff... this will be a dialogue\n" +
                "I need to work on this one as I need to let you know about incoming parameters and outgoing expected result. Just put in a stub for this guy please",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });
    }
}
