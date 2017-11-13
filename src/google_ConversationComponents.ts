/**
 * Created by valeriewyns on 2017-11-11.
 */

import {FulfillmentResponse, FulfillmentRequest, SimpleCardContent, SimpleCardSuggestionsContent} from './contracts';


export namespace Google_Components {
    export const voice = "google_assistant_input_type_voice";
    export const audio = "actions_capability_audio_output";
    export const text = "google_assistant_input_type_keyboard";

    export function returnSurfaceType(req : any) : string {
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
    export function returnSimple(speech: string): Promise<FulfillmentResponse> {
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
    export function returnSimpleCard(contentObj: SimpleCardContent): Promise<FulfillmentResponse> {
        let buttons;
        if (contentObj.buttonTitle != ""){
            buttons = [{
                "title": contentObj.buttonTitle,
                "openUrlAction": {
                    "url": contentObj.buttonUrl
                }
            }];
        }else{
            buttons = "";
        }
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
                                        "textToSpeech": contentObj.simpleResponse
                                    }
                                },
                                {
                                    "basicCard": {
                                        "title": contentObj.cardTitle,
                                        "formattedText": contentObj.cardBlurb,
                                        "subtitle": contentObj.subTitle,
                                        "image": {
                                            "url": contentObj.image,
                                            "accessibilityText": "image"
                                        },
                                        buttons
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


    export function returnSimpleCardSuggestions(contentObj: SimpleCardSuggestionsContent) : Promise<FulfillmentResponse>{
        let buttons;
        if (contentObj.buttonTitle != ""){
            buttons = [{
                "title": contentObj.buttonTitle,
                "openUrlAction": {
                    "url": contentObj.buttonUrl
                }
            }];
        }else{
            buttons = "";
        }
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
                                        "textToSpeech": contentObj.simpleResponse
                                    }
                                },
                                {
                                    "basicCard": {
                                        "title": contentObj.cardTitle,
                                        "formattedText": contentObj.cardBlurb,
                                        "subtitle": contentObj.subTitle,
                                        "image": {
                                            "url": contentObj.image,
                                            "accessibilityText": "Image"
                                        },
                                        buttons
                                    }
                                },
                            ],
                            "suggestions": contentObj.suggestions
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

