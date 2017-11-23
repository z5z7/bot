import {WsfFunc} from "../../src/wsfFunc";

import * as mocha from  'mocha';


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Wsf Test Script', () => {


    describe('handleDirectWsf', () => {

        it("function returns given the right request", function () {
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

            return WsfFunc.handleDirectWsf(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};

            return WsfFunc.handleDirectWsf(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
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

    describe('handleEligibilityWSF', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "76288a23-82af-4da9-8259-bc18aaf3eea5",
                "timestamp": "2017-11-22T22:07:46.236Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "eligibility",
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
                        "webhookUsed": "false",
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
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "In order to be eligible, you will need:\n\nA Minimum initial investment of $50,000...\nA Subsequent lump-sum investments from $500...\nTo Contribute from $250 in a regular savings plan\"\n\nWould you like to find out more? Or would you like to return to main menu?",
                                "displayText": "In order to be eligible, you will need:\n\nA Minimum initial investment of $50,000...\nA Subsequent lump-sum investments from $500...\nTo Contribute from $250 in a regular savings plan\"\n\nWould you like to find out more? Or would you like to return to main menu?"
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
            return WsfFunc.handleEligibilityWSF(sendval).then(function (response) {
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
            return WsfFunc.handleEligibilityWSF(sendval).then(function (response) {
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

    describe('handleWsfMore', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "eb425a35-8b3a-4718-b4d8-c22144f25c1d",
                "timestamp": "2017-11-23T18:08:43.159Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "more",
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
                        "webhookUsed": "false",
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
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "\"Every investor has different goals, attitudes towards risk, and amounts to invest.\" \n\nThese can influence how you invest. Most people tend to fall into one of these investor types:\n\nConservative\nModerate Conservative\nBalanced\nGrowth\nAggressive Growth\n\nWould you like to find out more about the different investor types or would you like to...",
                                "displayText": "\"Every investor has different goals, attitudes towards risk, and amounts to invest.\" \n\nThese can influence how you invest. Most people tend to fall into one of these investor types:\n\nConservative\nModerate Conservative\nBalanced\nGrowth\nAggressive Growth\n\nWould you like to find out more about the different investor types or would you like to..."
                            },
                            {
                                "type": 0,
                                "speech": ""
                            }
                        ]
                    },
                    "score": 0.5899999737739563
                },
                "status": {
                    "code": 200,
                    "errorType": "success",
                    "webhookTimedOut": false
                },
                "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
            };
            return WsfFunc.handleWsfMore(sendval).then(function (response) {
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
            return WsfFunc.handleWsfMore(sendval).then(function (response) {
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

    describe('handleWsfAdvantages', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "d9357b4f-6265-49fc-8b2a-12919f90ee34",
                "timestamp": "2017-11-22T22:22:20.647Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "advantages",
                    "action": "find.what.wsf.advantages",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [],
                    "metadata": {
                        "intentId": "896c7750-b250-4a7a-b481-aed6086220f4",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "4_find_what_WorldSelectionAdvantages"
                    },
                    "fulfillment": {
                        "speech": "Would you like to find out if you are eligible? Or would you like to hear more information about World Selection Funds?",
                        "messages": [
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "1.Global investment opportunities\nYour portfolio includes investment opportunities identified by professional investment managers who have insight into the regions and markets in which they invest.",
                                "displayText": "1.Global investment opportunities\nYour portfolio includes investment opportunities identified by professional investment managers who have insight into the regions and markets in which they invest."
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "2. Broad diversification\nGain exposure to a wide range of geographic regions, asset classes and investment managers to ensure you can benefit from a broadly diversified investment portfolio.",
                                "displayText": "2. Broad diversification\nGain exposure to a wide range of geographic regions, asset classes and investment managers to ensure you can benefit from a broadly diversified investment portfolio."
                            },
                            {
                                "type": "basic_card",
                                "platform": "google",
                                "formattedText": "3. Regular monitoring\nOur portfolio managers at HSBC monitor world markets and when applicable adjusts and rebalances your portfolio in order to:\nTake advantage of changing market conditions\nEnsure portfolios remain aligned with their long-term objectives",
                                "buttons": []
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "1.Global investment opportunities\nYour portfolio includes investment opportunities identified by professional investment managers who have insight into the regions and markets in which they invest."
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "2. Broad diversification\nGain exposure to a wide range of geographic regions, asset classes and investment managers to ensure you can benefit from a broadly diversified investment portfolio."
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "3. Regular monitoring\nOur portfolio managers at HSBC monitor world markets and when applicable adjusts and rebalances your portfolio in order to:\nTake advantage of changing market conditions\nEnsure portfolios remain aligned with their long-term objectives"
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Would you like to find out if you are eligible? Or would you like to hear more information about World Selection Funds?"
                            },
                            {
                                "type": 0,
                                "speech": "Return blurb about the excellence of the World Selection funds"
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
            return WsfFunc.handleWsfAdvantages(sendval).then(function (response) {
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
            return WsfFunc.handleWsfAdvantages(sendval).then(function (response) {
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

    describe('handleWsfNo', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "bd1adb6f-9c13-4439-94b9-85c99f8015b9",
                "timestamp": "2017-11-22T22:27:10.704Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "no",
                    "action": "find.what.wsf.no",
                    "actionIncomplete": false,
                    "parameters": {
                        "yes_no": "No"
                    },
                    "contexts": [
                        {
                            "name": "worldselectionfund",
                            "parameters": {
                                "yes_no": "No",
                                "yes_no.original": "no"
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "e6cafc6d-35aa-4f80-b5a5-8f02bbb13bed",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "4_find_what_WorldSelection1_no"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Ok. What would you like to ask about next? Or would you just like to return to the main menu?"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Ok. What would you like to ask about next? Or would you just like to return to the main menu?",
                                "displayText": "Ok. What would you like to ask about next? Or would you just like to return to the main menu?"
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
            return WsfFunc.handleWsfNo(sendval).then(function (response) {
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
            return WsfFunc.handleWsfNo(sendval).then(function (response) {
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