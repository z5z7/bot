/**
 * Created by valeriewyns on 2017-11-11.
 */

import {FulfillmentResponse, FulfillmentRequest} from './contracts';


export namespace Components {

    export function returnSimpleResponse(speech: string, displayText: string): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if((speech || displayText) != "" ){
                const result: FulfillmentResponse = {
                    speech: speech,
                    displayText: displayText,
                    data: {

                    },
                    contextOut: [],
                    source: ""
                };

                resolve(result);
            }else{
                const error: FulfillmentResponse = {
                    speech: "Sorry, we have nothing to say.",
                    displayText: "Sorry, we have nothing to say.",
                    data: {

                    },
                    contextOut: [],
                    source: ""
                };
                reject(error)
            }
        });
    }

    export function handleMyAction(req: any) : Promise<FulfillmentResponse>{

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            if(!req.body.result) {
                reject("invalid request");
            }

            // sample to return a basic card response to Google Assistant
            let result : FulfillmentResponse = {
                speech: "This is just a test... a test from the outer spaces I say",
                displayText: "And this is something to display",
                data: {
                    "google": {
                        "expect_user_response": true,
                        "rich_response": {
                            "items": [
                                {
                                    "simpleResponse": {
                                        "textToSpeech":"This is the first simple response for a basic card"
                                    }
                                },
                                {
                                    "basicCard": {
                                        "title":"Title: this is a title",
                                        "formattedText":"This is a basic card.  Text in a\n      basic card can include \"quotes\" and most other unicode characters\n      including emoji 📱.  Basic cards also support some markdown\n      formatting like *emphasis* or _italics_, **strong** or __bold__,\n      and ***bold itallic*** or ___strong emphasis___ as well as other things\n      like line  \nbreaks",
                                        "subtitle":
                                            "This is a subtitle",
                                        "image": {
                                            "url":"https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap &markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&key=AIzaSyAQp3D2Xg_7cqGXUAiocs1KVvaeCvLma00",
                                            "accessibilityText":"Image alternate text"
                                        },
                                        "buttons": [
                                            {
                                                "title":"This is a button",
                                                "openUrlAction":{
                                                    "url":"https://assistant.google.com/"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "simpleResponse": {
                                        "textToSpeech":"This is the 2nd simple response ",
                                        "displayText":"This is the 2nd simple response"
                                    }
                                }
                            ],
                            "suggestions":
                                [
                                    {"title":"Basic Card"},
                                    {"title":"List"},
                                    {"title":"Carousel"},
                                    {"title":"Suggestions"}
                                ]
                        }
                    },
                    'facebook': {
                        'attachment': {
                            'type': 'template',
                            'payload': {
                                'template_type': 'generic',
                                'elements': [
                                    {
                                        'title': 'Title: this is a title',
                                        'image_url': 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
                                        'subtitle': 'This is a subtitle',
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

        });

    }
}

