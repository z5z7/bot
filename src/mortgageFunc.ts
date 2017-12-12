import {FulfillmentResponse, ContentObject} from './contracts';
import {Convo_Components} from './ConversationComponents';
import {Content} from './contentObject';
import {Integrator} from './Integrator';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';


const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);



export class MortgageFunc{
    //input : Req node with proper loanamount, rate, and Duration parameters
    //output: Promise<String> with return value for calc # 1
    calculateMortgageMonthly = function (req: any): Promise<ContentObject> {
        return new Promise<ContentObject>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            let loanAmount = req.body.result.parameters.loanAmount;
            let interestRate = req.body.result.parameters.interestRate;
            let loanDuration = req.body.result.parameters.loanDuration;

            let arg = "0001/?amount=" + loanAmount.toString() + "&interestRate=" + interestRate + "&years=" + loanDuration.toString();

            client.calculateProductIdGet("loans", arg).then(result => {
                let pay = result.body.result;
                let retval : string = pay.toString();


                let newContentObj : ContentObject = Content.calculateMortgageMonthly;

                newContentObj.simpleResponse = newContentObj.simpleResponse.replace("var", "$" + retval);
                newContentObj.speech = newContentObj.speech.replace("var", "$" + retval);
                newContentObj.text = newContentObj.text.replace("var", "$" + retval);
                newContentObj.title = newContentObj.title.replace("var", "$" + retval);
                newContentObj.subtitle = newContentObj.subtitle.replace("var", "$" + retval);



                resolve(newContentObj);

            })
        });
    }
    calculateMortgageRemaining = function(req: any): Promise<ContentObject> {
        return new Promise<ContentObject>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            let params = req.body.result.parameters;
            let loanAmount = params.loanAmount;
            let interestRate = params.interestRate;
            let loanDuration = params.loanDuration;
            let numberPayments = params.numberPayments;

            let arg = "0002/?amount=" + loanAmount.toString() + "&interestRate=" + interestRate.toString() + "&years=" + loanDuration.toString() + "&monthsRemaining=" + numberPayments.toString();

            client.calculateProductIdGet("loans", arg).then(result => {
                let pay = result.body.result;
                let retval : string = pay.toString();

                let newContentObj : ContentObject = Content.calculateMortgageRemaining;

                newContentObj.simpleResponse = newContentObj.simpleResponse.replace("var", "$" + retval);
                newContentObj.speech = newContentObj.speech.replace("var", "$" + retval);
                newContentObj.text = newContentObj.text.replace("var", "$" + retval);
                newContentObj.title = newContentObj.title.replace("var", "$" + retval);
                newContentObj.subtitle = newContentObj.subtitle.replace("var", "$" + retval);



                resolve(newContentObj);




            })
        });
    }
}