import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {Convo_Components} from './ConversationComponents';
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

    //input : Req node with proper loanamount, rate, and Duration parameters
    //output: Promise<String> with return value for calc # 1
    export function handleSearchWhatMortgageCalculatorMonthlyPayment(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            let loanAmount = req.body.result.parameters.loanAmount;
            let interestRate = req.body.result.parameters.interestRate;
            let loanDuration = req.body.result.parameters.loanDuration;

            let arg = "0001/?amount=" + loanAmount.toString() + "&interestRate=" + interestRate + "&years=" + loanDuration.toString();

            client.calculateProductIdGet("loans", arg).then(result => {
                let pay = req.body.result.body.result;
                let answer : string = "Your monthly payment should be " + pay.toString();
                resolve(answer);

            }).catch(err => {
                resolve(`Error in Calc: ${err}`);
            });

        });

    }

    export function handleSearchWhatMortgageCalculatorRemainingPayment(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            let params = req.body.result.parameters;
            let loanAmount = params.loanAmount;
            let interestRate = params.interestRate;
            let loanDuration = params.loanDuration;
            let numberPayments = params.numberPayments;

            let arg = "0002/?amount=" + loanAmount.toString() + "&interestRate=" + interestRate.toString() + "&years=" + loanDuration.toString() + "&monthsRemaining=" + numberPayments.toString();

            client.calculateProductIdGet("loans", arg).then(result => {
                let pay = result.body.result;
                let retval : string = "total amount remaining to pay is " + pay.toString();
                resolve(retval);

            }).catch(err => {
                let error : string = err;
                resolve("Error in Calc 2 :" + err);
            });

        });

    }


}
