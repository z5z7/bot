/**
 * Created by valeriewyns on 2017-11-11.
 */
import {FulfillmentResponse} from './contracts';
import {ContentObject} from './contracts';

export namespace Convo_Components {
    function isTextSurface(req : any) : boolean {
        try{
           if(typeof JSON.stringify(req.body["originalRequest"]["data"]["inputs"][0]["rawInputs"] != "undefined")){
               let inputs = JSON.stringify(req.body["originalRequest"]["data"]["inputs"][0]["rawInputs"]).toString();
               if(inputs.includes("KEYBOARD")){
                   return true;
               }else{
                   return false;
               }

            }
        }
        catch(err){
            //err on the side of caution and go for voice
            return false;
        }

    }
    function Google(req: any) : boolean {
        try{
            if(req.body["originalRequest"]["source"]){
                if( JSON.stringify(req.body["originalRequest"]["source"]).toString().includes("google")){
                    //isGoogle = true;
                    return true;
                }
            }
        }
        catch(err){
            return false;
        }
    }
    //create and return an utterance
    export function createUtterance(req : any, contentObj : any): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let isText = isTextSurface(req);
            let isGoogle = Google(req);
            //for simple string responses that are not coming from the contents api
            if(typeof contentObj == "string"){
                let result: Promise<FulfillmentResponse> = returnSimpleResponse(contentObj);
                resolve(result);
                return;
            }
            //is contentObj is not a string then it is a ContentObject
            if(isGoogle){
                if(isText) {
                    let result: Promise<FulfillmentResponse> = returnComplexResponse(contentObj);
                    resolve(result);

                }else{
                    let result: Promise<FulfillmentResponse> = returnSimpleResponse(contentObj.speech);
                    resolve(result);
                }
            }else{
                //then isFacebook (as we are not supporting any other integration
                let result: Promise<FulfillmentResponse> = returnComplexResponseFB(contentObj.speech);
                resolve(result);
            }
        })
    }

    //GOOGLE COMPONENTS
    //only returns one text/speech utterance
    //good for error messaging
    export function returnSimpleResponse(response: string): Promise<FulfillmentResponse> {
        //remember: speech in this context can also mean the text surface
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: FulfillmentResponse;
            result = {
                speech: response,
                displayText: response,
                data: {},
                contextOut: [],
                source: ""
            }
            resolve(result);
        });
    }


    //creates simpleResponse and Card with content
    //allows for optional suggestions and buttons
    export function returnComplexResponse(contentObj: ContentObject) : Promise<FulfillmentResponse>{
        let buttons = [];
        if (contentObj.buttonTitle.length > 0){
            for(let i = 0; i < contentObj.buttonTitle.length; i++){
                buttons.push({
                    "title": contentObj.buttonTitle[i],
                    "openUrlAction": {
                        "url": contentObj.buttonURL[i]
                    }
                })
            }

        }else{
            buttons = [{
                "title": "HSBC",
                "openUrlAction": {
                    "url": "http://www.hsbc.ca"
                }
            }]
        }
        let suggestions = [];
        if (contentObj.suggestions.length > 0){
            for(let i = 0; i < contentObj.suggestions.length; i++){
                suggestions.push(contentObj.suggestions[i]);
            }

        }else{
            suggestions = ["Main Menu"];
        }
        return new Promise<FulfillmentResponse>((resolve, reject) => {
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
                                        "textToSpeech": contentObj.speech
                                    }
                                },
                                {
                                    "basicCard": {
                                        "title": contentObj.title,
                                        "formattedText": contentObj.text,
                                        "subtitle": contentObj.subtitle,
                                        "image": {
                                            "url": contentObj.imageURL,
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





    //FACEBOOK COMPONENTS
    export function returnComplexResponseFB(contentObj : ContentObject): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: FulfillmentResponse = {
                speech: "",
                displayText: "",
                data: {
                    'facebook': {
                        'attachment': {
                            'type': 'template',
                            'payload': {
                                'template_type': 'generic',
                                'elements': [
                                    {
                                        'title': contentObj.title,
                                        'image_url': contentObj.imageURL,
                                        'subtitle': contentObj.subtitle,
                                        'default_action': {
                                            'type': 'web_url',
                                            'url': 'https://assistant.google.com/'
                                        },
                                        'buttons': [
                                            {
                                                'type': 'web_url',
                                                'url': 'https://assistant.google.com/',
                                                'title': 'This is a button'
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                contextOut: [],
                source: ""
            };
            resolve(result);
        })
    }
}

