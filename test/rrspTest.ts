import * as mocha from  'mocha';
import {RrspFunc} from "../src/rrspFunc";


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Rrsp Test Script', () => {

    describe('handleDirectRRSP', () => {

        it("function return the right request", function () {
            let sendval: {} = {
                "id": "0a239e87-8d93-411f-a8a0-e9189a717c51",
                "timestamp": "2017-11-22T22:48:05.256Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "rrsp",
                    "action": "direct.rrsp",
                    "actionIncomplete": false,
                    "parameters": {
                        "rrsp": "rrsp"
                    },
                    "contexts": [
                        {
                            "name": "rrsp",
                            "parameters": {
                                "rrsp.original": "rrsp",
                                "rrsp": "rrsp"
                            },
                            "lifespan": 2
                        }
                    ],
                    "metadata": {
                        "intentId": "96e4d25f-9db8-40cc-85f9-0a573929bcbd",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "00_direct_RRSP"
                    },
                    "fulfillment": {
                        "speech": "Would you like to know more about the benefits of an RRSP, or would you rather learn about how to apply for a self-directed RRSP?",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "All right, and what would you like to talk about?\nWould you like to know more about the benefits of an RRSP, or would you rather learn about how to apply for a self-directed RRSP?"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "All right, and what would you like to talk about?\nWould you like to know more about the benefits of an RRSP, or would you rather learn about how to apply for a self-directed RRSP?",
                                "displayText": "All right, and what would you like to talk about?\nWould you like to know more about the benefits of an RRSP, or would you rather learn about how to apply for a self-directed RRSP?"
                            },
                            {
                                "type": 0,
                                "speech": "Would you like to know more about the benefits of an RRSP, or would you rather learn about how to apply for a self-directed RRSP?"
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
            return RrspFunc.handleDirectRRSP(sendval).then(function (response) {
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
            return RrspFunc.handleDirectRRSP(sendval).then(function (response) {
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

    describe('handleApplyRRSP', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "2ad3057a-a6fd-4047-a2bf-de89fec9ca8c",
                "timestamp": "2017-11-22T22:52:44.964Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "apply",
                    "action": "find.how.apply.rrsp",
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
                        },
                        {
                            "name": "self-directed",
                            "parameters": {
                                "rrsp.original": "",
                                "rrsp": ""
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
                                "type": 0,
                                "speech": ""
                            }
                        ]
                    },
                    "score": 0.7512499895834375
                },
                "status": {
                    "code": 200,
                    "errorType": "success",
                    "webhookTimedOut": false
                },
                "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
            };
            return RrspFunc.handleApplyRRSP(sendval).then(function (response) {
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
            return RrspFunc.handleApplyRRSP(sendval).then(function (response) {
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

    describe('handleRRSPBenefits', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "e1f7939c-c7bc-48e8-91ea-21c81f6059e2",
                "timestamp": "2017-11-22T23:01:08.557Z",
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
            return RrspFunc.handleRRSPBenefits(sendval).then(function (response) {
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
            return RrspFunc.handleRRSPBenefits(sendval).then(function (response) {
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

    describe('handleRRSPBrokerageYes', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "4bacedbe-b361-4128-878c-662fc9955d01",
                "timestamp": "2017-11-22T23:08:03.833Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "phone",
                    "action": "find.what.brokerageAccount.yes",
                    "actionIncomplete": false,
                    "parameters": {
                        "contactMethod": "phone",
                        "email": "erwqerwe@gmail.com",
                        "full_name": "Josh",
                        "phoneNumber": "32487913284"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "1400b0e7-aa19-4897-95f6-1b462988ed12",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "2_self-directed rrsp brokerage account_yes"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "All right Josh, we shall contact you by phone soon."
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "All right Josh, we shall contact you by phone soon.",
                                "displayText": "All right Josh, we shall contact you by phone soon."
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
            return RrspFunc.handleRRSPBrokerageYes(sendval).then(function (response) {
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
            return RrspFunc.handleRRSPBrokerageYes(sendval).then(function (response) {
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

    describe('handleRRSPBrokerageNo', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                "id": "afbcd03d-d470-4e9a-bd0b-e9ffb1bfbbf2",
                "timestamp": "2017-11-22T23:10:29.588Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "no",
                    "action": "find.what.brokerageAccount.no",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [],
                    "metadata": {
                        "intentId": "f92329f7-4799-4303-add9-2e49c75f71de",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "2_self-directed rrsp brokerage account_no"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "All right. What should we talk about next?\nMortgages\nWorld Selection Funds\nFind an ATM\nHow to become Premier customer\nThe benefits of RRSPs"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "All right. What should we talk about next?\nMortgages\nWorld Selection Funds\nFind an ATM\nHow to become Premier customer\nThe benefits of RRSPs",
                                "displayText": "All right. What should we talk about next?\nMortgages\nWorld Selection Funds\nFind an ATM\nHow to become Premier customer\nThe benefits of RRSPs"
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
            return RrspFunc.handleRRSPBrokerageNo(sendval).then(function (response) {
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
            return RrspFunc.handleRRSPBrokerageNo(sendval).then(function (response) {
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