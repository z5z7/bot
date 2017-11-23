/**
 * Created by valeriewyns on 2017-11-13.
 */
import {Convo_Components} from "./ConversationComponents";
import {Images} from "./imageLibrary";
import {FulfillmentResponse} from "./contracts";
import {Content} from './contentObject';


export namespace RrspFunc {
    export function handleDirectRRSP(req: any): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse> = Convo_Components.createUtterance(req, Content.directRRSP);
            resolve(result);
        })
    }
    export function handleApplyRRSP(req:any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse>  = Convo_Components.createUtterance(req, Content.applyRRSP);
            resolve(result);
        })
    }
    export function handleRRSPBenefits(req:any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse> = Convo_Components.createUtterance(req, Content.benefitsRRSP);
            resolve(result);
        })
    }
    export function handleRRSPBrokerageYes(req:any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse> = Convo_Components.createUtterance(req, Content.rrspBrokerageAccountYes);
            resolve(result);
        })
    }
    export function handleRRSPBrokerageNo(req:any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse> = Convo_Components.createUtterance(req, Content.rrspBrokerageAccountNo);
            resolve(result);
        })
    }
}