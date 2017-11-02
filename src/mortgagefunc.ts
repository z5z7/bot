import {FulfillmentResponse, FulfillmentRequest} from './contracts';


export namespace Mortfunc {

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

    export function handleMortgageRateSpecialOfferSmartSaver(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // get mortgage rate from backend for SmartSaver Customer

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
