/**
 * Created by valeriewyns on 2017-11-11.
 */


import {FulfillmentResponse, SimpleCardSuggestionsContent, SimpleCardContent} from './contracts';

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
    export function handleInputWelcome(req: any): Promise<FulfillmentResponse> {

        let isGoogle = Google_Components.isGoogle(req);
        let isText = Google_Components.isTextSurface(req);


        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            //TODO ALl of this should be populated by api: getWelcomeDetails
            let text: string = "We could talk about many things from mortgages to RRSPs";
            let speech : string = "Welcome to HSBC, what shall we talk about today? Mortgages? RRSPs?, Finding an ATM?"
            let simpleResponse: string = "Welcome to HSBC";
            let title : string = "How can we help you today?";
            let subtitle : string = "Find out more";
            let suggestions = [{"title":"Find ATM"}, {"title" : "Exchange Rates"}, {"title" : "Mortgages"}, {"title":"RRSPs"}, {"title":"World Selection Fund"}, {"title":"Premier Customer"}];
            let buttonTitle : string = "Visit HSBC";
            let buttonURL : string = "http://www.hsbc.com";

            if(isGoogle){
                if(isText){
                    let contentObj: SimpleCardSuggestionsContent = {
                        simpleResponse : simpleResponse,
                        cardTitle : title,
                        subTitle : subtitle,
                        cardBlurb : text,
                        image : Images.welcomeImage,
                        suggestions : suggestions,
                        buttonTitle : buttonTitle,
                        buttonUrl : buttonURL
                    }
                    result = Google_Components.returnSimpleCardSuggestions(contentObj);

                }else {
                    result = Google_Components.returnSimple(speech);

                }
                resolve(result);
            }
        });
    }
}