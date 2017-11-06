
import {FulfillmentResponse, FulfillmentRequest} from './contracts';

const GOOGLE_MAPS_API_KEY : string = process.env.GOOGLE_MAPS_API_KEY;


// only some as a test sample
const ATMloc = [
    // Burnaby
    {address: '5210 Kingsway, Burnaby, BC', city: "Burnaby", lat: 49.2248347, long: -122.9884586},
    {address: '2829-4500 Kingsway Street, Burnaby, BC', city: "Burnaby", lat: 49.2292147, long: -123.0045148},
    {address: 'Unit #3 - 4447 Lougheed Hwy, Burnaby, BC', city: "Burnaby", lat: 49.2665398, long: -123.0043323},
    {address: '4447 Lougheed Hwy, Burnaby, BC', city: "Burnaby", lat: 49.2665426, long: -123.0043319},
    // Vancouver
    {address: '2735 Granville Street, Vancouver, BC', city: "Vancouver", lat: 49.2612063, long: -123.1386705},
    {address: '4498 West 10th Avenue, Vancouver, BC', city: "Vancouver", lat: 49.2638173, long: -123.2091386},
    {address: '2164 West 41st Avenue, Vancouver, BC', city: "Vancouver", lat: 49.2346012, long: -123.1575976},
    {address: '1010 Denman Street, Vancouver, BC', city: "Vancouver", lat: 49.2892145, long: -123.1386129},
    {address: '1196 Pacific Boulevard, Vancouver, BC', city: "Vancouver", lat: 49.2739721, long: -123.1212017},
    {address: '601 West Broadway Street, Vancouver, BC', city: "Vancouver", lat: 49.2634241, long: -123.1179907},
    {address: '5688 Granville Street, Vancouver, BC', city: "Vancouver", lat: 49.2346455, long: -123.1393632},
    {address: '8118 Granville Street, Vancouver, BC', city: "Vancouver", lat: 49.2119998, long: -123.1403979},
    {address: '5812 Cambie Street, Vancouver, BC', city: "Vancouver", lat: 49.2324081, long: -123.1159475},
    {address: '885 W. Georgia St., Vancouver, BC', city: "Vancouver", lat: 49.2837077, long: -123.119255},
    {address: '885 West Georgia Street', city: "Vancouver", lat: 49.2836617, long: -123.1197445},
    {address: '999 West Hastings Street, Vancouver, BC', city: "Vancouver", lat: 49.2871187, long: -123.1169403},
    {address: '1188 West Georgia St., Vancouver, BC', city: "Vancouver", lat: 49.286686, long: -123.125174},
    {address: '608 Main Street, Vancouver, BC', city: "Vancouver", lat: 49.2792834, long: -123.0997277},
    {address: '6373 Fraser Street, Vancouver, BC', city: "Vancouver", lat: 49.2267225, long: -123.0907474},
    {address: '3366 Kingsway, Vancouver, BC', city: "Vancouver", lat: 49.2330972, long: -123.0340536},
    {address: '2590 East Hastings, Vancouver, BC', city: "Vancouver", lat: 49.2809114, long: -123.0524426},
    // New Westminster
    {address: '504 Sixth Street, New Westminster, BC', city: "New Westminster", lat: 49.2118087, long: -122.9188674},
    // North Vancouver
    {
        address: '1577 Lonsdale Avenue, North Vancouver, BC',
        city: "North Vancouver",
        lat: 49.3230064,
        long: -123.0724882
    },
    {address: '3160 Edgemont Blvd., North Vancouver, BC', city: "North Vancouver", lat: 49.3377917, long: -123.102523},
    // West Vancouver
    {address: '1550 Marine Drive, West Vancouver, BC', city: "West Vancouver", lat: 49.3283937, long: -123.1579282},
    // Richmond
    {address: '4380 No.3 Road, Richmond, BC', city: "Richmond", lat: 49.1812933, long: -123.1365081},
    {address: '4380 No.3 Road, Richmond, BC', city: "Richmond", lat: 49.1807631, long: -123.1365505},
    {address: '6168 No. 3 Road, Richmond, BC', city: "Richmond", lat: 49.1699514, long: -123.1365666},
    {address: '6168 No.3 Road, Richmond, BC', city: "Richmond", lat: 49.168813, long: -123.1364477},
    {address: '4151 Hazelbridge Way, Richmond, BC', city: "Richmond", lat: 49.1835596, long: -123.133584},
    {address: '6800 No. 3 Road, Richmond, BC', city: "Richmond", lat: 49.1643796, long: -123.1362071},
    // Coquitlam
    {address: '1-405 North Road, Coquitlam, BC', city: "Coquitlam", lat: 49.2407536, long: -122.8925376},
    {address: '405 North Road, Coquitlam, BC', city: "Coquitlam", lat: 49.2482018, long: -122.8921276}
];

