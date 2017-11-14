import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {Google_Components} from './google_ConversationComponents';
import {Images} from './imageLibrary';
//
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

                let response: Promise<FulfillmentResponse> = Google_Components.returnSimple(answer);
                resolve(response);

            }).catch(err => {

                let answer = "I'm sorry, there was an error with our calculation. Shall we try again?";
                let response = Google_Components.returnSimple(answer + " : error " + err);
                resolve(response);
            });

        });

    }

    export function handleSearchWhatMortgageCalculatorRemainingPayment(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                reject("invalid request");

            }

            let loanAmount = req.body.result.parameters.loanAmount;
            let interestRate = req.body.result.parameters.interestRate;
            let loanDuration = req.body.result.parameters.loanDuration;
            let numberPayments = req.body.result.parameters.numberPayments;
            //let premain = (loanDuration*12) - pmade;
            let pRemaining = loanDuration - numberPayments;

            let arg = "0002/?amount=" + loanAmount.toString() + "&interestRate=" + interestRate + "&years=" + loanDuration.toString() + "&monthsRemaining=" + pRemaining.toString();
            console.log("arg: " + arg);


            client.calculateProductIdGet("loans", arg).then(result => {
                let pay = result.body.result;
                let message = "total amount remaining to pay is " + pay.toString();
                let answer: Promise<FulfillmentResponse> = Google_Components.returnSimple(message);
                resolve(answer);
            }).catch(err => {
                let error = "I'm sorry, there was an error with our calculation. Shall we try again?";
                let answer: Promise<FulfillmentResponse> = Google_Components.returnSimple(error + " : error " + err);
                resolve(answer);
            });

        });

    }


}
