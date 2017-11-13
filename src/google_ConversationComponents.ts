/**
 * Created by valeriewyns on 2017-11-11.
 */

import {FulfillmentResponse, FulfillmentRequest} from './contracts';


export namespace Google_Components {
    export const voice = "google_assistant_input_type_voice";
    export const audio = "actions_capability_audio_output";
    export const text = "google_assistant_input_type_keyboard";

    export function returnSurfaceType(req : any) : string {
        //console.log(JSON.stringify(req.body["originalRequest"][3]));
        //console.log("originalRequest: " + JSON.stringify(req.body["originalRequest"]["data"]["inputs"]).toString());
        //if(req.body.result["contexts"][2]["name"]){
        try{
            if(typeof req.body.result["contexts"][2]["name"] != "undefined"){
                return JSON.stringify(req.body.result["contexts"][2]["name"]).toString();
            }
        }
        catch(err){
            return text;
        }

    }
    export function isGoogle(req: any) : boolean {
        try{
            if(req.body["originalRequest"]["source"]){
                if( JSON.stringify(req.body["originalRequest"]["source"]).toString().includes("google")){
                    return true
                }
            }
        }
        catch(err){
            return false;
        }
    }
    //only returns one text/speech utterance
    //good for error messaging
    export function returnSimpleResponse(speech: string): Promise<FulfillmentResponse> {
        //remember: speech in this context can also mean the text surface
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: FulfillmentResponse;
            result = {
                speech: speech,
                displayText: speech,
                data: {},
                contextOut: [],
                source: ""
            }
            resolve(result);

        });
    }
    export function returnSimpleResponseCard(simpleResponse: string, cardTitle: string, cardBlurb: string, subTitle: string, image: string, imageAltText: string): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: FulfillmentResponse = {
                speech: "",
                displayText: "",
                data: {
                    "google": {
                        "expect_user_response": true,
                        "rich_response": {
                            "items": [
                                {
                                    "simpleResponse": {
                                        "textToSpeech": simpleResponse
                                    }
                                },
                                {
                                    "basicCard": {
                                        "title": cardTitle,
                                        "formattedText": cardBlurb,
                                        "subtitle": subTitle,
                                        "image": {
                                            "url": image,
                                            "accessibilityText": imageAltText
                                        },
                                    }
                                }
                            ]
                        }
                    }
                },
                contextOut: [],
                source: ""
            };
            resolve(result);
        });
    }


    export function returnComplexCombo(simpleResponse : string, title : string, cardBlurb : string, subtitle : string, image : string, suggestions : Array<any>, buttonTitle : string, buttonUrl : string) : Promise<FulfillmentResponse>{
       let buttons = [{
                "title": buttonTitle,
                "openUrlAction": {
                    "url": buttonUrl
                }
            }
        ]
        return new Promise<FulfillmentResponse>((resolve, reject) => {
           // sample to return a basic card response to Google Assistant
            let result : FulfillmentResponse = {
                speech: "",
                displayText: "",
                data: {
                    "google": {
                        "expect_user_response": true,
                        "rich_response": {
                            "items": [
                                {
                                    "simpleResponse": {
                                        "textToSpeech": simpleResponse
                                    }
                                },
                                {
                                    "basicCard": {
                                        "title": title,
                                        "formattedText": cardBlurb,
                                        "subtitle": subtitle,
                                        "image": {
                                            "url": image,
                                            "accessibilityText": "Image"
                                        },
                                        buttons
                                    }
                                },
                            ],
                            "suggestions": suggestions
                        }
                    },
                },
                contextOut: [],
                source: ""

            };

            resolve(result);

        });
    }
}

