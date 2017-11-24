import * as dotenv from 'dotenv';
dotenv.config();
import {MortFunc} from "../../src/mortgageFunc";

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

describe('HSBC Service Mortgage Functions', () => {

    describe('handleCalculateMortgageMonthly', () => {
        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "8098415c-1c86-47ac-9890-836cdb4e244f",
                "timestamp": "2017-11-23T16:04:35.992Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "5",
                    "action": "find.how.mortgages.calculate.monthlyPayment",
                    "actionIncomplete": false,
                    "parameters": {
                        "interestRate": 3,
                        "loanAmount": 100000,
                        "loanDuration": "5"
                    },
                    "contexts": [
                        {
                            "name": "calculate_monthly_payments",
                            "parameters": {
                                "interestRate": 3,
                                "loanDuration": "5",
                                "loanDuration.original": "5",
                                "loanAmount.original": "100000",
                                "loanAmount": 100000,
                                "interestRate.original": "3%"
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "cfd2b147-e933-4117-aae3-f1da94952f02",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "6_find_how_mortgages_calculate_monthlyPayment"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 5 to the webhook."
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 5 to the webhook.\n\nWould you like to see our mortgage catalogue? Learn about our mortgage preapproval process? Or go back to main menu?",
                                "displayText": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 5 to the webhook.\n\nWould you like to see our mortgage catalogue? Learn about our mortgage preapproval process? Or go back to main menu?"
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
            return MortFunc.handleCalculateMortgageMonthly(sendval).then(function (response) {
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

    describe('handleCalculateRemaining', () => {
        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "b42db12f-3b90-4d84-a075-b5c021eddf98",
                "timestamp": "2017-11-23T16:23:54.454Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "10",
                    "action": "find.how.mortgages.calculate.remainingLoan",
                    "actionIncomplete": false,
                    "parameters": {
                        "interestRate": 3,
                        "loanAmount": 100000,
                        "loanDuration": "5",
                        "numberPayments": 10
                    },
                    "contexts": [
                        {
                            "name": "calculate_remaining_loan",
                            "parameters": {
                                "interestRate": 3,
                                "loanDuration": "5",
                                "numberPayments": 10,
                                "loanDuration.original": "5",
                                "loanAmount.original": "100000",
                                "numberPayments.original": "10",
                                "loanAmount": 100000,
                                "interestRate.original": "3"
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "401df498-6121-430f-b0be-b728b98df292",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "6_find_how_mortgages_calculate_remainingLoan"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "webhook with loanAmount: 100000 , interestRate: 3 , loanDuration: 5, and number of payments: $numberPayment"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "webhook with loanAmount: 100000 , interestRate: 3 , loanDuration: 5, and number of payments: $numberPayment\n\nWould you like to see our mortgage catalogue? Learn about our mortgage preapproval process? Or go back to main menu?",
                                "displayText": "webhook with loanAmount: 100000 , interestRate: 3 , loanDuration: 5, and number of payments: $numberPayment\n\nWould you like to see our mortgage catalogue? Learn about our mortgage preapproval process? Or go back to main menu?"
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
            return MortFunc.handleCalculateRemaining(sendval).then(function (response) {
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