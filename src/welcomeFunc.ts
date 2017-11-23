/**
 * Created by valeriewyns on 2017-11-11.
 */

import {FulfillmentResponse} from './contracts';
import {Convo_Components} from "./ConversationComponents";
import {Content} from './contentObject';

export namespace Welcome {
    export function handleWelcome(req: any): Promise<FulfillmentResponse> {
        console.log("welcome");
       return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.welcome);
            resolve(result);
        });
    }
    export function handleAboutUs(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.aboutUs);
            resolve(result);
        });
    }
}
