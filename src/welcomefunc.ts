/**
 * Created by valeriewyns on 2017-11-11.
 */


import {FulfillmentResponse, ComplexComboContent, SimpleCardContent} from './contracts';

import {DefaultApi, HttpBasicAuth} from './hsbc-api';
/*const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);
*/


import {Google_Components} from "./google_ConversationComponents";
import {Images} from "./imageLibrary";

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

                //TODO ALl of this should be populated by library which is populated by api
                let contentObj: ComplexComboContent = {
                    simpleResponse : "Welcome to HSBC",
                    title : "How can we help you today?",
                    subTitle : "Find out more",
                    cardBlurb : "We could talk about many things from mortgages to RRSPs",
                    image : Images.getImage("welcomeImage"),
                    suggestions : [{"title":"Find ATM"}, {"title" : "Exchange Rates"}, {"title" : "Mortgages"}, {"title":"RRSPs"}, {"title":"World Selection Fund"}, {"title":"Premier Customer"}],
                    buttonTitle : "Visit HSBC",
                    buttonUrl : "http://www.hsbc.com"
                }

                result = Google_Components.returnComplexCombo(contentObj);

            }else{

                //TODO ALl of this should be populated by API
                let contentObj : SimpleCardContent = {
                    simpleResponse : "My surface is: " + surface,
                    cardTitle : "This is a title",
                    subTitle: "This is a subtitle",
                    cardBlurb : "And here we talk extensively about HSBC",
                    image: Images.getImage("welcomeImage"),
                    imageAltText : "Welcoming you to HSBC"
                }

                 result = Google_Components.returnSimpleResponseCard(contentObj);

            }
            resolve(result);
        });
    }
}