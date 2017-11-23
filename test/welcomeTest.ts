

import * as mocha from  'mocha';
import {Welcome} from "../src/welcomeFunc";


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Welcome Test Script', () => {

    describe('handleWelcome', () => {

        it("function return the right request", function () {
            let sendval: {} = {
                "id": "c6554496-e6e1-4551-9365-14017e77e41f",
                "timestamp": "2017-11-22T22:38:59.654Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "begin",
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
                        "messages": [
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Welcome to HSBC",
                                "subtitle": "The World's Local Bank",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/welcome_image_2.png",
                                "buttons": [
                                    {
                                        "text": "INFO",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Find an ATM",
                                "subtitle": "ATM Locations in the Lower Mainland.",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png",
                                "buttons": [
                                    {
                                        "text": "ATM",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "HSBC RRSPs",
                                "subtitle": "Plan for your future.",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/RRSP_golf.png",
                                "buttons": [
                                    {
                                        "text": "RRSP",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "HSBC Mortgages",
                                "subtitle": "Mortgages for the world you live in.",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/mortgage_00.png",
                                "buttons": [
                                    {
                                        "text": "Mortgage",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Become a Premier Customer",
                                "subtitle": "Where we take care of you",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/Premier_Customer.png",
                                "buttons": [
                                    {
                                        "text": "Premier",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "The World Selection Fund",
                                "subtitle": "Your gateway to a world of opportunity",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/WorldSelectionFund.png",
                                "buttons": [
                                    {
                                        "text": "WSF",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Exchange Rates",
                                "subtitle": "Find our rates for currency exchange",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/fxRates.png",
                                "buttons": [
                                    {
                                        "text": "Exchange",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Appointments",
                                "subtitle": "Book an appointment with an agent.",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/BookAppointment.png",
                                "buttons": [
                                    {
                                        "text": "Book",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "What shall we talk about today?",
                                "displayText": "What shall we talk about today?"
                            },
                            {
                                "type": "carousel_card",
                                "platform": "google",
                                "items": [
                                    {
                                        "optionInfo": {
                                            "key": "INFO",
                                            "synonyms": []
                                        },
                                        "title": "About Us",
                                        "description": "Find out more about HSBC",
                                        "image": {
                                            "url": "https://storage.googleapis.com/hello_init/chat_trial_images/welcome_image_2.png"
                                        }
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Mortgages",
                                            "synonyms": []
                                        },
                                        "title": "Mortgages",
                                        "description": "Find out more about HSBC mortgages, and how to apply.",
                                        "image": {
                                            "url": "https://storage.googleapis.com/hello_init/chat_trial_images/mortgage_00.png"
                                        }
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "ATM",
                                            "synonyms": []
                                        },
                                        "title": "ATM",
                                        "description": "Find an ATM in your city, or the one closest to you",
                                        "image": {
                                            "url": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
                                        }
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "RRSP",
                                            "synonyms": []
                                        },
                                        "title": "RRSP",
                                        "description": "Invest in your future. Find out more about the benefits to having an RRSP, and about how to apply",
                                        "image": {
                                            "url": "https://storage.googleapis.com/hello_init/chat_trial_images/RRSP_golf.png"
                                        }
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "WSF",
                                            "synonyms": []
                                        },
                                        "title": "World Selection Fund",
                                        "description": "Find out more about what the World Selection Fund can do for you.",
                                        "image": {
                                            "url": "https://storage.googleapis.com/hello_init/chat_trial_images/WorldSelectionFund.png"
                                        }
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Book",
                                            "synonyms": []
                                        },
                                        "title": "Book an appointment",
                                        "description": "Let an agent answer all of your questions today.",
                                        "image": {
                                            "url": "https://storage.googleapis.com/hello_init/chat_trial_images/BookAppointment.png"
                                        }
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "FX",
                                            "synonyms": []
                                        },
                                        "title": "Exchange Rates",
                                        "description": "Exchange your foreign currency today.",
                                        "image": {
                                            "url": "https://storage.googleapis.com/hello_init/chat_trial_images/fxRates.png"
                                        }
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Premier",
                                            "synonyms": []
                                        },
                                        "title": "Premier Customer",
                                        "description": "Find out how to become a Premier Customer today",
                                        "image": {
                                            "url": "https://storage.googleapis.com/hello_init/chat_trial_images/Premier_Customer.png"
                                        }
                                    }
                                ]
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
            return Welcome.handleWelcome(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function return given an empty request", function () {
            let sendval: {} = {};
            return Welcome.handleWelcome(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });
    });

    describe('handleAboutUs', () => {

        it("function return the right request", function () {
            let sendval: {} = {
                "id": "5b0e70c0-05aa-4966-a581-e4812d0d48b5",
                "timestamp": "2017-11-22T22:42:38.792Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "HSBC",
                    "action": "blurb.aboutUs",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [],
                    "metadata": {
                        "intentId": "30263838-aa2a-4da6-bd1f-28add54df055",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "0_blurb_aboutUs"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Some Info",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/logo.png",
                                "buttons": []
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Founded in 1865 to finance trade between Asia and the West, today HSBC is one of the world’s largest banking and financial services organizations serving around 38 million customers worldwide. Our aim is to be acknowledged as the world’s leading and most respected international bank.\n\nThroughout our history we have been where the growth is, connecting customers to opportunities. \n\nWe enable businesses to thrive and economies to prosper, helping people fulfil their hopes and dreams and realize their ambitions. \n\nThis is our role and purpose."
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Founded in 1865 to finance trade between Asia and the West, today HSBC is one of the world’s largest banking and financial services organizations serving around 38 million customers worldwide. Our aim is to be acknowledged as the world’s leading and most respected international bank.\n\nThroughout our history we have been where the growth is, connecting customers to opportunities. \n\nWe enable businesses to thrive and economies to prosper, helping people fulfil their hopes and dreams and realize their ambitions. \n\nThis is our role and purpose.",
                                "displayText": "Founded in 1865 to finance trade between Asia and the West, today HSBC is one of the world’s largest banking and financial services organizations serving around 38 million customers worldwide. Our aim is to be acknowledged as the world’s leading and most respected international bank.\n\nThroughout our history we have been where the growth is, connecting customers to opportunities. \n\nWe enable businesses to thrive and economies to prosper, helping people fulfil their hopes and dreams and realize their ambitions. \n\nThis is our role and purpose."
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
            return Welcome.handleAboutUs(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function return given an empty request", function () {
            let sendval: {} = {};
            return Welcome.handleAboutUs(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

    });
});