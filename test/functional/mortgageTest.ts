import * as mocha from  'mocha';
import {MortFunc} from "../../src/mortgageFunc";


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Mortgage Test Script', () => {

    describe('handleDirectMortgage', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "e1c13ae5-861c-449a-9df2-979e3a06490a",
                "timestamp": "2017-11-23T16:37:25.353Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "mortgage",
                    "action": "direct.mortgages",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [
                        {
                            "name": "mortgages",
                            "parameters": {},
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "40f1412a-41b2-4eb5-b1ac-b9f64a18adc6",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "00_direct_mortgage"
                    },
                    "fulfillment": {
                        "speech": "Would you like to use our mortgage calculator?",
                        "messages": [
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "What is it about mortgages you would like to check out?",
                                "displayText": "What is it about mortgages you would like to check out?"
                            },
                            {
                                "type": "suggestion_chips",
                                "platform": "google",
                                "suggestions": [
                                    {
                                        "title": "Mortgage Calculator"
                                    },
                                    {
                                        "title": "Mortgage Catalogue"
                                    },
                                    {
                                        "title": "Mortgage Pre-approval"
                                    }
                                ]
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "What is it about mortgages you would like to check out?"
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Mortgage Calculator",
                                "subtitle": "Find out what your monthly rate would be.",
                                "buttons": [
                                    {
                                        "text": "Calculator",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "HSBC Mortgages",
                                "subtitle": "Discover your HSBC mortgage options",
                                "buttons": [
                                    {
                                        "text": "Catalogue",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Mortgage Pre-approval",
                                "subtitle": "Find out if you are eligible for pre-approval",
                                "buttons": [
                                    {
                                        "text": "Pre-approval",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": 0,
                                "speech": "Would you like to use our mortgage calculator?"
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
            return MortFunc.handleDirectMortgage(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleDirectMortgage(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                console.log(response);
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

    describe('handleMortgagesCatalogue', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "936fab7f-47fb-42a9-bfc2-ceded2c71f73",
                "timestamp": "2017-11-23T16:47:13.644Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "Mortgage types",
                    "action": "find.what.mortgages.catalogue",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [
                        {
                            "name": "mortgages",
                            "parameters": {},
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "9297227e-306e-48a4-892b-e794989e1523",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "6_find_what_mortgages_catalogue"
                    },
                    "fulfillment": {
                        "speech": "These are the different mortgages available with us at HSBC. Follow each mortgage for more information to find what works best for you or contact a specialist. (Here we should have a card displaying 'HSBC Traditional Mortgage', 'HSBC Equity Power Mortgage', 'HSBC Smart Savers Mortgage' and a 'Contact a Specialist' where it'll display the contact info)",
                        "messages": [
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "HSBC Mortgages",
                                "subtitle": "Find the best mortgage for you",
                                "buttons": []
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "HSBC Traditional Mortgage",
                                "subtitle": "Ideal if you are a first-time homebuyer & have a limited down payment",
                                "buttons": []
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "HSBC Equity Power Mortgage",
                                "subtitle": "Use the equity you’ve built up in your home for important goals",
                                "buttons": []
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "HSBC Smart Savers Mortgage",
                                "subtitle": "Ideal if have enough funds in eligible  HSBC  accounts to reduce your mortgage rate",
                                "buttons": []
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "Contact a Specialist",
                                "subtitle": "Let an agent help you with your options",
                                "buttons": [
                                    {
                                        "text": "Book",
                                        "postback": ""
                                    }
                                ]
                            },
                            {
                                "type": "list_card",
                                "platform": "google",
                                "title": "At HSBC you have many mortgage options",
                                "items": [
                                    {
                                        "optionInfo": {
                                            "key": "Traditional",
                                            "synonyms": []
                                        },
                                        "title": "The HSBC Traditional Mortgage",
                                        "description": "Ideal if you are a first time buyer with limited down-payment options."
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Equity",
                                            "synonyms": []
                                        },
                                        "title": "The HSBC Equity Power Mortgage",
                                        "description": "Use the equity you’ve built up in your home for important goals"
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Smart",
                                            "synonyms": []
                                        },
                                        "title": "The HSBC Smart Savers Mortgage",
                                        "description": "Ideal if have enough funds in eligible  HSBC  accounts to reduce your mortgage rate"
                                    },
                                    {
                                        "optionInfo": {
                                            "key": "Book",
                                            "synonyms": []
                                        },
                                        "title": "Contact a Specialist",
                                        "description": "Let an agent help you navigate through your options"
                                    }
                                ]
                            },
                            {
                                "type": 0,
                                "speech": "These are the different mortgages available with us at HSBC. Follow each mortgage for more information to find what works best for you or contact a specialist. (Here we should have a card displaying 'HSBC Traditional Mortgage', 'HSBC Equity Power Mortgage', 'HSBC Smart Savers Mortgage' and a 'Contact a Specialist' where it'll display the contact info)"
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
            return MortFunc.handleMortgagesCatalogue(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleMortgagesCatalogue(sendval).then(function (response) {
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

    describe('handleMortgagesPreApproval', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "4d4b653c-bcd4-4720-84c9-45dd56dc3fcf",
                "timestamp": "2017-11-23T16:51:47.105Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "English",
                    "action": "find.what.mortgages.preApproval",
                    "actionIncomplete": false,
                    "parameters": {
                        "co-applicant": "No",
                        "email": "trail@gmail.com",
                        "first_name": "Josh",
                        "last_name": "Zhu",
                        "mortgage_type": "Premier Curstomer Mortgage",
                        "phone_num": "6087751234",
                        "preferred_language": "English",
                        "preferred_time": "Afternoon",
                        "promotion_code": "No"
                    },
                    "contexts": [
                        {
                            "name": "mortgage_preapproval",
                            "parameters": {
                                "promotion_code.original": "no",
                                "mortgage_type.original": "Premier Curstomer Mortgage",
                                "email.original": "trail@gmail.com",
                                "co-applicant.original": "no",
                                "promotion_code": "No",
                                "last_name": "Zhu",
                                "mortgage_type": "Premier Curstomer Mortgage",
                                "phone_num.original": "6087751234",
                                "preferred_time": "Afternoon",
                                "co-applicant": "No",
                                "last_name.original": "Zhu",
                                "first_name.original": "Josh",
                                "preferred_time.original": "Afternoon",
                                "phone_num": "6087751234",
                                "preferred_language.original": "English",
                                "first_name": "Josh",
                                "preferred_language": "English",
                                "email": "trail@gmail.com"
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "a2444740-3aca-4bee-add6-bf4f4d369641",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "6_find_what_mortgages_preApproval"
                    },
                    "fulfillment": {
                        "speech": "Here's some information on our pre-approval process: (here we'd display a card with links to preapproval information as well as to contact a specialist)",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Here's some information on our pre-approval process: (here we'd display a card with links to preapproval information as well as to contact a specialist)"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Here's some information on our pre-approval process: (here we'd display a card with links to preapproval information as well as to contact a specialist)",
                                "displayText": "Here's some information on our pre-approval process: (here we'd display a card with links to preapproval information as well as to contact a specialist)"
                            },
                            {
                                "type": 0,
                                "speech": "Here's some information on our pre-approval process: (here we'd display a card with links to preapproval information as well as to contact a specialist)"
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
            return MortFunc.handleMortgagesPreApproval(sendval).then(function (response) {
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

    describe('handleCalculateMortgage0', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "2161b369-602f-4f71-873f-82bf0d09e918",
                "timestamp": "2017-11-23T16:59:36.418Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "yes",
                    "action": "find.how.mortgages.calculate.0",
                    "actionIncomplete": false,
                    "parameters": {},
                    "contexts": [
                        {
                            "name": "calculate_mortgage",
                            "parameters": {},
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "827abe31-d4e1-43cc-a533-98e487597c85",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "6_find_how_mortgages_calculate_mortgage0"
                    },
                    "fulfillment": {
                        "speech": "Would you like to calculate your fixed monthly payment or your remaining loan balance?",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Let's start your calculation. Would you like to calculate your fixed monthly payment or your remaining loan balance?"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Let's start your calculation. Would you like to calculate your fixed monthly payment or your remaining loan balance?",
                                "displayText": "Let's start your calculation. Would you like to calculate your fixed monthly payment or your remaining loan balance?"
                            },
                            {
                                "type": 0,
                                "speech": "Would you like to calculate your fixed monthly payment or your remaining loan balance?"
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
            return MortFunc.handleCalculateMortgage0(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleCalculateMortgage0(sendval).then(function (response) {
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


    describe('handleMortgageTypeTraditional', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "dd37c50e-4b6b-4e1b-80f7-9fc590f3b215",
                "timestamp": "2017-11-23T17:06:06.523Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "traditional",
                    "action": "mortgage.what.tradMortgage",
                    "actionIncomplete": false,
                    "parameters": {
                        "ordinal": ""
                    },
                    "contexts": [
                        {
                            "name": "mortgages",
                            "parameters": {
                                "ordinal.original": "",
                                "ordinal": ""
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "0f9a9102-f01d-4e34-9479-b72d8436b4d3",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "0_blurb_Trad_Mortgage"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year. \n\nYou can also make a match a payment and miss one later\n\nAlready enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.\n\nEnjoy preferential interest rates as an HSBC Premier or HSBC Advance client",
                                "displayText": "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year. \n\nYou can also make a match a payment and miss one later\n\nAlready enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.\n\nEnjoy preferential interest rates as an HSBC Premier or HSBC Advance client"
                            },
                            {
                                "type": "suggestion_chips",
                                "platform": "google",
                                "suggestions": [
                                    {
                                        "title": "HSBC Premier"
                                    },
                                    {
                                        "title": "HSBC Advance"
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
            return MortFunc.handleMortgageTypeTraditional(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleMortgageTypeTraditional(sendval).then(function (response) {
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

    //no done

    describe('handleMortgageTypeEquityPower', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "dd37c50e-4b6b-4e1b-80f7-9fc590f3b215",
                "timestamp": "2017-11-23T17:06:06.523Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "traditional",
                    "action": "mortgage.what.equityPower",
                    "actionIncomplete": false,
                    "parameters": {
                        "ordinal": ""
                    },
                    "contexts": [
                        {
                            "name": "mortgages",
                            "parameters": {
                                "ordinal.original": "",
                                "ordinal": ""
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "0f9a9102-f01d-4e34-9479-b72d8436b4d3",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "0_blurb_Trad_Mortgage"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year. \n\nYou can also make a match a payment and miss one later\n\nAlready enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.\n\nEnjoy preferential interest rates as an HSBC Premier or HSBC Advance client",
                                "displayText": "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year. \n\nYou can also make a match a payment and miss one later\n\nAlready enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.\n\nEnjoy preferential interest rates as an HSBC Premier or HSBC Advance client"
                            },
                            {
                                "type": "suggestion_chips",
                                "platform": "google",
                                "suggestions": [
                                    {
                                        "title": "HSBC Premier"
                                    },
                                    {
                                        "title": "HSBC Advance"
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
            return MortFunc.handleMortgageTypeEquityPower(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleMortgageTypeEquityPower(sendval).then(function (response) {
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

    describe('handleMortgageTypeSmartSaver', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "dd37c50e-4b6b-4e1b-80f7-9fc590f3b215",
                "timestamp": "2017-11-23T17:06:06.523Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "traditional",
                    "action": "mortgage.what.smartSaver",
                    "actionIncomplete": false,
                    "parameters": {
                        "ordinal": ""
                    },
                    "contexts": [
                        {
                            "name": "mortgages",
                            "parameters": {
                                "ordinal.original": "",
                                "ordinal": ""
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "0f9a9102-f01d-4e34-9479-b72d8436b4d3",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "0_blurb_Trad_Mortgage"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year. \n\nYou can also make a match a payment and miss one later\n\nAlready enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.\n\nEnjoy preferential interest rates as an HSBC Premier or HSBC Advance client",
                                "displayText": "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year. \n\nYou can also make a match a payment and miss one later\n\nAlready enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.\n\nEnjoy preferential interest rates as an HSBC Premier or HSBC Advance client"
                            },
                            {
                                "type": "suggestion_chips",
                                "platform": "google",
                                "suggestions": [
                                    {
                                        "title": "HSBC Premier"
                                    },
                                    {
                                        "title": "HSBC Advance"
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
            return MortFunc.handleMortgageTypeSmartSaver(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleMortgageTypeSmartSaver(sendval).then(function (response) {
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

    describe('handleMortgageRateSpecialOfferAdvance', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "6099eb36-f763-44ee-9ee8-5d227a870954",
                "timestamp": "2017-11-23T17:32:10.036Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "advance",
                    "action": "mortgageRate.specialOffer.advance",
                    "actionIncomplete": false,
                    "parameters": {
                        "specialOffer": "advance"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "aa1392c9-e3c9-4732-879d-696fdc720a21",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "0_blurb_mortgageRate_specialOffer_customerType_Advance"
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
            return MortFunc.handleMortgageRateSpecialOfferAdvance(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleMortgageRateSpecialOfferAdvance(sendval).then(function (response) {
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

    describe('handleMortgageRateSpecialOfferPremier', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "dd16e754-f65b-475c-81c9-2d2e49ab94fa",
                "timestamp": "2017-11-23T17:33:46.159Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "premier",
                    "action": "mortgageRate.specialOffer.premier",
                    "actionIncomplete": false,
                    "parameters": {
                        "specialOffer": "premier"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "9c3e7682-33d3-4b31-84d7-6b4c49919f0f",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "0_blurb_mortgageRate_specialOffer_customerType_Premier"
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
            return MortFunc.handleMortgageRateSpecialOfferPremier(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleMortgageRateSpecialOfferPremier(sendval).then(function (response) {
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

    describe('handleMortgageRateSpecialOfferPersonalRates', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                "id": "be8badcd-ad4a-4691-8bfd-dc99159529f9",
                "timestamp": "2017-11-23T17:35:38.107Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "personal",
                    "action": "mortgageRate.specialOffer.personalRates",
                    "actionIncomplete": false,
                    "parameters": {
                        "specialOffer": "personalRates"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "9385a003-8faf-422d-9168-c1b1833ec57b",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "0_blurb_mortgageRate_specialOffer_personalRates"
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
            return MortFunc.handleMortgageRateSpecialOfferPersonalRates(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleMortgageRateSpecialOfferPersonalRates(sendval).then(function (response) {
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

    describe('handleMortgageRateSpecialOfferSmartSaver', () => {

        it("function returns given an empty request", function () {
            let sendval: {} = {
                "id": "50d5edec-9cf0-4b60-bd2f-76c8a6385660",
                "timestamp": "2017-11-23T17:36:43.831Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "smart",
                    "action": "mortgageRate.specialOffer.smartSaver",
                    "actionIncomplete": false,
                    "parameters": {
                        "specialOffer": "smartSaver"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "8885698e-5aa2-4637-bf65-b0bdb36ee2c8",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "0_blurb_mortgageRate_specialOffer_smartSaver"
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
            return MortFunc.handleMortgageRateSpecialOfferSmartSaver(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {};
            return MortFunc.handleMortgageRateSpecialOfferSmartSaver(sendval).then(function (response) {
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