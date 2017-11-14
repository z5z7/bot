/**
 * Created by valeriewyns on 2017-11-13.
 */
import {Google_Components} from "./google_ConversationComponents";
import {Images} from "./imageLibrary";
import {FulfillmentResponse} from "./contracts";

export namespace RrspFunc {
    export function handleDirectRRSP(req: any): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            //TODO: answer should be result of api call
            let answer : string = "What about RRSPs shall we discuss?   \n  The benefits of an RRSP?,   \n  or how to apply for a self-directed RRSP?"

            if(Google_Components.isGoogle(req)){
                let result: Promise<FulfillmentResponse> = Google_Components.returnSimple(answer);
                resolve(result);
            }
        })
    }

}