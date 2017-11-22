// <reference path="../node_modules/@types/googlemaps/index.d.ts" />

import {FulfillmentResponse, ContentObject} from './contracts';
import {Convo_Components} from './ConversationComponents';
import {Images} from './imageLibrary';
import {Content} from './contentObject';
//import {} from '@types/googlemaps';
import * as http from 'http';
import * as https from 'https';
//const gmKEY : any = process.env.GOOGLE_MAPS_API_KEY;
const gmKey : any = 'AIzaSyDDDoI_eUw7nx8AXwzBPHi9PF2lxDDLAr4';

export namespace AtmFunc {
    export function handleFindAtm(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result : Promise<FulfillmentResponse>;
            if (!req.body.result) {
                result = Convo_Components.returnSimpleResponse("I'm sorry. That is not something I can help you with.");
                resolve(result);

            }
            result = Convo_Components.createUtterance(req, Content.findATM);
            resolve(result);
        });
    }
    //INPUT: Req for local cities
    export function handleSearchWhereAtm(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                let result = Convo_Components.returnSimpleResponse("I'm sorry. That is not something I can help you with. Would you still like to search for an ATM?");
                resolve(result);

            }
            let result: Promise<FulfillmentResponse>;
            let contentObj: ContentObject = Content.searchATM;
            //insert the city of choice into our contentObject
            let city = JSON.stringify(req.body.result.parameters["local_cities"]);
            contentObj.text = Content.searchATM.text.concat(city);
            contentObj.speech = Content.searchATM.speech.concat(city);
            contentObj.simpleResponse = Content.searchATM.simpleResponse.concat(city);
            contentObj.imageURL = Images.getCityImage(city);
            result = Convo_Components.createUtterance(req, Content.searchATM);
            resolve(result);

        });
    }





    //  Input: Lat and Lon of user location
    //  OUTPUT: the 10 closest HSBC atm locations
    export function handleSearchWhereAtmlocation(latIn,lonIn): Promise<any> {

        return new Promise((resolve, reject) => {
            let apiURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latIn + "," + lonIn + "&radius=10000&keyword=HSBC+atm&key=" + gmKey;

            getHelper(apiURL).then(retval => {
                let retarray: string[] = [];

                for (let i = 0; i < retval.results.length && i<10; i++){ // can adjust max i to give more return values
                    retarray.push(retval.results[i].vicinity);
                }
                resolve(retarray);
            }).catch(error => {
                reject(error);
            });
        })
    }

    //INPUT: Keyword of some location passed by diagflow (this can be a google search string, postal code, ETC)
    //OUTPUT: 10 closest ATMS based off of keyword passed
    export function handleSearchWhereAtmKeyword(keyword: any): Promise<any> {
        return new Promise((resolve, reject) => {
            findLocbyKeyword(keyword).then( locval => {
                let placeid : string = locval.results[0].place_id;

                getGeoDetails(placeid).then ( location => {

                    let lat  = location.result.geometry.location.lat;
                    let long  = location.result.geometry.location.lng;
                    //we will have to see what search is more acurate - rankby and radius are slightly different
                    let apiURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&rankby=distance&keyword=HSBC+atm&key=" + gmKey;
                    // let apiURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=15000&keyword=HSBC+atm&key=" + gmKey;

                    getHelper(apiURL).then(retval => {
                        let retarray: string[] = [];
                        for (let i = 0; i < retval.results.length && i<10; i++){ // can adjust max i to give more return values
                            retarray.push(retval.results[i].vicinity);
                        }
                        resolve(retarray);
                    });
                });
            }).catch(error => {
                reject(error);
            });
        });
    }







    //INPUT: Keyword you want helper to find
    //OUTPUT: Google Map token for that keyword
    export function findLocbyKeyword(keyword : string) : Promise<any> {
        return new Promise((resolve, reject) => {
            //let apiURL = `${this.apiRoot}?term=${term};
            let apiURL : string = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + keyword + "&key=AIzaSyDDDoI_eUw7nx8AXwzBPHi9PF2lxDDLAr4";
            getHelper(apiURL).then( retval => {
                resolve(retval);
            }).catch(error => {
                reject(error);
            });
        });

    }

    //INPUT:Google Place ID
    //OUTPUT: Details of that place ID
    export function getGeoDetails(placeid : string): Promise<any> {
        return new Promise((resolve, reject) => {
            //let apiURL = `${this.apiRoot}?term=${term};
            let apiURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeid + "&key=AIzaSyDDDoI_eUw7nx8AXwzBPHi9PF2lxDDLAr4";

            getHelper(apiURL).then( retval => {
                // console.log(retval);
                resolve(retval);

            }).catch(error => {
                reject(error);
            });
        });
    }



    //Winson Permission Function
    //INPUT:
    //OUTPUT:
    export function handlePermissionAtm(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            // let city = req.body.result.parameters.city;
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


        });

    }

    export function getHelper(apiurl : string) : Promise<any> {
        return new Promise((resp) => {
            https.get(apiurl, res => {
                res.setEncoding("utf8");
                let body = "";
                res.on("data", data => {
                    body += data;
                });
                res.on("end", () => {
                    body = JSON.parse(body);
                    resp(body);
                });
            });
        });
    }

    //todo delete this when done

    /*
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
     gmKEY,
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