export namespace Atmfunc {


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

    export function handleSearchWhereAtm(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // DONE : stub
            // return ALL HSBC ATM at a given city (only all (Vancouver), West Van, North Van, New West, Burnaby, Richmond, Coquitlam, for now)
            // key
            // AIzaSyAQp3D2Xg_7cqGXUAiocs1KVvaeCvLma00
            if (!req.body.result) {
                reject("invalid request");

            }

            let city = req.body.result.parameters.city;
            let atmlist = [];
            let markerlist = [];


            // Get all the ATM address,lat,lon of given city

            let i;
            let len = ATMloc.length;

            for (i = 0; i < len; i++) {
                if (ATMloc[i].city == city) {
                    atmlist.push(ATMloc[i].address);
                    let str = "&markers=color:red%7C" + ATMloc[i].lat + "," + ATMloc[i].long;
                    markerlist.push(str);
                }
            }

            let speak = atmlist.join("\n");
            let markers = markerlist.join("");

            let image = "https://maps.googleapis.com/maps/api/staticmap?maptype=roadmap&hl=en&sensor=false&size=300x250&markers=color:red%7C" +
                markers + "&sensor=false&key=" + GOOGLE_MAPS_API_KEY;

            let link = "";

            // Making cases for which map to grab from google storage Vanc, West Van, North Van, New West, Burnaby, Richmond, Coquitlam,

            if (city == "all" || city == "Vancouver") {
                link = "https://www.google.ca/search?q=hsbc+vancouver&npsic=0&rflfq=1&rlha=0&rllag=49249030,-123174134,3003&tbm=lcl&ved=0ahUKEwi_hJKj_I7XAhUQ02MKHUSlBlUQtgMIKg&tbs=lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:4&rldoc=1#rlfi=hd:;si:;mv:!1m3!1d273694.9472248933!2d-122.8178858855469!3d49.286105544413516!3m2!1i1018!2i631!4f13.1";
            }
            if (city == "West Vancouver") {
                link = "https://www.google.ca/search?tbm=lcl&ei=wTPyWcXaN5i2jwPIxoeQAg&q=hsbc+west+vancouver&oq=hsbc+west+vancouver&gs_l=psy-ab.3..0l2j0i7i30k1l5j0j0i30k1l2.70351.70803.0.71060.4.4.0.0.0.0.128.366.3j1.4.0....0...1.1.64.psy-ab..1.3.283...0i13k1.0.4R1H6zy1PMI#rlfi=hd:;si:;mv:!1m3!1d277.631409007961!2d-123.15801489999998!3d49.328386599999995!2m3!1f0!2f0!3f0!3m2!1i1018!2i656!4f13.1";
            }

            if (city == "North Vancouver") {
                link = "https://www.google.ca/search?tbm=lcl&ei=VzPyWcy6AonijwPek6vYCg&q=hsbc+north+vancouver&oq=hsbc+north+van&gs_l=psy-ab.3.0.0i20i263k1j0j0i20i263k1j0j0i22i30k1l6.100932.102854.0.104168.9.9.0.0.0.0.99.617.9.9.0....0...1.1.64.psy-ab..0.9.615...35i39k1j0i131i10k1.0.ebo3uad6LLY#rlfi=hd:;si:;mv:!1m3!1d8315.018255944628!2d-123.08770315!3d49.33064245!2m3!1f0!2f0!3f0!3m2!1i395!2i307!4f13.1;tbs:lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:4";
            }

            if (city == "New Westminster") {
                link = "https://www.google.ca/search?tbm=lcl&ei=_DLyWZiNAYS0jwOjrKjYAQ&q=hsbc+new+westminster&oq=hsbc+new+westminster&gs_l=psy-ab.3..0l2j0i22i30k1l8.46147.49114.0.49364.15.15.0.0.0.0.141.1218.12j3.15.0....0...1.1.64.psy-ab..0.15.1213...0i131i10k1j0i20i263k1.0.z5YW52pksZo#rlfi=hd:;si:;mv:!1m3!1d278.2882288660429!2d-122.91902230000001!3d49.211809800000005!2m3!1f0!2f0!3f0!3m2!1i1018!2i656!4f13.1";
            }

            if (city == "Burnaby") {
                link = "https://www.google.ca/search?tbm=lcl&ei=LjPyWdalHcjOjwPmuZ2QAQ&q=hsbc+burnaby&oq=hsbc+burnaby&gs_l=psy-ab.3..0l3j0i22i30k1l7.36084.38333.0.38695.7.7.0.0.0.0.82.456.7.7.0....0...1.1.64.psy-ab..0.7.455...35i39k1j0i67k1.0.1stNgMaHRpY#rlfi=hd:;si:;mv:!1m3!1d22898.955420435195!2d-122.9630054!3d49.24568204999999!2m3!1f0!2f0!3f0!3m2!1i463!2i211!4f13.1;tbs:lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:4";
            }

            if (city == "Richmond") {
                link = "https://www.google.ca/search?tbm=lcl&ei=1zLyWfDGG9SgjwPIgbPgCg&q=hsbc+richmond&oq=hsbc+richmond&gs_l=psy-ab.3..0j0i20i263k1j0l8.32574.33941.0.34139.8.8.0.0.0.0.281.690.7j0j1.8.0....0...1.1.64.psy-ab..0.8.688...35i39k1j0i67k1.0.9m9ZrfxPBQw#rlfi=hd:;si:;mv:!1m3!1d10569.435837632045!2d-123.13495914999999!3d49.1740803!2m3!1f0!2f0!3f0!3m2!1i33!2i389!4f13.1;tbs:lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:4";
            }

            if (city == "Coquitlam") {
                link = "https://www.google.ca/search?tbm=lcl&ei=LTTyWb2XJtCSjwOWmInQCA&q=hsbc+coquitlam&oq=hsbc+coquitlam&gs_l=psy-ab.3..0j0i20i263k1j0i22i30k1l8.13649.15706.0.16031.9.9.0.0.0.0.95.628.9.9.0....0...1.1.64.psy-ab..0.9.624...35i39k1j0i67k1j0i131k1.0.Cm7lvowTj_s#rlfi=hd:;si:;mv:!1m3!1d14321.255615212176!2d-123.01301759999998!3d49.2600097!2m3!1f0!2f0!3f0!3m2!1i733!2i66!4f13.1;tbs:lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:4";
            }


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
                                        "textToSpeech": speak,
                                    }
                                },
                                {
                                    "basicCard": {
                                        "title": "ATM at " + city,
                                        "formattedText": speak,
                                        "image": {
                                            "url": image,
                                            "accessibilityText": "map"
                                        },
                                        "buttons": [
                                            {
                                                "title": "Go to Google Map",
                                                "openUrlAction": {
                                                    "url": link
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
                                        'title': "ATM at " + city,
                                        'image_url': image,
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

            if (atmlist.length <= 0) {

                result = {
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

    export function handleFindAtm(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {


            if (!req.body.result) {
                reject("invalid request");

            }

            let city = "Vancouver";
            let atmlist = [];
            let markerlist = [];


            // Get all the ATM address,lat,lon of given city

            let i;
            let len = ATMloc.length;

            for (i = 0; i < len; i++) {
                if (ATMloc[i].city == city) {
                    atmlist.push(ATMloc[i].address);
                    let str = "&markers=color:red%7C" + ATMloc[i].lat + "," + ATMloc[i].long;
                    markerlist.push(str);
                }
            }

            let speak = atmlist.join("\n");
            speak = "Would you like to find an ATM in Richmond, New West, North Van, West Van, or Burnaby?\n" +
                "Or would you like to find the closest one to you?";
            let markers = markerlist.join("");

            let image = "https://maps.googleapis.com/maps/api/staticmap?maptype=roadmap&hl=en&sensor=false&size=300x250&markers=color:red%7C" +
                markers + "&sensor=false&key=" + GOOGLE_MAPS_API_KEY;

             let link = "https://www.google.ca/search?q=hsbc+vancouver&npsic=0&rflfq=1&rlha=0&rllag=49249030,-123174134,3003&tbm=lcl&ved=0ahUKEwi_hJKj_I7XAhUQ02MKHUSlBlUQtgMIKg&tbs=lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:4&rldoc=1#rlfi=hd:;si:;mv:!1m3!1d273694.9472248933!2d-122.8178858855469!3d49.286105544413516!3m2!1i1018!2i631!4f13.1";

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
                                        "textToSpeech": speak,
                                    }
                                },
                                {
                                    "basicCard": {
                                        "title": "ATM at " + city,
                                        "formattedText": speak,
                                        "image": {
                                            "url": image,
                                            "accessibilityText": "map"
                                        },
                                        "buttons": [
                                            {
                                                "title": "Go to Google Map",
                                                "openUrlAction": {
                                                    "url": link
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
                                        'title': "ATM at " + city,
                                        'image_url': image,
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

            if (atmlist.length <= 0) {

                result = {
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
}