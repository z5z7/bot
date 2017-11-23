import {FulfillmentResponse} from './contracts';
import {Convo_Components} from './ConversationComponents';
import {Content} from './contentObject';
import {Calculator} from './Calculator';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';


const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);


// todo: get rid of all this code duplication

export namespace MortFunc {

    export function handleDirectMortgage(req): Promise<FulfillmentResponse> {
        return new Promise((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.directMortgages);
            resolve(result);
        })
    }
    export function handleMortgagesCatalogue(req): Promise<FulfillmentResponse> {
        return new Promise((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.mortgageCatalogue);
            resolve(result);
        })
    }
    export function handleMorgagesPreApproval(req): Promise<FulfillmentResponse> {
        return new Promise((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.mortgagePreApproval);
            resolve(result);
        })
    }
    export function handleCalculateMortgageMonthly(req): Promise<FulfillmentResponse>{
        return new Promise((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            let monthlyPayment = Calculator.mortgageCalculatorMonthlyPayment(req);
            result = Convo_Components.createUtterance(req, Content.calculateMortgageRemaining.simpleResponse + monthlyPayment);
            resolve(result);
            return
        })
    }
    export function handleCalculateMortgage0(req): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse> ((resolve, reject) =>{
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.calculateMortgage0.simpleResponse);
            resolve(result);
            return
        })
    }
    export function handleCalculateRemaining(req) : Promise<FulfillmentResponse>{
        return new Promise((resolve, reject)=> {
            let result: Promise<FulfillmentResponse>;
            let remainingAmount = Calculator.mortgageCalculatorRemainingPayment(req);
            result = Convo_Components.createUtterance(req, Content.calculateMortgageRemaining.simpleResponse);
            resolve(result);
            return

        })
    }

    export function handleMortgageTypeTraditional(req) : Promise<FulfillmentResponse>{
        return new Promise((resolve, reject)=> {
            let result: Promise<FulfillmentResponse>;
            let remainingAmount = Calculator.mortgageCalculatorRemainingPayment(req);
            result = Convo_Components.createUtterance(req, Content.traditionalMortgage);
            resolve(result);
            return

        })
    }

    export function handleMortgageTypeEquityPower(req) : Promise<FulfillmentResponse>{
        return new Promise((resolve, reject)=> {
            let result: Promise<FulfillmentResponse>;
            let remainingAmount = Calculator.mortgageCalculatorRemainingPayment(req);
            result = Convo_Components.createUtterance(req, Content.equityPowerMortgage);
            resolve(result);
            return

        })
    }

    export function handleMortgageTypeSmartSaver(req) : Promise<FulfillmentResponse>{
        return new Promise((resolve, reject)=> {
            let result: Promise<FulfillmentResponse>;
            let remainingAmount = Calculator.mortgageCalculatorRemainingPayment(req);
            result = Convo_Components.createUtterance(req, Content.smartSaversMortgage);
            resolve(result);
            return

        })
    }

    export function handleMortgageRateSpecialOfferAdvance(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                reject("invalid request");
            }
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.specialOfferAdvance);
            resolve(result);
        });
    }

    export function handleMortgageRateSpecialOfferPremier(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                reject("invalid request");

            }
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.specialOfferPremier);
            resolve(result);
        });
    }

    export function handleMortgageRateSpecialOfferPersonalRates(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                reject("invalid request");

            }
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.specialOfferPersonalRates);
            resolve(result);
        });
    }

    export function handleMortgageRateSpecialOfferSmartSaver(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                reject("invalid request");
            }
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.specialOfferSmartSaver);
            resolve(result);
        });
    }
}
