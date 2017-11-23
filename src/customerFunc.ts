/**
 * Created by valeriewyns on 2017-11-21.
 */
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

export namespace CustomerFunc {
    //Advance
        export function handleDirectAdvance(req): Promise<FulfillmentResponse> {
            return new Promise((resolve, reject) => {
                let result: Promise<FulfillmentResponse>;
                result = Convo_Components.createUtterance(req, Content.directAdvance);
                resolve(result);
            })
        }
        export function handleAdvanceBenefits(req): Promise<FulfillmentResponse> {
            return new Promise((resolve, reject) => {
                let result: Promise<FulfillmentResponse>;
                result = Convo_Components.createUtterance(req, Content.advanceCustomerBenefits);
                resolve(result);
            })
        }
        //Premier
        export function handleDirectPremier(req): Promise<FulfillmentResponse> {
            return new Promise((resolve, reject) => {
                let result: Promise<FulfillmentResponse>;
                result = Convo_Components.createUtterance(req, Content.directPremier);
                resolve(result);
            })
        }
        export function handlePremierBenefits(req): Promise<FulfillmentResponse> {
            return new Promise((resolve, reject) => {
                let result: Promise<FulfillmentResponse>;
                result = Convo_Components.createUtterance(req, Content.premierCustomerBenefits);
                resolve(result);
            })
        }
    export function handlePremierApplication(req): Promise<FulfillmentResponse> {
        return new Promise((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.premierCustomerApplication);
            resolve(result);
        })
    }
    export function handlePremierEligibility(req): Promise<FulfillmentResponse> {
        return new Promise((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.premierCustomerEligibility);
            resolve(result);
        })
    }
}


