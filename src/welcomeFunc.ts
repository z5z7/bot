/**
 * Created by valeriewyns on 2017-11-11.
 */

import {FulfillmentResponse} from './contracts';
import {Convo_Components} from "./ConversationComponents";
import {Content} from './contentObject';

export namespace Welcome {
    export function handleInputWelcome(req: any): Promise<FulfillmentResponse> {
       return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Convo_Components.createUtterance(req, Content.welcome);
            resolve(result);
        });
    }
}
