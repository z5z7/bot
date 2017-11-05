import {FulfillmentResponse, FulfillmentRequest} from './contracts';

let HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST;



export namespace Calculator {


    export function handleSearchWhatMortgageCalculator(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // Assume all in 1 currency (CAD)
            // Param 1 = Total Amount of Mortgage (CURRENCY)
            // Param 2 = Mortgage Time Left (TIME)
            // Param 3 = Interest Rate (%)
            // Param 4 = The Mortgage Term
            // Param 5 = Yes/No ????
            // Call the backend for Payment Left calculator with all the param passed

            // var Amt = req.body.result.parameters.totalAmount;
            // var TimeLeft = req.body.result.parameters.timeLeft;
            // var Rate = req.body.result.parameters.interestRate;
            // var Term = req.body.result.parameters.term;
            // var Bool = req.body.result.parameters.yes_no; ???

                // need to figure out sending other info
                // the url
                // HSBC_SERVICE_HOST/loans/002/?amount=Amt&interestRate=3&years=5



            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "output: total amount remaining to pay",
                displayText: "output: total amount remaining to pay",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });

    }

    export function handleSearchWhatMortgageCalculatorPaymentLeft(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // Assume all in 1 currency (CAD)
            // Param 1 = Total Amount of Mortgage (CURRENCY)
            // Param 2 = Mortgage Time Left (TIME)
            // Param 3 = Interest Rate (%)
            // Param 4 = The Mortgage Term
            // Param 5 = Yes/No ????
            // Call the backend for Payment Left calculator with all the param passed

            // var Amt = req.body.result.parameters.totalAmount;
            // var TimeLeft = req.body.result.parameters.timeLeft;
            // var Rate = req.body.result.parameters.interestRate;
            // var Term = req.body.result.parameters.term;
            // var Bool = req.body.result.parameters.yes_no; ???

                // need to figure out sending other info
                // the url
                // HSBC_SERVICE_HOST/loans/001/?amount=Amt&interestRate=3&years=5


            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "output: total amount remaining to pay",
                displayText: "output: total amount remaining to pay",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });

    }


}