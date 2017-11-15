/**
 * Created by valeriewyns on 2017-11-11.
 */

import {FulfillmentResponse} from './contracts';
import {Google_Components} from "./google_ConversationComponents";
import {Content} from './contentObject';

export namespace Welcome {
    export function handleInputWelcome(req: any): Promise<FulfillmentResponse> {
       return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Google_Components.createUtterance(req, Content.welcomeContent);
            resolve(result);

        });
    }
}