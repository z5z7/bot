import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

export namespace Calculator {

    export function handleSearchWhatMortgageCalculatorMonthlyPayment(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // Call the backend for MonthlyPayment Left calculator with all the param passed

            if (!req.body.result) {
                reject("invalid request");

            }

          /*  let amt = req.body.result.contexts[0].parameters.loanAmount.amount;
            let rate = req.body.result.contexts[0].parameters.interestRate;
            let ratepass = rate.replace(/%/g,'').toString();
            let ldur = req.body.result.contexts[0].parameters.loanDuration.amount;
            let ldurunit = req.body.result.contexts[0].parameters.loanDuration.unit;*/

            let amt = req.body.result.parameters.loanAmount;
            let ratepass = req.body.result.parameters.interestRate;
            let ldur = req.body.result.parameters.loanDuration;
            //let ldurunit = req.body.result.parameters.loanDuration.unit;

            //if (ldurunit == "mo") {
            //    ldur = ldur/12;
            //}

            let ldurpass = ldur.toString();
            let amtpass = amt.toString();

            let arg = "0001/?amount=" + amtpass + "&interestRate=" + ratepass + "&years=" + ldurpass;

            client.calculateProductIdGet("loans",arg).then(result => {
                // console.log(result.body);
                let pay = result.body.result;

                let str = "Your monthly payment is " + pay.toString();

                const result1: FulfillmentResponse = {
                    speech: str,
                    displayText: str,
                    data: {},
                    contextOut: [],
                    source: ""
                };

                resolve(result1);
            }).catch(err => {
                // console.log(err);

                const result2: FulfillmentResponse = {
                    speech: "Something went wrong at our backend",
                    displayText: "Something went wrong at our backend",
                    data: {},
                    contextOut: [],
                    source: ""
                };

                resolve(result2);
            });

        });

    }

    export function handleSearchWhatMortgageCalculatorRemainingPayment(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // Call the backend for Payment Left calculator with all the param passed

            /*let amt = req.body.result.contexts[0].parameters.loanAmount.amount;
            let rate = req.body.result.contexts[0].parameters.interestRate;
            let ratepass = rate.replace(/%/g,'').toString();
            let ldur = req.body.result.contexts[0].parameters.loanDuration.amount;
            let ldurunit = req.body.result.contexts[0].parameters.loanDuration.unit;
            let pmade = req.body.result.contexts[0].parameters.paymentsMadeInMonths;
*/
            let amt = req.body.result.parameters.loanAmount;
            let ratepass = req.body.result.parameters.interestRate;
            let ldur = req.body.result.parameters.loanDuration;
            //let ldurunit = req.body.result.contexts[0].parameters.loanDuration.unit;
            let pmade = req.body.result.parameters.numberPayments;

            //if (ldurunit == "mo") {
            //    ldur = ldur/12;
            //}

            //let premain = (ldur*12) - pmade;
            let premain = ldur - pmade;
            let premainpass = premain.toString();
            let ldurpass = ldur.toString();
            let amtpass = amt.toString();

            // console.log(premainpass);

            let arg = "0002/?amount=" + amtpass + "&interestRate=" + ratepass + "&years=" + ldurpass + "&monthsRemaining=" + premainpass;


            if (!req.body.result) {
                reject("invalid request");

            }

            client.calculateProductIdGet("loans",arg).then(result => {
                //console.log(result.body);
                let pay = result.body.result;
                // console.log(pay);

                let str = "total amount remaining to pay is " + pay.toString();

                const result1: FulfillmentResponse = {
                    speech: str,
                    displayText: str,
                    data: {},
                    contextOut: [],
                    source: ""
                };

                resolve(result1);

            }).catch(err => {
                //console.log(err);
                //console.log("went to error");
                const result2: FulfillmentResponse = {
                    speech: "Something went wrong at our backend",
                    displayText: "Something went wrong at our backend",
                    data: {},
                    contextOut: [],
                    source: ""
                };

                resolve(result2);
            });

        });

    }


}
