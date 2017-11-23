import * as mocha from  'mocha';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

let server = "http://localhost:8080";
let user = process.env.DIALOGFLOW_USER;
let pass = process.env.DIALOGFLOW_PASS;

/* LIST OF ACTION TO TEST
// all handle by the same function, so only tested welcome
welcome
GOOGLE_ASSISTANT_WELCOME
smalltalk.agent.talk_to_me
// ???
find.where.atm
search.where.atm
// all tested
find.what.exchangeRate 1
search.what.exhangeRate 1
//
search.what.mortgageType ???
find.how.mortgages.calculate.monthlyPayment 1
find.how.mortgages.calculate.remainingLoan 1
//
direct.rrsp
find.how.apply.rrsp
find.what.rrsp.benefits
//
direct.wsf
find.what.wsf.eligible
find.what.wsf.more
//book and direct apply handle by same function
direct.mortgages ???
direct.apply 1
book.appointment 1
*/

describe('Black Box Test Script', () => {
    /* format of black box test
    it(' function name', (done) => {
        let sendval: {} = {};
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });
    */

    it('handleInputWelcome', (done) => {
        let sendval: {} = {
            "id": "81fdfea6-5eb3-45be-8d00-086804afd517",
            "timestamp": "2017-11-21T17:57:54.081Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "hi",
                "action": "welcome",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [],
                "metadata": {
                    "intentId": "358bd324-5f20-45a0-8114-d3d776b406a3",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "0_blurb_welcome"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": []
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success",
                "webhookTimedOut": false
            },
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });
    //
    it('handleSearchWhereAtmLocation ', (done) => {
        let sendval: {} = {
            "originalRequest": {
                "source": "google",
                "version": "2",
                "data": {
                    "isInSandbox": true,
                    "surface": {
                        "capabilities": [
                            {
                                "name": "actions.capability.AUDIO_OUTPUT"
                            },
                            {
                                "name": "actions.capability.SCREEN_OUTPUT"
                            }
                        ]
                    },
                    "inputs": [
                        {
                            "rawInputs": [
                                {
                                    "query": "atm close",
                                    "inputType": "KEYBOARD"
                                }
                            ],
                            "arguments": [
                                {
                                    "rawText": "atm close",
                                    "textValue": "atm close",
                                    "name": "text"
                                }
                            ],
                            "intent": "actions.intent.TEXT"
                        }
                    ],
                    "user": {
                        "locale": "en-US",
                        "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                    },
                    "conversation": {
                        "conversationId": "1509893405615",
                        "type": "ACTIVE",
                        "conversationToken": "[]"
                    },
                    "availableSurfaces": [
                        {
                            "capabilities": [
                                {
                                    "name": "actions.capability.AUDIO_OUTPUT"
                                },
                                {
                                    "name": "actions.capability.SCREEN_OUTPUT"
                                }
                            ]
                        }
                    ]
                }
            },
            "id": "b3f72606-d172-4135-b8e8-a6a9d93c5e36",
            "timestamp": "2017-11-05T14:50:23.697Z",
            "lang": "en-us",
            "result": {
                "source": "agent",
                "resolvedQuery": "atm close",
                "speech": "",
                "action": "search.where.atm.location",
                "actionIncomplete": false,
                "parameters": {
                    "city": "user-location"
                },
                "contexts": [
                    {
                        "name": "actions_capability_screen_output",
                        "parameters": {
                            "city": "user-location",
                            "city.original": ""
                        },
                        "lifespan": 0
                    },
                    {
                        "name": "actions_capability_audio_output",
                        "parameters": {
                            "city": "user-location",
                            "city.original": ""
                        },
                        "lifespan": 0
                    },
                    {
                        "name": "google_assistant_input_type_keyboard",
                        "parameters": {
                            "city": "user-location",
                            "city.original": ""
                        },
                        "lifespan": 0
                    }
                ],
                "metadata": {
                    "intentId": "cb193fc5-dc2f-4c07-8322-258ae500648d",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "nluResponseTime": 19,
                    "intentName": "1_search_where_atm_byUserLocation_send"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 1,
                            "platform": "facebook",
                            "imageUrl": "https://maps.googleapis.com/maps/api/staticmap?center=Vancouver&zoom=13&size=800x600&maptype=roadmap",
                            "buttons": []
                        },
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "Your closest ATM is at addressX (returned by webhook)"
                        },
                        {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "Your closest ATM is at addressX (returned by webhook)"
                        },
                        {
                            "type": "basic_card",
                            "platform": "google",
                            "image": {
                                "url": "https://maps.googleapis.com/maps/api/staticmap?center=Vancouver&zoom=13&size=800x600&maptype=roadmap"
                            },
                            "buttons": []
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success"
            },
            "sessionId": "1509893405615"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    it('handleSearchWhereAtmLocationFallback', (done) => {
        let sendval: {} = {
            "originalRequest": {
                "source": "google",
                "version": "2",
                "data": {
                    "isInSandbox": true,
                    "surface": {
                        "capabilities": [
                            {
                                "name": "actions.capability.AUDIO_OUTPUT"
                            },
                            {
                                "name": "actions.capability.SCREEN_OUTPUT"
                            }
                        ]
                    },
                    "inputs": [
                        {
                            "rawInputs": [
                                {
                                    "query": "yes",
                                    "inputType": "VOICE"
                                }
                            ],
                            "arguments": [
                                {
                                    "textValue": "true",
                                    "name": "PERMISSION"
                                }
                            ],
                            "intent": "actions.intent.PERMISSION"
                        }
                    ],
                    "user": {
                        "permissions": [
                            "NAME",
                            "DEVICE_PRECISE_LOCATION"
                        ],
                        "profile": {
                            "displayName": "Winson Soewandibio",
                            "givenName": "Winson",
                            "familyName": "Soewandibio"
                        },
                        "locale": "en-US",
                        "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                    },
                    "device": {
                        "location": {
                            "coordinates": {
                                "latitude": 49.2378333,
                                "longitude": -123.0411864
                            }
                        }
                    },
                    "conversation": {
                        "conversationId": "1509893405615",
                        "type": "ACTIVE",
                        "conversationToken": "[]"
                    },
                    "availableSurfaces": [
                        {
                            "capabilities": [
                                {
                                    "name": "actions.capability.AUDIO_OUTPUT"
                                },
                                {
                                    "name": "actions.capability.SCREEN_OUTPUT"
                                }
                            ]
                        }
                    ]
                }
            },
            "id": "3fc53642-1a5f-4f51-b8e2-c6e14a4c3623",
            "timestamp": "2017-11-05T14:50:30.321Z",
            "lang": "en-us",
            "result": {
                "source": "agent",
                "resolvedQuery": "actions_intent_PERMISSION",
                "speech": "",
                "action": "actions.intent.PERMISSION",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [
                    {
                        "name": "actions_capability_screen_output",
                        "parameters": {},
                        "lifespan": 0
                    },
                    {
                        "name": "actions_intent_permission",
                        "parameters": {
                            "PERMISSION": "true"
                        },
                        "lifespan": 0
                    },
                    {
                        "name": "google_assistant_input_type_voice",
                        "parameters": {},
                        "lifespan": 0
                    },
                    {
                        "name": "actions_capability_audio_output",
                        "parameters": {},
                        "lifespan": 0
                    }
                ],
                "metadata": {
                    "intentId": "16b6cce9-08ff-4ee0-89fa-fbc29e9e0655",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "nluResponseTime": 2,
                    "intentName": "1_search_where_atm_byUserLocation_received"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success"
            },
            "sessionId": "1509893405615"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    it('handleSearchWhereAtm ', (done) => {
        let sendval: {} = {
            "id": "41d1a81f-9388-45b1-b490-2b72a9315499",
            "timestamp": "2017-11-05T14:24:07.153Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "ATM Burnaby",
                "speech": "",
                "action": "search.where.atm",
                "actionIncomplete": false,
                "parameters": {
                    "city": "Burnaby"
                },
                "contexts": [],
                "metadata": {
                    "intentId": "a4ea2738-1f71-48c2-9f65-6e1af1eaf433",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "1_search_where_atm"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 1,
                            "platform": "facebook",
                            "title": "$geo-city",
                            "imageUrl": "https://maps.googleapis.com/maps/api/staticmap?center=$geo-city&zoom=13&size=800x600&maptype=roadmap",
                            "buttons": []
                        },
                        {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "webhook returns a map for text surface, and an address for voice surface"
                        },
                        {
                            "type": "basic_card",
                            "platform": "google",
                            "title": "$geo-city",
                            "image": {
                                "url": "https://maps.googleapis.com/maps/api/staticmap?center=$geo-city&zoom=13&size=800x600&maptype=roadmap"
                            },
                            "buttons": []
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success"
            },
            "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    it('handleFindAtm', (done) => {
        let sendval: {} = {
            "originalRequest": {
                "source": "google",
                "version": "2",
                "data": {
                    "isInSandbox": true,
                    "surface": {
                        "capabilities": [
                            {
                                "name": "actions.capability.AUDIO_OUTPUT"
                            },
                            {
                                "name": "actions.capability.SCREEN_OUTPUT"
                            }
                        ]
                    },
                    "inputs": [
                        {
                            "rawInputs": [
                                {
                                    "query": "ATMs",
                                    "inputType": "KEYBOARD"
                                }
                            ],
                            "arguments": [
                                {
                                    "rawText": "ATMs",
                                    "textValue": "ATMs",
                                    "name": "text"
                                }
                            ],
                            "intent": "actions.intent.TEXT"
                        }
                    ],
                    "user": {
                        "locale": "en-US",
                        "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                    },
                    "conversation": {
                        "conversationId": "1509894128939",
                        "type": "ACTIVE",
                        "conversationToken": "[]"
                    },
                    "availableSurfaces": [
                        {
                            "capabilities": [
                                {
                                    "name": "actions.capability.AUDIO_OUTPUT"
                                },
                                {
                                    "name": "actions.capability.SCREEN_OUTPUT"
                                }
                            ]
                        }
                    ]
                }
            },
            "id": "f601160b-be0f-4d70-9092-77c43c451ea9",
            "timestamp": "2017-11-05T15:02:13.449Z",
            "lang": "en-us",
            "result": {
                "source": "agent",
                "resolvedQuery": "ATMs",
                "speech": "",
                "action": "find.atm",
                "actionIncomplete": false,
                "parameters": {
                    "city": "all"
                },
                "contexts": [
                    {
                        "name": "actions_capability_screen_output",
                        "parameters": {
                            "city": "all",
                            "city.original": ""
                        },
                        "lifespan": 0
                    },
                    {
                        "name": "atm",
                        "parameters": {
                            "city": "all",
                            "city.original": ""
                        },
                        "lifespan": 1
                    },
                    {
                        "name": "actions_capability_audio_output",
                        "parameters": {
                            "city": "all",
                            "city.original": ""
                        },
                        "lifespan": 0
                    },
                    {
                        "name": "google_assistant_input_type_keyboard",
                        "parameters": {
                            "city": "all",
                            "city.original": ""
                        },
                        "lifespan": 0
                    }
                ],
                "metadata": {
                    "intentId": "3cd416a4-1255-47c7-b5d7-a01d8f4455f7",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "nluResponseTime": 16,
                    "intentName": "1_find_where_atm"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "Would you like to find an ATM in Richmond, New West, North Van, West Van, or Burnaby?\nOr would you like to find the closest one to you?"
                        },
                        {
                            "type": "basic_card",
                            "platform": "google",
                            "title": "ATM",
                            "subtitle": "",
                            "formattedText": "",
                            "image": {
                                "url": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
                            },
                            "buttons": [
                                {
                                    "title": "map",
                                    "openUrlAction": {
                                        "url": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
                                    }
                                }
                            ]
                        },
                        {
                            "type": 1,
                            "platform": "facebook",
                            "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png",
                            "buttons": []
                        },
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "Would you like to find an ATM in Richmond, New West, North Van, West Van, or Burnaby?\nOr would you like to find the closest one to you?"
                        },
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success"
            },
            "sessionId": "1509894128939"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    //
    it('handleFindWhatExchangeRate ', (done) => {
        let sendval: {} = {
            "originalRequest": {
                "source": "google",
                "version": "2",
                "data": {
                    "isInSandbox": true,
                    "surface": {
                        "capabilities": [
                            {
                                "name": "actions.capability.AUDIO_OUTPUT"
                            },
                            {
                                "name": "actions.capability.SCREEN_OUTPUT"
                            }
                        ]
                    },
                    "inputs": [
                        {
                            "rawInputs": [
                                {
                                    "query": "exchange",
                                    "inputType": "KEYBOARD"
                                }
                            ],
                            "arguments": [
                                {
                                    "rawText": "exchange",
                                    "textValue": "exchange",
                                    "name": "text"
                                }
                            ],
                            "intent": "actions.intent.TEXT"
                        }
                    ],
                    "user": {
                        "locale": "en-US",
                        "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                    },
                    "conversation": {
                        "conversationId": "1509894472129",
                        "type": "ACTIVE",
                        "conversationToken": "[]"
                    },
                    "availableSurfaces": [
                        {
                            "capabilities": [
                                {
                                    "name": "actions.capability.AUDIO_OUTPUT"
                                },
                                {
                                    "name": "actions.capability.SCREEN_OUTPUT"
                                }
                            ]
                        }
                    ]
                }
            },
            "id": "e20ac6f0-a445-47a7-9699-d4964245c119",
            "timestamp": "2017-11-05T15:08:04.624Z",
            "lang": "en-us",
            "result": {
                "source": "agent",
                "resolvedQuery": "exchange",
                "speech": "",
                "action": "find.what.exchangeRate",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [
                    {
                        "name": "actions_capability_screen_output",
                        "parameters": {},
                        "lifespan": 0
                    },
                    {
                        "name": "actions_capability_audio_output",
                        "parameters": {},
                        "lifespan": 0
                    },
                    {
                        "name": "google_assistant_input_type_keyboard",
                        "parameters": {},
                        "lifespan": 0
                    }
                ],
                "metadata": {
                    "intentId": "47944bbc-2fc1-433d-8e88-a96a69cfaa9a",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "nluResponseTime": 17,
                    "intentName": "3_find_what_exchange"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "Here is a list of all of our exchange rates."
                        },
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "This should return a table of rates as a custom payload"
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success"
            },
            "sessionId": "1509894472129"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    it('handleSearchWhatExchangeRate ', (done) => {
        let sendval: {} = {
            "originalRequest": {
                "source": "google",
                "version": "2",
                "data": {
                    "isInSandbox": true,
                    "surface": {
                        "capabilities": [
                            {
                                "name": "actions.capability.AUDIO_OUTPUT"
                            },
                            {
                                "name": "actions.capability.SCREEN_OUTPUT"
                            }
                        ]
                    },
                    "inputs": [
                        {
                            "rawInputs": [
                                {
                                    "query": "convert 100 cad to usd",
                                    "inputType": "KEYBOARD"
                                }
                            ],
                            "arguments": [
                                {
                                    "rawText": "convert 100 cad to usd",
                                    "textValue": "convert 100 cad to usd",
                                    "name": "text"
                                }
                            ],
                            "intent": "actions.intent.TEXT"
                        }
                    ],
                    "user": {
                        "locale": "en-US",
                        "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                    },
                    "conversation": {
                        "conversationId": "1509894817541",
                        "type": "ACTIVE",
                        "conversationToken": "[]"
                    },
                    "availableSurfaces": [
                        {
                            "capabilities": [
                                {
                                    "name": "actions.capability.AUDIO_OUTPUT"
                                },
                                {
                                    "name": "actions.capability.SCREEN_OUTPUT"
                                }
                            ]
                        }
                    ]
                }
            },
            "id": "80dc5dcd-5843-441f-a539-b78fa3510e4d",
            "timestamp": "2017-11-05T15:13:47.738Z",
            "lang": "en-us",
            "result": {
                "source": "agent",
                "resolvedQuery": "convert 100 cad to usd",
                "speech": "",
                "action": "search.what.exchangeRate",
                "actionIncomplete": false,
                "parameters": {
                    "amount": "100",
                    "currency_into": "USD",
                    "currency_from": "CAD"
                },
                "contexts": [
                    {
                        "name": "actions_capability_screen_output",
                        "parameters": {
                            "currency_from.original": "cad",
                            "amount": "100",
                            "currency_into.original": "usd",
                            "currency_into": "USD",
                            "amount.original": "100",
                            "currency_from": "CAD"
                        },
                        "lifespan": 0
                    },
                    {
                        "name": "actions_capability_audio_output",
                        "parameters": {
                            "currency_from.original": "cad",
                            "amount": "100",
                            "currency_into.original": "usd",
                            "currency_into": "USD",
                            "amount.original": "100",
                            "currency_from": "CAD"
                        },
                        "lifespan": 0
                    },
                    {
                        "name": "google_assistant_input_type_keyboard",
                        "parameters": {
                            "currency_from.original": "cad",
                            "amount": "100",
                            "currency_into.original": "usd",
                            "currency_into": "USD",
                            "amount.original": "100",
                            "currency_from": "CAD"
                        },
                        "lifespan": 0
                    }
                ],
                "metadata": {
                    "matchedParameters": [
                        {
                            "dataType": "@sys.number",
                            "name": "amount",
                            "value": "$amount",
                            "isList": false
                        },
                        {
                            "required": false,
                            "dataType": "@foreign_currency",
                            "name": "currency_from",
                            "value": "$currency_from",
                            "prompts": [
                                {
                                    "lang": "en",
                                    "value": "What currency would you like to change from?"
                                }
                            ],
                            "isList": false
                        },
                        {
                            "required": true,
                            "dataType": "@foreign_currency",
                            "name": "currency_into",
                            "value": "$currency_into",
                            "prompts": [
                                {
                                    "lang": "en",
                                    "value": "What would you like to convert currency to?"
                                }
                            ],
                            "isList": false
                        }
                    ],
                    "intentName": "3_search_what_exchange",
                    "intentId": "855c090b-00b3-4cd9-8c91-21a84466748d",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "nluResponseTime": 90
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "Webhook will return CAD converted into USD."
                        },
                        {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "Webhook will return CAD converted into USD."
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success"
            },
            "sessionId": "1509894817541"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    //
    it('handleSearchWhatMortgageCalculatorMonthlyPayment ', (done) => {
        let sendval: {} = {
            "id": "13e83676-570d-44c4-924b-6e5a23d7ffae",
            "timestamp": "2017-11-06T05:40:35.761Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "1 year",
                "action": "find.how.mortgages.calculate.monthlyPayment",
                "actionIncomplete": false,
                "parameters": {
                    "interestRate": 8,
                    "loanAmount": 100,
                    "loanDuration": "1 year"
                },
                "contexts": [
                    {
                        "name": "calculate_monthly_payments",
                        "parameters": {
                            "interestRate": 8,
                            "loanDuration": "1 year",
                            "loanDuration.original": "1 year",
                            "loanAmount.original": "100 USD",
                            "loanAmount": 100,
                            "interestRate.original": "8%"
                        },
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "cfd2b147-e933-4117-aae3-f1da94952f02",
                    "webhookUsed": "false",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "6_find_how_mortgages_calculate_monthlyPayment"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 1 year to the webhook."
                        },
                        {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 1 year to the webhook."
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success"
            },
            "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    it('handleSearchWhatMortgageCalculatorRemainingPayment ', (done) => {
        let sendval: {} = {
            "id": "547ac4f3-348e-416b-a93c-d89b99096c1c",
            "timestamp": "2017-11-06T05:58:39.473Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "9",
                "action": "find.how.mortgages.calculate.remainingLoan",
                "actionIncomplete": false,
                "parameters": {
                    "interestRate": "8",
                    "loanAmount": 100,
                    "loanDuration": 16,
                    "numberPayments": 9
                },
                "contexts": [
                    {
                        "name": "calculate_remaining_loan",
                        "parameters": {
                            "interestRate": "8",
                            "loanDuration": 16,
                            "numberPayments": 9,
                            "loanDuration.original": "16",
                            "loanAmount.original": "100 USD",
                            "numberPayments.original": "9",
                            "loanAmount": 100,
                            "interestRate.original": "8"
                        },
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "401df498-6121-430f-b0be-b728b98df292",
                    "webhookUsed": "false",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "6_find_how_mortgages_calculate_remainingLoan"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                        },
                        {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success"
            },
            "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    //
    it('handleDirectRRSP', (done) => {
        let sendval: {} = {
            "id": "e2fefb5b-55e2-47c9-8d6e-cebf4ee6cb70",
            "timestamp": "2017-11-21T18:13:11.486Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "RRSP",
                "action": "direct.rrsp",
                "actionIncomplete": false,
                "parameters": {
                    "rrsp": "rrsp"
                },
                "contexts": [
                    {
                        "name": "6_find_what_mortgages_preapproval_dialog_context",
                        "parameters": {
                            "promotion_code.original": "",
                            "mortgage_type.original": "rrsp",
                            "email.original": "",
                            "co-applicant.original": "",
                            "promotion_code": "",
                            "rrsp": "rrsp",
                            "last_name": "",
                            "mortgage_type": "rrsp",
                            "phone_num.original": "",
                            "preferred_time": "",
                            "rrsp.original": "RRSP",
                            "co-applicant": "",
                            "last_name.original": "",
                            "first_name.original": "",
                            "preferred_time.original": "",
                            "phone_num": "",
                            "preferred_language.original": "",
                            "first_name": "",
                            "preferred_language": "",
                            "email": ""
                        },
                        "lifespan": 1
                    },
                    {
                        "name": "rrsp",
                        "parameters": {
                            "rrsp.original": "RRSP",
                            "rrsp": "rrsp"
                        },
                        "lifespan": 2
                    },
                    {
                        "name": "a2444740-3aca-4bee-add6-bf4f4d369641_id_dialog_context",
                        "parameters": {
                            "promotion_code.original": "",
                            "mortgage_type.original": "rrsp",
                            "email.original": "",
                            "co-applicant.original": "",
                            "promotion_code": "",
                            "rrsp": "rrsp",
                            "last_name": "",
                            "mortgage_type": "rrsp",
                            "phone_num.original": "",
                            "preferred_time": "",
                            "rrsp.original": "RRSP",
                            "co-applicant": "",
                            "last_name.original": "",
                            "first_name.original": "",
                            "preferred_time.original": "",
                            "phone_num": "",
                            "preferred_language.original": "",
                            "first_name": "",
                            "preferred_language": "",
                            "email": ""
                        },
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "96e4d25f-9db8-40cc-85f9-0a573929bcbd",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "00_direct_RRSP"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": ""
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 0.8330846317418222
            },
            "status": {
                "code": 200,
                "errorType": "success",
                "webhookTimedOut": false
            },
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    it('handleApplyRRSP ', (done) => {
        let sendval: {} = {
            "id": "206a5c35-369e-4367-b70b-f0b88e21a3d4",
            "timestamp": "2017-11-21T18:25:17.74Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "open rrsp account",
                "action": "find.how.apply.rrsp",
                "actionIncomplete": false,
                "parameters": {
                    "rrsp": "rrsp"
                },
                "contexts": [
                    {
                        "name": "self-directed",
                        "parameters": {
                            "rrsp.original": "rrsp",
                            "rrsp": "rrsp"
                        },
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "69aaadf9-f404-409a-b4d6-feb1d9d96ec4",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "2_find_how_apply_rrsp_rrsp"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "What you need before you start the online application for a self-directed RRSP brokerage account:\n\nSocial Insurance Number\nTwo pieces of valid identification\nBank account information (transit, institution number, account number and bank address)\nSpouse or common-law partner's employment information\n\nWould you like an agent to contact you in order to apply?"
                        },
                        {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "What you need before you start the online application for a self-directed RRSP brokerage account:\n\nSocial Insurance Number\nTwo pieces of valid identification\nBank account information (transit, institution number, account number and bank address)\nSpouse or common-law partner's employment information\n\nWould you like an agent to contact you in order to apply?"
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success",
                "webhookTimedOut": false
            },
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    it('handleRRSPBenefits ', (done) => {
        let sendval: {} = {
            "id": "5628c665-8fbf-44d1-b1ec-c26b68b1e60b",
            "timestamp": "2017-11-21T18:27:56.867Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "benefit",
                "action": "find.what.rrsp.benefits",
                "actionIncomplete": false,
                "parameters": {
                    "rrsp": ""
                },
                "contexts": [
                    {
                        "name": "rrsp",
                        "parameters": {
                            "rrsp.original": "",
                            "rrsp": ""
                        },
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "af44ffdf-99e7-4768-9184-90171be03263",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "2_find_what_rrspBenefits"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "1 Pay less income tax. Your contribution is deducted directly from your current income, giving you  immediate tax savings.\n\n2 Build your wealth faster. When you contribute regularly throughout the year, you take advantage of the \npower of compound interest. And since income earned within your RRSP is not taxed, your investment     grows even more quickly!\n\n3  Defer your taxes to a lower rate. When you start to withdraw money from your RRSP investment your  \nincome will likely be lower and you’ll pay tax at a lower rate."
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success",
                "webhookTimedOut": false
            },
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    //
    it('handleDirectWsf ', (done) => {
        let sendval: {} = {
            "id": "af8fdfba-a489-4b67-ae7f-b3942ae06313",
            "timestamp": "2017-11-21T18:29:49.354Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "WSF",
                "action": "direct.wsf",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [
                    {
                        "name": "worldselectionfund",
                        "parameters": {},
                        "lifespan": 2
                    }
                ],
                "metadata": {
                    "intentId": "0860198b-b2ef-43dc-a83f-5f1cc36e5307",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "00_directWSF"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "Prepare for your financial future with HSBC World Selection® Portfolio. \n\nThis premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.\n\nWould you like to find out if you are eligible? \nThe advantages of the World Selection Fund? \nOr would you like more information first?"
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success",
                "webhookTimedOut": false
            },
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    it('handleEligibilityWSF ', (done) => {
        let sendval: {} = {
            "id": "0e35a04b-ac9b-4590-a42f-3dbf00f29f31",
            "timestamp": "2017-11-21T18:31:27.888Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "eligible",
                "action": "find.what.wsf.eligible",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [
                    {
                        "name": "worldselectionfund",
                        "parameters": {},
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "c318e7fd-6bcb-47dd-b2c2-84677e2132af",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "4_find_what_WorldSelection1_eligibility"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "In order to be eligible, you will need:\n\n\nA Minimum initial investment of $50,000...\nA Subsequent lump-sum investments from $500...\nTo Contribute from $250 in a regular savings plan\"\n\nWould you like to find out more? Or would you like to return to main menu?"
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success",
                "webhookTimedOut": false
            },
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    it('handleWsfMore ', (done) => {
        let sendval: {} = {
            "id": "0acadc84-78dc-480a-acb5-2b21a06582fa",
            "timestamp": "2017-11-21T18:33:22.854Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "More info",
                "action": "find.what.wsf.more",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [
                    {
                        "name": "worldselectionfund",
                        "parameters": {},
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "b952d2ff-ad65-4827-85f3-417752cf0830",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "4_find_what_WorldSelection1_moreInfo"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "\"Every investor has different goals, attitudes towards risk, and amounts to invest.\" \n\nThese can influence how you invest. Most people tend to fall into one of these investor types:\n\nConservative\nModerate Conservative\nBalanced\nGrowth\nAggressive Growth\n\nWould you like to find out more about the different investor types or would you like to..."
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success",
                "webhookTimedOut": false
            },
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });

    //
    it('handleBooking ', (done) => {
        let sendval: {} = {
            "originalRequest": {
                "source": "google",
                "version": "2",
                "data": {
                    "isInSandbox": true,
                    "surface": {
                        "capabilities": [
                            {
                                "name": "actions.capability.AUDIO_OUTPUT"
                            },
                            {
                                "name": "actions.capability.SCREEN_OUTPUT"
                            }
                        ]
                    },
                    "inputs": [
                        {
                            "rawInputs": [
                                {
                                    "query": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                                    "inputType": "KEYBOARD"
                                }
                            ],
                            "arguments": [
                                {
                                    "rawText": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                                    "textValue": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                                    "name": "text"
                                }
                            ],
                            "intent": "actions.intent.TEXT"
                        }
                    ],
                    "user": {
                        "locale": "en-US",
                        "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                    },
                    "conversation": {
                        "conversationId": "1509894817541",
                        "type": "ACTIVE",
                        "conversationToken": "[]"
                    },
                    "availableSurfaces": [
                        {
                            "capabilities": [
                                {
                                    "name": "actions.capability.AUDIO_OUTPUT"
                                },
                                {
                                    "name": "actions.capability.SCREEN_OUTPUT"
                                }
                            ]
                        }
                    ]
                }
            },
            "id": "cab2ae47-c008-452d-9bc8-cd0c3d9385f8",
            "timestamp": "2017-11-05T15:17:02.914Z",
            "lang": "en-us",
            "result": {
                "source": "agent",
                "resolvedQuery": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                "speech": "",
                "action": "book.appointment",
                "actionIncomplete": false,
                "parameters": {
                    "contact_method": "phone",
                    "last_name": "Paul",
                    "phone_number": "5325123",
                    "first_name": "John",
                    "email": [
                        "ws_12345@yahoo.com"
                    ],
                    "further_detail": "no detail"
                },
                "contexts": [
                    {
                        "name": "actions_capability_screen_output",
                        "parameters": {
                            "email.original": "ws_12345@yahoo.com",
                            "contact_method": "phone",
                            "contact_method.original": "phone",
                            "last_name.original": "Paul",
                            "first_name.original": "John",
                            "phone_number.original": "5325123",
                            "last_name": "Paul",
                            "phone_number": "5325123",
                            "first_name": "John",
                            "further_detail": "no detail",
                            "email": [
                                "ws_12345@yahoo.com"
                            ],
                            "further_detail.original": "no detail"
                        },
                        "lifespan": 0
                    },
                    {
                        "name": "actions_capability_audio_output",
                        "parameters": {
                            "email.original": "ws_12345@yahoo.com",
                            "contact_method": "phone",
                            "contact_method.original": "phone",
                            "last_name.original": "Paul",
                            "first_name.original": "John",
                            "phone_number.original": "5325123",
                            "last_name": "Paul",
                            "phone_number": "5325123",
                            "first_name": "John",
                            "further_detail": "no detail",
                            "email": [
                                "ws_12345@yahoo.com"
                            ],
                            "further_detail.original": "no detail"
                        },
                        "lifespan": 0
                    },
                    {
                        "name": "google_assistant_input_type_keyboard",
                        "parameters": {
                            "email.original": "ws_12345@yahoo.com",
                            "contact_method": "phone",
                            "contact_method.original": "phone",
                            "last_name.original": "Paul",
                            "first_name.original": "John",
                            "phone_number.original": "5325123",
                            "last_name": "Paul",
                            "phone_number": "5325123",
                            "first_name": "John",
                            "further_detail": "no detail",
                            "email": [
                                "ws_12345@yahoo.com"
                            ],
                            "further_detail.original": "no detail"
                        },
                        "lifespan": 0
                    }
                ],
                "metadata": {
                    "matchedParameters": [
                        {
                            "required": true,
                            "dataType": "@sys.given-name",
                            "name": "first_name",
                            "value": "$first_name",
                            "prompts": [
                                {
                                    "lang": "en",
                                    "value": "Can I please get your first name?"
                                }
                            ],
                            "isList": false
                        },
                        {
                            "required": true,
                            "dataType": "@sys.last-name",
                            "name": "last_name",
                            "value": "$last_name",
                            "prompts": [
                                {
                                    "lang": "en",
                                    "value": "And your last name, please?"
                                }
                            ],
                            "isList": false
                        },
                        {
                            "required": true,
                            "dataType": "@sys.email",
                            "name": "email",
                            "value": "$email",
                            "prompts": [
                                {
                                    "lang": "en",
                                    "value": "Could I please get your email?"
                                }
                            ],
                            "isList": true
                        },
                        {
                            "required": true,
                            "dataType": "@sys.phone-number",
                            "name": "phone_number",
                            "value": "$phone_number",
                            "prompts": [
                                {
                                    "lang": "en",
                                    "value": "Could I please get your phone number?"
                                }
                            ],
                            "isList": false
                        },
                        {
                            "required": true,
                            "dataType": "@sys.any",
                            "name": "contact_method",
                            "value": "$contact_method",
                            "prompts": [
                                {
                                    "lang": "en",
                                    "value": "How would you like us to contact you? By phone or by email?"
                                }
                            ],
                            "isList": false
                        },
                        {
                            "required": true,
                            "dataType": "@sys.any",
                            "name": "further_detail",
                            "value": "$further_detail",
                            "prompts": [
                                {
                                    "lang": "en",
                                    "value": "Is there any other information you would like to provide for us?"
                                }
                            ],
                            "isList": false
                        }
                    ],
                    "intentName": "00_direct_booking",
                    "intentId": "eb7e6a28-8723-4124-8210-578d2394ff3c",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "nluResponseTime": 58
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success"
            },
            "sessionId": "1509894817541"
        };
        chai.request(server)
            .post('/dialogflow')
            .auth(user,pass)
            .send(sendval)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('speech');
                res.body.speech.should.be.a('string');
                res.body.should.have.property('displayText');
                res.body.displayText.should.be.a('string');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.should.have.property('contextOut');
                res.body.contextOut.should.be.a('array');
                res.body.should.have.property('source');
                res.body.source.should.be.a('string');
                done();
            });
    });





});