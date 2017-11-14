
import {FulfillmentResponse, SimpleCardContent, SimpleCardSuggestionsContent} from './contracts';
import {Google_Components} from './google_ConversationComponents';
import {Images} from './imageLibrary';
//const GOOGLE_MAPS_API_KEY : string = process.env.GOOGLE_MAPS_API_KEY;



export namespace AtmFunc {

    export function handleSearchWhereAtm(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                let result = Google_Components.returnSimple("I'm sorry. That is not something I can help you with. Would you still like to search for an ATM?");
                resolve(result);

            }
            //TODO ALl of this should be populated by api: getATMFuncCity
            let city = JSON.stringify(req.body.result.parameters["local_cities"]);
            let simpleResponseText: string = "Here are the ATMs for " + city + ". Click on the link to open the map";
            let simpleResponseSpeech: string = "Here is a list of addresses of ATMS in " + city;

            let image:string = Images.getCityImage(city);
            let link: string = "https://www.google.ca/maps/search/hsbc+" + city;

            let surface = Google_Components.returnSurfaceType(req);
            let result: Promise<FulfillmentResponse>;
            console.log("surface: " + surface);
            if(surface.includes(Google_Components.text)){
                let contentObj : SimpleCardContent = {
                    simpleResponse : simpleResponseText,
                    cardTitle : "HSBC ATMs in your city",
                    cardBlurb : "Click 'Map' to go to googleMaps for more detail.",
                    subTitle : city,
                    image : image,
                    buttonTitle : "Map",
                    buttonUrl : link
                }

                result = Google_Components.returnSimpleCard(contentObj);
                resolve(result);
            }else{
                //this covers voice, audio, and unknown
                result = Google_Components.returnSimple(simpleResponseSpeech);
                resolve(result);
            }

        });
    }
    export function handleFindAtm(req: any): Promise<FulfillmentResponse> {
        //TODO: api returns list of addresses for speech: getATMFuncAll

        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result : Promise<FulfillmentResponse>;
            if (!req.body.result) {
                result = Google_Components.returnSimple("I'm sorry. That is not something I can help you with.");
                resolve(result);

            }
            //atmMapWestVancouverImage
            let simpleResponseText: string = "Here is a map of all ATMs in the Lower Mainland.  \n Would you like to narrow down your options to just ONE city? "
            let simpleResponseSpeech: string = "Here is a list of the ATMs in the Lower Mainland. This will soon be connected to api"; //TODO: api returns list of addresses
            let image:string = Images.getCityImage("Vancouver");
            let link: string = "https://www.google.ca/maps/search/hsbc+Vancouver";
            let suggestions = [{"title":"Vancouver"}, {"title" : "West Van"}, {"title" : "North Van"}, {"title":"New Westminster"}, {"title":"Burnaby"}, {"title":"Coquitlam"}, {"title" : "Richmond"}];


            let surface = Google_Components.returnSurfaceType(req);
            console.log("surface: " + surface);

            if(surface.includes(Google_Components.text)){
                let contentObj : SimpleCardSuggestionsContent = {
                    simpleResponse : simpleResponseText,
                    cardTitle : "HSBC ATMs in your city",
                    cardBlurb : "Click 'Map' to go to googleMaps for more detail.",
                    subTitle : "Lower Mainland",
                    image : image,
                    suggestions : suggestions,
                    buttonTitle : "Map",
                    buttonUrl : link
                }
                result = Google_Components.returnSimpleCardSuggestions(contentObj);
                resolve(result);
            }else{
                //this covers voice, audio, and unknown
                result = Google_Components.returnSimple(simpleResponseSpeech);
                resolve(result);
            }

        });
    }







    //TODO make this work!!!




