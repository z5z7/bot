import * as mocha from  'mocha';
import {Exchange} from "../src/Exchange";


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

describe('Exchange Test Script', () => {

    describe('findExchangeRate', () => {

        it("function return a fulfillment response with the right request", function () {
            let sendval: {} = {
                "id": "e4b66a67-cdb9-4512-9f17-967aef6ed495",
                "timestamp": "2017-11-23T14:04:20.925Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "exchange",
                    "action": "find.what.exchangeRate",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [],
                    "metadata": {
                        "intentId": "7f16dab5-b1a3-441f-9ebc-b0b774934617",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "3_find_what_exchange"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
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
                    "errorType": "success",
                    "webhookTimedOut": false
                },
                "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
            };
            return Exchange.findExchangeRate(sendval).then(function (response) {
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

    describe('searchWhatExchangeRate', () => {

        it("function return a fulfillment response with the all parameter", function () {
            let sendval: {} = {
                "id": "d9b201e7-ea0d-461b-8cd7-22e05e873659",
                "timestamp": "2017-11-23T14:36:37.989Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "convert 100 usd to cad",
                    "action": "search.what.exchangeRate",
                    "actionIncomplete": false,
                    "parameters": {
                        "amount": 100,
                        "currency_from": "USD",
                        "currency_into": "CAD"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "db8db15c-14f9-4b37-983a-a8513f582df3",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "3_search_what_exchange"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Webhook will return USD converted into CAD."
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {
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

        it("function return a fulfillment response with the only currency_from and into parameter", function () {
            let sendval: {} = {
                "id": "d54796c8-aa85-4f92-899d-c9bac2bd7312",
                "timestamp": "2017-11-23T14:43:41.154Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "GBP",
                    "action": "search.what.exchangeRate",
                    "actionIncomplete": false,
                    "parameters": {
                        "amount": "",
                        "currency_from": "CNY",
                        "currency_into": "GBP"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "db8db15c-14f9-4b37-983a-a8513f582df3",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "3_search_what_exchange"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Webhook will return CNY converted into GBP."
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {
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

        it("function return a fulfillment response with the only currency_into parameter", function () {
            let sendval: {} = {
                "id": "d54796c8-aa85-4f92-899d-c9bac2bd7312",
                "timestamp": "2017-11-23T14:43:41.154Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "GBP",
                    "action": "search.what.exchangeRate",
                    "actionIncomplete": false,
                    "parameters": {
                        "amount": "",
                        "currency_from": "",
                        "currency_into": "GBP"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "db8db15c-14f9-4b37-983a-a8513f582df3",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "3_search_what_exchange"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Webhook will return CNY converted into GBP."
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {
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

        it("function return a fulfillment response with negative amount parameter", function () {
            let sendval: {} = {
                "id": "d9b201e7-ea0d-461b-8cd7-22e05e873659",
                "timestamp": "2017-11-23T14:36:37.989Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "convert -100 usd to cad",
                    "action": "search.what.exchangeRate",
                    "actionIncomplete": false,
                    "parameters": {
                        "amount": -100,
                        "currency_from": "USD",
                        "currency_into": "CAD"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "db8db15c-14f9-4b37-983a-a8513f582df3",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "3_search_what_exchange"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Webhook will return USD converted into CAD."
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {
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

        it("function return a fulfillment response with invalid currency_from parameter", function () {
            let sendval: {} = {
                "id": "7cc392a7-159a-4d61-80f4-0c3bca4a1574",
                "timestamp": "2017-11-23T14:54:12.669Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "GBP",
                    "action": "search.what.exchangeRate",
                    "actionIncomplete": false,
                    "parameters": {
                        "amount": "",
                        "currency_from": "AAA",
                        "currency_into": "GBP"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "db8db15c-14f9-4b37-983a-a8513f582df3",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "3_search_what_exchange"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Webhook will return AAA converted into GBP."
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {
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