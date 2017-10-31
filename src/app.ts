import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {Actions} from './actions';

'use strict';
import {Request} from "express";

// const app = require('actions-on-google').ApiAiApp;

const app: express.Express = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.SupportedPermissions.NAME;
//app.SupportedPermissions.DEVICE_PRECISE_LOCATION;
//app.SupportedPermissions.DEVICE_COARSE_LOCATION;

/**
 * Service Discovery:
 *
 * HSBC API is the default service, and so it will be available at
 * const HSBC_API_URL = https://MY_PROJECT_ID.appspot.com/v1
 *
 * // todo: configure project metadata for dynamic address discovery
 *
 */


// set up the google API key
var fs = require('fs');


var fileContents;
try {
    fileContents = fs.readFileSync('KEY', 'utf8');
} catch (err) {
    // Here you get the error when the file was not found,
    // but you also get any other error
    console.log('Create A KEY.txt containing your GOOGLE MAP API');
}

var MapKey = fileContents;
// console.log(MapKey);

/**
 * IMPORTANT:
 *
 * The base URI of this service has to be the same as the Google AppEngine dispatch URL,
 * in order for routing and service-discovery to function correctly.
 *
 * AppEngine routing is specified for the default app in ../hscb-api/dispatch.yaml
 *
 */
app.route('/apiai/v1').post(function (req: any, res: any) {

    // todo: authentication

    handleRequest(req).then(response => {
        res.json(response);
    }).catch(err => {
        res.sendStatus(400);
    });

});

