import {FulfillmentResponse, FulfillmentRequest} from './contracts';

export namespace Calculator {

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