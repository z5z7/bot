/**
 * Created by valeriewyns on 2017-11-13.
 */
import {Google_Components} from "./google_ConversationComponents";
import {Images} from "./imageLibrary";
import {FulfillmentResponse, SimpleCardContent, SimpleCardSuggestionsContent, ContentObject} from "./contracts";
import {Content} from './contentObject';


export namespace RrspFunc {
    export function handleDirectRRSP(req: any): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse> = Google_Components.createUtterance(req, Content.rrspDirectContent);
            resolve(result);
        })
    }
    export function handleApplyRRSP(req:any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse>  = Google_Components.createUtterance(req, Content.rrspApply);
            resolve(result);
        })
    }
    export function handleRRSPBenefits(req:any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse> = Google_Components.createUtterance(req, Content.rrspBenefits);
            resolve(result);
        })
    }
}