// only some as a test sample
var ATMloc = [
    // Abbotsford
    {address:'32412 South Fraser Way, Abbotsford, BC',city: "Abbotsford", lat:49.0513971, long:-122.3261882},
    // Burnaby
    {address:'5210 Kingsway, Burnaby, BC',city: "Burnaby", lat:49.2248347, long:-122.9884586},
    {address:'2829-4500 Kingsway Street, Burnaby, BC',city: "Burnaby", lat:49.2292147, long:-123.0045148},
    {address:'Unit #3 - 4447 Lougheed Hwy, Burnaby, BC',city: "Burnaby",lat:49.2665398, long:-123.0043323},
    {address:'4447 Lougheed Hwy, Burnaby, BC',city: "Burnaby",lat:49.2665426, long:-123.0043319},
    // Vancouver
    {address:'2735 Granville Street, Vancouver, BC',city: "Vancouver", lat:49.2612063, long:-123.1386705},
    {address:'4498 West 10th Avenue, Vancouver, BC',city: "Vancouver", lat:49.2638173, long:-123.2091386},
    {address:'2164 West 41st Avenue, Vancouver, BC',city: "Vancouver", lat:49.2346012, long:-123.1575976},
    {address:'1010 Denman Street, Vancouver, BC',city: "Vancouver", lat:49.2892145, long:-123.1386129},
    {address:'1196 Pacific Boulevard, Vancouver, BC',city: "Vancouver", lat:49.2739721, long:-123.1212017},
    {address:'601 West Broadway Street, Vancouver, BC',city: "Vancouver", lat:49.2634241, long:-123.1179907},
    {address:'5688 Granville Street, Vancouver, BC',city: "Vancouver", lat:49.2346455, long:-123.1393632},
    {address:'8118 Granville Street, Vancouver, BC',city: "Vancouver", lat:49.2119998, long:-123.1403979},
    {address:'5812 Cambie Street, Vancouver, BC',city: "Vancouver", lat:49.2324081, long:-123.1159475},
    {address:'885 W. Georgia St., Vancouver, BC',city: "Vancouver", lat:49.2837077, long:-123.119255},
    {address:'885 West Georgia Street',city: "Vancouver", lat:49.2836617, long:-123.1197445},
    {address:'999 West Hastings Street, Vancouver, BC',city: "Vancouver", lat:49.2871187, long:-123.1169403},
    {address:'1188 West Georgia St., Vancouver, BC', city: "Vancouver",lat:49.286686, long:-123.125174},
    {address:'608 Main Street, Vancouver, BC', city: "Vancouver",lat:49.2792834, long:-123.0997277},
    {address:'6373 Fraser Street, Vancouver, BC',city: "Vancouver", lat:49.2267225, long:-123.0907474},
    {address:'3366 Kingsway, Vancouver, BC', city: "Vancouver",lat:49.2330972, long:-123.0340536},
    {address:'2590 East Hastings, Vancouver, BC', city: "Vancouver",lat:49.2809114, long:-123.0524426},
    // New Westminster
    {address:'504 Sixth Street, New Westminster, BC',city: "New Westminster", lat:49.2118087, long:-122.9188674},
    // North Vancouver
    {address:'1577 Lonsdale Avenue, North Vancouver, BC',city: "North Vancouver", lat:49.3230064, long:-123.0724882},
    {address:'3160 Edgemont Blvd., North Vancouver, BC',city: "North Vancouver", lat:49.3377917, long:-123.102523},
    // West Vancouver
    {address:'1550 Marine Drive, West Vancouver, BC',city: "West Vancouver", lat:49.3283937, long:-123.1579282},
    // Richmond
    {address:'4380 No.3 Road, Richmond, BC', city: "Richmond",lat:49.1812933, long:-123.1365081},
    {address:'4380 No.3 Road, Richmond, BC', city: "Richmond",lat:49.1807631, long:-123.1365505},
    {address:'6168 No. 3 Road, Richmond, BC', city: "Richmond",lat:49.1699514, long:-123.1365666},
    {address:'6168 No.3 Road, Richmond, BC', city: "Richmond",lat:49.168813, long:-123.1364477},
    {address:'4151 Hazelbridge Way, Richmond, BC', city: "Richmond",lat:49.1835596, long:-123.133584},
    {address:'6800 No. 3 Road, Richmond, BC', city: "Richmond",lat:49.1643796, long:-123.1362071},
    // Coquitlam
    {address:'1-405 North Road, Coquitlam, BC', city: "Coquitlam",lat:49.2407536, long:-122.8925376},
    {address:'405 North Road, Coquitlam, BC', city: "Coquitlam",lat:49.2482018, long:-122.8921276}
];
function handleRequest(req: express.Request): Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse>((resolve, reject) => {

        let action = req.body.result.action;
        if(typeof action === "undefined") {
            reject("invalid request");
        }

        switch (action) {

            case Actions.MY_ACTION :
                handleMyAction(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.WELCOME :
                handleInputWelcome(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.MORTGAGERATE_SPECIALOFFER_ADVANCE :
                handleMortgageRateSpecialOfferAdvance(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.MORTGAGERATE_SPECIALOFFER_PREMIER :
                handleMortgageRateSpecialOfferPremier(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.MORTGAGERATE_SPECIALOFFER_PERSONALRATES :
                handleMortgageRateSpecialOfferPersonalRates(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.MORTGAGERATE_SPECIALOFFER_SMARTSAVER :
                handleMortgageRateSpecialOfferSmartSaver(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.FIND_WHAT_EXCHANGERATE :
                handleFindWhatExchangeRate(req).then(response => {
                    resolve(response);
                });
                break;


            case Actions.FIND_ATM :
                handleFindAtm(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.FIND_ATM_FALLBACK :
                handleFindAtmFallback(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.SEARCH_CURRENCY_EXCHANGE:
                handleSearchCurrencyExchange(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.SEARCH_WHAT_EXCHANGERATE :
                handleSearchWhatExchangeRate(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.SEARCH_WHAT_MORTGAGETYPE :
                handleSearchWhatMortgageType(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.SEARCH_WHERE_ATM :
                handleSearchWhereAtm(req).then(response => {
                    resolve(response);
                });
                break;

            case Actions.SEARCH_WHAT_MORTGAGE_CALCULATOR_PAYMENT_LEFT :
                handleSearchWhatMortgageCalculatorPaymentLeft(req).then(response => {
                    resolve(response);
                });
                break;

            default:
                reject("unsupported action");
        }

    });

}

function handleMyAction(req: any) : Promise<FulfillmentResponse>{

    return new Promise<FulfillmentResponse>((resolve, reject) => {

        // not used in HSBC bot
        if(!req.body.result) {
            reject("invalid request");
        }

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
            }
        }

    ,
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleInputWelcome(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: DELETE THIS
        // NOT used in HSBC BOT

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "Welcome to HSBC",
            displayText: "Welcome to HSBC",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleMortgageRateSpecialOfferAdvance(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: stub

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "Our Fixed Rates are:\n" +
            "For a 2 year Fixed Closed: API_CALL\n" +
            "For a 5 year Fixed Closed: API_CALL\n" +
            "\n" +
            "Our Variable Rates are:\n" +
            "For a 5 year Variable Closed: API_CALL",
            displayText: "Our Fixed Rates are:\n" +
            "For a 2 year Fixed Closed: API_CALL\n" +
            "For a 5 year Fixed Closed: API_CALL\n" +
            "\n" +
            "Our Variable Rates are:\n" +
            "For a 5 year Variable Closed: API_CALL",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleMortgageRateSpecialOfferPremier(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: stub

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "Our Fixed Rates are:\n" +
            "For a 2 year Fixed Closed: API_call\n" +
            "For a 5 year Fixed Closed: API_call\n" +
            "\n" +
            "Variable\n" +
            "For a 5 year Variable Closed: API_call",
            displayText: "Our Fixed Rates are:\n" +
            "For a 2 year Fixed Closed: API_call\n" +
            "For a 5 year Fixed Closed: API_call\n" +
            "\n" +
            "Variable\n" +
            "For a 5 year Variable Closed: API_call",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleMortgageRateSpecialOfferPersonalRates(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: stub

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "Our Fixed Rates are:\n" +
            "For a 2 year Fixed Closed: API_call\n" +
            "For a 5 year Fixed Closed: API_call\n" +
            "\n" +
            "Variable\n" +
            "For a 5 year Variable Closed: API_call",
            displayText: "Our Fixed Rates are:\n" +
            "For a 2 year Fixed Closed: API_call\n" +
            "For a 5 year Fixed Closed: API_call\n" +
            "\n" +
            "Variable\n" +
            "For a 5 year Variable Closed: API_call",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleMortgageRateSpecialOfferSmartSaver(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: stub

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "Our Fixed Rates are:\n" +
            "For a 2 year Fixed Closed: API_call\n" +
            "For a 5 year Fixed Closed: API_call\n" +
            "\n" +
            "Variable\n" +
            "For a 5 year Variable Closed: API_call",
            displayText: "Our Fixed Rates are:\n" +
            "For a 2 year Fixed Closed: API_call\n" +
            "For a 5 year Fixed Closed: API_call\n" +
            "\n" +
            "Variable\n" +
            "For a 5 year Variable Closed: API_call",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleFindWhatExchangeRate(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: stub

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "Returns list of rates.        currency : rates     \n" +
            "no parameters as this is a find, rather than a search, function and so you are returning ALL rates as a list",
            displayText: "Returns list of rates.        currency : rates     \n" +
            "no parameters as this is a find, rather than a search, function and so you are returning ALL rates as a list",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleFindAtm(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // DONE: stub
        // return a prompt to get user location
        // key
        // AIzaSyAQp3D2Xg_7cqGXUAiocs1KVvaeCvLma00

        if(!req.body.result) {
            reject("invalid request");

        }

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
                    }}},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleFindAtmFallback(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // DONE: TRIAL FALLBACK
        // return a map with user location and nearest HSBC ATM marked
        // key
        // AIzaSyAQp3D2Xg_7cqGXUAiocs1KVvaeCvLma00


        if(!req.body.result) {
            reject("invalid request");

                }

        var lat = req.body.originalRequest.data.device.location.coordinates.latitude;
        var long = req.body.originalRequest.data.device.location.coordinates.longitude;

        // function to calculate distance between 2 lat long using harversine formula
        function distance(lat1, lon1, lat2, lon2) {
            var p = 0.017453292519943295;    // Math.PI / 180
            var c = Math.cos;
            var a = 0.5 - c((lat2 - lat1) * p)/2 +
                c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p))/2;

            return 12742 * Math.asin(Math.sqrt(a)); // return distance
        }

        console.log(ATMloc.length);
        var closest = null;
        var cindex = null;
        var i;
        var len = ATMloc.length;

        for (i = 0; i < len; i++) {
            var y = distance(lat,long,ATMloc[i].lat,ATMloc[i].long);
            if (closest == null || closest > y) {
                closest =  y;
                cindex = i;
            }
        }

        var speak = ATMloc[cindex].address;
        var clat = ATMloc[cindex].lat;
        var clong = ATMloc[cindex].long;


        const result: FulfillmentResponse = {
            speech:  "",
            displayText: "",
            data: {
                "google": {
                    "expect_user_response": true,
                    "rich_response": {
                        "items": [
                            {
                                "simpleResponse": {
                                    "textToSpeech":speak,
                                }
                            },
                            {
                                "basicCard": {
                                    "title":"Nearest ATM",
                                    "formattedText": speak,
                                    "image": {
                                        "url": "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + long + "&size=300x250&markers=color:blue%7C" + lat + "," + long + "&markers=color:red%7C" + clat + "," + clong + "&key=" + MapKey,
                                        "accessibilityText":"map"
                                    }
                                }
                            },
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

function handleSearchCurrencyExchange(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: stub

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "This will return just one value foreign_currency : amount\n" +
            "The parameter will be the currency to exchange in shortForm: e.g. USD\n" +
            "Optional parameter: they might include a sum to convert... in this case multiply sum by exchange rate and return",
            displayText: "This will return just one value foreign_currency : amount\n" +
            "The parameter will be the currency to exchange in shortForm: e.g. USD\n" +
            "Optional parameter: they might include a sum to convert... in this case multiply sum by exchange rate and return",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleSearchWhatExchangeRate(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: stub

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "**webhook here returning $amount converted into $currency",
            displayText: "**webhook here returning $amount converted into $currency",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}

function handleSearchWhatMortgageType(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: stub

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "This will calculate the rate depending on stuff... this will be a dialogue\n" +
            "I need to work on this one as I need to let you know about incoming parameters and outgoing expected result. Just put in a stub for this guy please",
            displayText: "This will calculate the rate depending on stuff... this will be a dialogue\n" +
            "I need to work on this one as I need to let you know about incoming parameters and outgoing expected result. Just put in a stub for this guy please",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });
}

function handleSearchWhereAtm(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // DONE : stub
        // return ALL HSBC ATM at a given city (only West Van, North Van, New West, Burnaby, Richmond, Coquitlam, Abbotsford  for now)
        // key
        // AIzaSyAQp3D2Xg_7cqGXUAiocs1KVvaeCvLma00
        if(!req.body.result) {
            reject("invalid request");

        }

        var city = req.body.result.parameters.city;
        var atmlist = [];
        var markerlist = [];


        // Get all the ATM address,lat,lon of given city

        var i;
        var len = ATMloc.length;

        for (i = 0; i < len; i++) {
            if (ATMloc[i].city == city) {
                atmlist.push(ATMloc[i].address);
                var str = "&markers=color:red%7C" + ATMloc[i].lat + "," + ATMloc[i].long;
                markerlist.push(str);
            }
        }

        var speak = atmlist.join("\n");
        var markers = markerlist.join("");

        var image = "https://maps.googleapis.com/maps/api/staticmap?maptype=roadmap&hl=en&sensor=false&size=300x250&markers=color:red%7C" + markers + "&sensor=false&key=" + MapKey;

        var result: FulfillmentResponse = {
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
                                    "title": "ATM at " + city,
                                    "formattedText": speak,
                                    "image": {
                                        "url": image,
                                        "accessibilityText":"map"
                                    }
                                }
                            },
                        ]
                    }
                }
            },
            contextOut: [],
            source: ""
        };

        if (atmlist.length <= 0) {
            var result: FulfillmentResponse = {
                speech: "Sorry, we don't have a map for atm in that city yet",
                displayText: "Sorry, we don't have a map for atm in that city yet",
                data: {},
                contextOut: [],
                source: ""
            };
        }

        resolve(result);

    });
}

function handleSearchWhatMortgageCalculatorPaymentLeft(req: any) : Promise<FulfillmentResponse> {

    return new Promise<FulfillmentResponse> ((resolve, reject) => {

        // todo: stub

        if(!req.body.result) {
            reject("invalid request");

        }

        const result: FulfillmentResponse = {
            speech: "output: total amount remaining to pay",
            displayText: "output: total amount remaining to pay",
            data: {},
            contextOut: [],
            source: ""
        };

        resolve(result);

    });

}
export default app;