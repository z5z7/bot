/**
 * Created by valeriewyns on 2017-11-14.
 */
/**
 * Created by valeriewyns on 2017-11-13.
 */
import {Convo_Components} from "./ConversationComponents";
import {Images} from "./imageLibrary";
import {FulfillmentResponse} from "./contracts";
import {Content} from './contentObject';


export namespace WsfFunc {
    export function handleDirectWsf(req: any): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse> = Convo_Components.returnComplexResponse(Content.wsfDirect);
            resolve(result);
        })
    }
    export function handleEligibilityWSF(req : any): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse> = Convo_Components.returnComplexResponse(Content.wsfEligibility);
            resolve(result);
        })
    }
    export function handleWsfMore(req): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) =>{
            return new Promise<FulfillmentResponse>((resolve, reject) => {
                let result: Promise<FulfillmentResponse> = Convo_Components.returnComplexResponse(Content.wsfMore);
                resolve(result);
            })
        })
    }
    export function handleWsfAdvantages(req): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) =>{
            let result: Promise<FulfillmentResponse> = Convo_Components.returnComplexResponse(Content.wsfAdvantages);
            resolve(result);
        });
    }
    export function handleWsfNo(req): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) =>{
            let result: Promise<FulfillmentResponse> = Convo_Components.returnComplexResponse(Content.wsfNo);
            resolve(result);
        });
    }


}
