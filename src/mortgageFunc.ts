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

const rejectMessage = "I'm sorry, that was an invalid request";


export namespace MortFunc {
    //CALCULATE FUNCTIONS
    export function handleCalculateMortgageMonthly(req): Promise<FulfillmentResponse>{
        return new Promise((resolve, reject) => {
            if (!req.body.result) {
                reject(rejectMessage);
            }
            let result: Promise<FulfillmentResponse>;
            Calculator.mortgageCalculatorMonthlyPayment(req).then(monthly => {
                let returnResponse = Content.calculateMortgageMonthly.simpleResponse + monthly;
                result = Convo_Components.createUtterance(req, returnResponse);
                resolve(result);
            })
        })
    }
    export function handleCalculateRemaining(req) : Promise<FulfillmentResponse>{
        return new Promise((resolve, reject)=> {
            if (!req.body.result) {
                reject(rejectMessage);
            }
            let result: Promise<FulfillmentResponse>;
            Calculator.mortgageCalculatorRemainingPayment(req).then(remaining =>{
                let returnResponse = Content.calculateMortgageRemaining.simpleResponse + remaining;
                result = Convo_Components.createUtterance(req, returnResponse);
                resolve(result);

            }).catch(err => {
                result = Convo_Components.createUtterance(req, "I'm sorry, we were unable to fulfill your request. The error was: " + err);
                resolve(result);
            })
        })
    }






    //TOP LEVEL DIRECT
    export function handleDirectMortgage(req): Promise<FulfillmentResponse> {
        return Convo_Components.handleUtterance(req, Content.directMortgages);

    }


    export function handleMortgagesCatalogue(req): Promise<FulfillmentResponse> {
        return Convo_Components.handleUtterance(req, Content.mortgageCatalogue);

    }
    export function handleMortgagesPreApproval(req): Promise<FulfillmentResponse> {
        return Convo_Components.handleUtterance(req, Content.mortgagePreApproval);
    }


    //WHAT KIND OF CALCULATION WOULD YOU LIKE TO DO?
    export function handleCalculateMortgage0(req): Promise<FulfillmentResponse>{
        return Convo_Components.handleUtterance(req, Content.calculateMortgage0.simpleResponse);
    }


    //TYPES
    export function handleMortgageTypeTraditional(req) : Promise<FulfillmentResponse>{
        return Convo_Components.handleUtterance(req, Content.traditionalMortgage);
    }
    export function handleMortgageTypeEquityPower(req) : Promise<FulfillmentResponse>{
        return Convo_Components.handleUtterance(req, Content.equityPowerMortgage);
    }
    export function handleMortgageTypeSmartSaver(req) : Promise<FulfillmentResponse>{
        return Convo_Components.handleUtterance(req, Content.smartSaversMortgage);
    }

    //SPECIAL OFFERS
    export function handleMortgageRateSpecialOfferAdvance(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.handleUtterance(req, Content.specialOfferAdvance);
    }
    export function handleMortgageRateSpecialOfferPremier(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.handleUtterance(req, Content.specialOfferPremier);
    }
    export function handleMortgageRateSpecialOfferPersonalRates(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.handleUtterance(req, Content.specialOfferPersonalRates);
    }
    export function handleMortgageRateSpecialOfferSmartSaver(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.handleUtterance(req, Content.specialOfferSmartSaver);
    }
}
