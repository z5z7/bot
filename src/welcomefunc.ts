/**
 * Created by valeriewyns on 2017-11-11.
 */


import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

import {Google_Components} from "./google_ConversationComponents";

export namespace Welcome {
    //global since once on google will not switch to FB
    export let isGoogle: boolean;
    export function handleInputWelcome(req: any): Promise<FulfillmentResponse> {
        //good place to set as this is the first intent to trigger (voice || text)
         isGoogle = Google_Components.isGoogle(req);
        let surface = Google_Components.returnSurfaceType(req);

        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            if(surface.includes(Google_Components.voice) || surface.includes(Google_Components.audio)){

                result = Google_Components.returnSimpleResponse("Welcome to HSBC, and all of its greatness");

            }else if (surface.includes(Google_Components.text)){

                result = Google_Components.returnComplexCombo("Welcome to HSBC", "How can we help you today?", "We could talk about many things from mortgages to RRSPs", "Find out more",  "https://storage.googleapis.com/hello_init/chat_trial_images/welcome_image_2.png", [{"title":"Find ATM"}, {"title" : "Exchange Rates"}, {"title" : "Mortgages"}, {"title":"RRSPs"}, {"title":"World Selection Fund"}, {"title":"Premier Customer"}], "Title", "http://google.com");

            }else{

                 result = Google_Components.returnSimpleResponseCard("My surface is: " + surface, "This is a title", "And here we talk extensiely about HSBC bollucks", "This is a subtitle", "https://storage.googleapis.com/hello_init/chat_trial_images/welcome_image_2.png", "Here we see all of the happiness that comes with HSBC");

            }
            resolve(result);
        });
    }
}