/*
    export function handleSearchWhereAtmLocation(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // DONE: stub
            // return a prompt to get user location (EDITED)

            if (!req.body.result) {
                reject("invalid request");

            }

            // let city = req.body.result.parameters.city;

            let city = "user-location";

            if (city == "all") {
            }

            if (city == "user-location") {

                const result: FulfillmentResponse = {
                    speech: "",
                    displayText: "",
                    data: {
                        "google": {
                            "expectUserResponse": true,
                            "isSsml": false,
                            "noInputPrompts": [],
                            "systemIntent": {
                                "intent": "actions.intent.PERMISSION",
                                "data": {
                                    "@type": "type.googleapis.com/google.actions.v2.PermissionValueSpec",
                                    "optContext": "To do this",
                                    "permissions": [
                                        "NAME",
                                        "DEVICE_PRECISE_LOCATION"
                                    ]
                                }
                            }
                        },
                        "facebook": {
                            "expectUserResponse": true,
                            "isSsml": false,
                            "noInputPrompts": [],
                            "systemIntent": {
                                "intent": "actions.intent.PERMISSION",
                                "data": {
                                    "@type": "type.googleapis.com/google.actions.v2.PermissionValueSpec",
                                    "optContext": "To do this",
                                    "permissions": [
                                        "NAME",
                                        "DEVICE_PRECISE_LOCATION"
                                    ]
                                }
                            }
                        }
                    },
                    contextOut: [],
                    source: ""
                };

                resolve(result);
            }

        });

    }

    export function handleSearchWhereAtmLocationFallback(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // DONE: TRIAL FALLBACK
            // return a map with user location and nearest HSBC ATM marked (EDITED)


            if (!req.body.result) {
                reject("invalid request");

            }

            try {
                let lat = req.body.originalRequest.data.device.location.coordinates.latitude;
                let long = req.body.originalRequest.data.device.location.coordinates.longitude;
            } catch (err) {
                // Here you get the error when the file was not found,
                // but you also get any other error
                const result: FulfillmentResponse = {
                    speech: "Sorry, can't do this without permission given",
                    displayText: "Sorry, can't do this without permission given",
                    data: {},
                    contextOut: [],
                    source: ""
                };

                resolve(result);
            }

            let lat = req.body.originalRequest.data.device.location.coordinates.latitude;
            let long = req.body.originalRequest.data.device.location.coordinates.longitude;


            // function to calculate distance between 2 lat long using harversine formula
            function distance(lat1, lon1, lat2, lon2) {
                let p = 0.017453292519943295;    // Math.PI / 180
                let c = Math.cos;
                let a = 0.5 - c((lat2 - lat1) * p) / 2 +
                    c(lat1 * p) * c(lat2 * p) *
                    (1 - c((lon2 - lon1) * p)) / 2;

                return 12742 * Math.asin(Math.sqrt(a)); // return distance
            }

            // console.log(ATMloc.length);
            let closest = null;
            let cindex = null;
            let i;
            let len = ATMloc.length;

            for (i = 0; i < len; i++) {
                let y = distance(lat, long, ATMloc[i].lat, ATMloc[i].long);
                if (closest == null || closest > y) {
                    closest = y;
                    cindex = i;
                }
            }

            let speak = ATMloc[cindex].address;
            let clat = ATMloc[cindex].lat;
            let clong = ATMloc[cindex].long;


            const result: FulfillmentResponse = {
                speech: "",
                displayText: "",
                data: {
                    "google": {
                        "expect_user_response": true,
                        "rich_response": {
                            "items": [
                                {
                                    "simpleResponse": {
                                        "textToSpeech": speak,
                                    }
                                },
                                {
                                    "basicCard": {
                                        "title": "Nearest ATM",
                                        "formattedText": speak,
                                        "image": {
                                            "url": "https://maps.googleapis.com/maps/api/staticmap?center=" +
                                            lat + "," + long + "&size=300x250&markers=color:blue%7C" + lat + "," + long +
                                            "&markers=color:red%7C" + clat + "," + clong + "&key=" +
                                            GOOGLE_MAPS_API_KEY,
                                            "accessibilityText": "map"
                                        },
                                        "buttons": [
                                            {
                                                "title": "Go to Google Map",
                                                "openUrlAction": {
                                                    "url": "https://assistant.google.com/"
                                                }
                                            }
                                        ]
                                    }
                                },
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
                                        'title': 'Nearest ATM',
                                        'image_url': "https://maps.googleapis.com/maps/api/staticmap?center=" +
                                        lat + "," + long + "&size=300x250&markers=color:blue%7C" + lat + "," + long +
                                        "&markers=color:red%7C" + clat + "," + clong + "&key=" +
                                        GOOGLE_MAPS_API_KEY,
                                        'subtitle': 'This is a subtitle',
                                        'default_action': {
                                            'type': 'web_url',
                                            'url': 'https://assistant.google.com/'
                                        },
                                        'buttons': [
                                            {
                                                'type': 'web_url',
                                                'url': 'https://assistant.google.com/',
                                                'title': 'Go to Google Map'
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

*/


}