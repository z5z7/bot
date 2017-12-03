import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {FulfillmentResponse} from "./contracts";
import {Content} from './contentObject';
import {MortgageFunc} from './mortgageFunc';
import {AtmFunc} from './atmFunc';
//
let MortgageFunction = new MortgageFunc();
let
let

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

//TODO: Figure out how to get rid of this redundancy
export namespace Calculator {
    export function admin(req:any): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (!req.body.result.parameters.newValue) reject("invalid request");

            let currentAction = req.body.result.action;
            let property: string = req.body.result.parameters.newProperty;
            let newPropertyValue: string = req.body.result.parameters.newValue;

            //TODO: connect this when contentObject is fed by database as it currently has no teeth
            Content[currentAction][property] = newPropertyValue;

            let returnString = property + " has been changed to: " + newPropertyValue;
            resolve(returnString);
        })
    }

    //input : Req node with proper loanamount, rate, and Duration parameters
    //output: Promise<String> with return value for calc # 1
    export function calculateMortgageMonthly(req: any): Promise<string> {
        return MortgageFunction.calculateMortgageMonthly(req);
    }
    export function calculateMortgageRemaining(req: any): Promise<string> {
        return MortgageFunction.calculateMortgageRemaining(req);
    }
}
