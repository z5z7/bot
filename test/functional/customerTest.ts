import * as mocha from  'mocha';
import {CustomerFunc} from '../../src/customerFunc'


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Customer Test Script', () => {

    describe('handleDirectAdvance', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "0758a586-e59e-46f5-85d2-903c56f9a8a8",
                "timestamp": "2017-11-22T23:56:12.562Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "advance",
                    "action": "direct.advance",
                    "actionIncomplete": false,
                    "parameters": {
                        "customer_type": ""
                    },
                    "contexts": [
                        {
                            "name": "advance",
                            "parameters": {
                                "customer_type": "",
                                "customer_type.original": ""
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "290ba19d-45d6-4fbe-a65d-c4ede549dd34",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "00_directAdvance"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "HSBC Advance offers comprehensive banking and investment services tailored to your financial needs.\nWould you like to find out more about:\nThe benefits of being a Advance Customer?\nOf How to apply?\nOf eligibility requirements?\nAbout Advance customer mortgage rates?"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "HSBC Advance offers comprehensive banking and investment services tailored to your financial needs.\nWould you like to find out more about:\nThe benefits of being a Advance Customer?\nOf How to apply?\nOf eligibility requirements?\nAbout Advance customer mortgage rates?",
                                "displayText": "HSBC Advance offers comprehensive banking and investment services tailored to your financial needs.\nWould you like to find out more about:\nThe benefits of being a Advance Customer?\nOf How to apply?\nOf eligibility requirements?\nAbout Advance customer mortgage rates?"
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
            return CustomerFunc.handleDirectAdvance(sendval).then(function (response) {
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
            return CustomerFunc.handleDirectAdvance(sendval).then(function (response) {
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

    describe('handleAdvanceBenefits', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "d2084609-50b0-4bec-a8fc-9720ae60e012",
                "timestamp": "2017-11-22T23:59:37.445Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "benefits",
                    "action": "search.what.advance.benefits",
                    "actionIncomplete": false,
                    "parameters": {
                        "customer_type": ""
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "12553897-5940-4055-890e-056bdda5db73",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "5_search_what_customer_Advance_benefits"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Advance Customer",
                                "subtitle": "Everyone is different, which is why we make the effort to understand your needs and how you like to bank. We offer you preferential rates with unique rewards and benefits to help you with your everyday banking, borrowing and investment needs - because we want to help you reach your individual goals.",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/advance_2017_asian_twins.jpg",
                                "buttons": []
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "If the total of all your personal HSBC Bank Canada residential mortgage(s) are greater than $150,000 you automatically qualify for HSBC Advance, including unlimited day-to-day banking"
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Our 20/20 Prepayment Option allows you the flexibility to prepay up to 20% of the original principal amount or increase payments by up to 20% annually"
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Use Points from your HSBC Advance MasterCard card to pay down your personal HSBC Bank Canada residential mortgage"
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Speak to a mortgage specialist at 1-866-609-4722"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Everyone is different, which is why we make the effort to understand your needs and how you like to bank. \n\nWe offer you preferential rates with unique rewards and benefits to help you with your everyday banking, borrowing and investment needs - because we want to help you reach your individual goals.\n\nSpeak to a mortgage specialist at 1-866-609-4722.",
                                "displayText": "Everyone is different, which is why we make the effort to understand your needs and how you like to bank. \n\nWe offer you preferential rates with unique rewards and benefits to help you with your everyday banking, borrowing and investment needs - because we want to help you reach your individual goals.\n\nSpeak to a mortgage specialist at 1-866-609-4722."
                            },
                            {
                                "type": 0,
                                "speech": ""
                            }
                        ]
                    },
                    "score": 0.7599999904632568
                },
                "status": {
                    "code": 200,
                    "errorType": "success",
                    "webhookTimedOut": false
                },
                "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
            };
            return CustomerFunc.handleAdvanceBenefits(sendval).then(function (response) {
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
            return CustomerFunc.handleAdvanceBenefits(sendval).then(function (response) {
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

    describe('handleDirectPremier', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "295faef9-1b07-4921-9ad1-79fe108bd7b8",
                "timestamp": "2017-11-23T00:04:03.772Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "premier",
                    "action": "direct.premier",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [
                        {
                            "name": "premiercustomer",
                            "parameters": {},
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "4c4b33ac-b5a7-4da4-91a8-e6d8596db96c",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "00_directPremier"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "HSBC Premier offers comprehensive banking and investment services tailored to your financial needs.\nWould you like to find out more about:\nThe benefits of being a Premier Customer?\nOf How to apply?\nOf eligibility requirements?\nAbout Premier customer mortgage rates?"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "HSBC Premier offers comprehensive banking and investment services tailored to your financial needs.\nWould you like to find out more about:\nThe benefits of being a Premier Customer?\nOf How to apply?\nOf eligibility requirements?\nAbout Premier customer mortgage rates?",
                                "displayText": "HSBC Premier offers comprehensive banking and investment services tailored to your financial needs.\nWould you like to find out more about:\nThe benefits of being a Premier Customer?\nOf How to apply?\nOf eligibility requirements?\nAbout Premier customer mortgage rates?"
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
            return CustomerFunc.handleDirectPremier(sendval).then(function (response) {
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
            return CustomerFunc.handleDirectPremier(sendval).then(function (response) {
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

    describe('handlePremierBenefits', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "994648a5-2a2d-4f0e-9bf3-b7f959720d56",
                "timestamp": "2017-11-23T00:09:49.97Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "benefit",
                    "action": "search.what.premier.benefits",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [],
                    "metadata": {
                        "intentId": "7a97e9eb-7e91-48c2-b4b0-59f633a3be14",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "5_search_what_Premier_benefits"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Your Relationship Manager\nA dedicated Premier Relationship Manager identifies a wealth strategy designed just for you.\n\nMeeting your needs\nOur Relationship Managers are recognized based on how well they provide their service and how well they meet your needs.\n\nAnytime, anywhere\nYour personal economy is always with you. So are we, providing support and services whenever and wherever you need us.\n\nPreferential Access\nAccess some of the most prestigious banking products, services and rewards that we have to offer.\n\nWould you like to learn if you are eligible? Or would you like to go back to main menu?",
                                "displayText": "Your Relationship Manager\nA dedicated Premier Relationship Manager identifies a wealth strategy designed just for you.\n\nMeeting your needs\nOur Relationship Managers are recognized based on how well they provide their service and how well they meet your needs.\n\nAnytime, anywhere\nYour personal economy is always with you. So are we, providing support and services whenever and wherever you need us.\n\nPreferential Access\nAccess some of the most prestigious banking products, services and rewards that we have to offer.\n\nWould you like to learn if you are eligible? Or would you like to go back to main menu?"
                            },
                            {
                                "type": "list_card",
                                "platform": "google",
                                "title": "Benefits of being a Premier Customer",
                                "items": [
                                    {
                                        "optionInfo": {
                                            "key": "Relationship Manager",
                                            "synonyms": []
                                        },
                                        "title": "Your Relationship Manager",
                                        "description": "A dedicated Premier Relationship Manager identifies a wealth strategy designed just for you."
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Meeting Needs",
                                            "synonyms": []
                                        },
                                        "title": "Meeting your needs",
                                        "description": "Our Relationship Managers are recognized based on how well they provide their service and how well they meet your needs."
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Constant Access",
                                            "synonyms": []
                                        },
                                        "title": "Anytime, anywhere",
                                        "description": "Your personal economy is always with you. So are we, providing support and services whenever and wherever you need us."
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Preferential Access",
                                            "synonyms": []
                                        },
                                        "title": "Preferential Access",
                                        "description": "Access some of the most prestigious banking products, services and rewards that we have to offer."
                                    }
                                ]
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
            return CustomerFunc.handlePremierBenefits(sendval).then(function (response) {
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
            return CustomerFunc.handlePremierBenefits(sendval).then(function (response) {
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

    describe('handlePremierApplication', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "994648a5-2a2d-4f0e-9bf3-b7f959720d56",
                "timestamp": "2017-11-23T00:09:49.97Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "benefit",
                    "action": "search.what.premier.benefits",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [],
                    "metadata": {
                        "intentId": "7a97e9eb-7e91-48c2-b4b0-59f633a3be14",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "5_search_what_Premier_benefits"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Your Relationship Manager\nA dedicated Premier Relationship Manager identifies a wealth strategy designed just for you.\n\nMeeting your needs\nOur Relationship Managers are recognized based on how well they provide their service and how well they meet your needs.\n\nAnytime, anywhere\nYour personal economy is always with you. So are we, providing support and services whenever and wherever you need us.\n\nPreferential Access\nAccess some of the most prestigious banking products, services and rewards that we have to offer.\n\nWould you like to learn if you are eligible? Or would you like to go back to main menu?",
                                "displayText": "Your Relationship Manager\nA dedicated Premier Relationship Manager identifies a wealth strategy designed just for you.\n\nMeeting your needs\nOur Relationship Managers are recognized based on how well they provide their service and how well they meet your needs.\n\nAnytime, anywhere\nYour personal economy is always with you. So are we, providing support and services whenever and wherever you need us.\n\nPreferential Access\nAccess some of the most prestigious banking products, services and rewards that we have to offer.\n\nWould you like to learn if you are eligible? Or would you like to go back to main menu?"
                            },
                            {
                                "type": "list_card",
                                "platform": "google",
                                "title": "Benefits of being a Premier Customer",
                                "items": [
                                    {
                                        "optionInfo": {
                                            "key": "Relationship Manager",
                                            "synonyms": []
                                        },
                                        "title": "Your Relationship Manager",
                                        "description": "A dedicated Premier Relationship Manager identifies a wealth strategy designed just for you."
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Meeting Needs",
                                            "synonyms": []
                                        },
                                        "title": "Meeting your needs",
                                        "description": "Our Relationship Managers are recognized based on how well they provide their service and how well they meet your needs."
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Constant Access",
                                            "synonyms": []
                                        },
                                        "title": "Anytime, anywhere",
                                        "description": "Your personal economy is always with you. So are we, providing support and services whenever and wherever you need us."
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Preferential Access",
                                            "synonyms": []
                                        },
                                        "title": "Preferential Access",
                                        "description": "Access some of the most prestigious banking products, services and rewards that we have to offer."
                                    }
                                ]
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
            return CustomerFunc.handlePremierApplication(sendval).then(function (response) {
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
            return CustomerFunc.handlePremierApplication(sendval).then(function (response) {
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

    describe('handlePremierEligibility', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "3ac8a776-b2c2-4f6a-af24-648e2aadceab",
                "timestamp": "2017-11-23T00:16:37.975Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "yes",
                    "action": "search.what.premier.eligible",
                    "actionIncomplete": false,
                    "parameters": {
                        "appointment": "Yes",
                        "min_balance": "No",
                        "qualified_other": "No"
                    },
                    "contexts": [
                        {
                            "name": "premiercustomer",
                            "parameters": {
                                "min_balance": "No",
                                "min_balance.original": "no",
                                "qualified_other.original": "no",
                                "qualified_other": "No",
                                "appointment": "Yes",
                                "appointment.original": "yes"
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "68345e70-eac6-4ba4-a927-2af003f0083e",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "5_search_what_Premier_eligibility"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Send min balance: No , qualified other: No , and appointment: Yes to the webhook."
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Send min balance: No , qualified other: No , and appointment: Yes to the webhook.",
                                "displayText": "Send min balance: No , qualified other: No , and appointment: Yes to the webhook."
                            },
                            {
                                "type": 0,
                                "speech": ""
                            }
                        ]
                    },
                    "score": 0.8733612609139993
                },
                "status": {
                    "code": 200,
                    "errorType": "success",
                    "webhookTimedOut": false
                },
                "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
            };
            return CustomerFunc.handlePremierEligibility(sendval).then(function (response) {
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
            return CustomerFunc.handlePremierEligibility(sendval).then(function (response) {
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