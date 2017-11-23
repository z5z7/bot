import * as mocha from  'mocha';
import {Appointments} from "../../src/Appointments";

import * as dotenv from 'dotenv';
dotenv.config();

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Appointment Test Script', () => {

    describe('createBooking', () => {

        it("function return a fulfillment response with the right request", function () {
            let sendval: {} = {
                "id": "6e134223-5f71-4209-96f7-31b4ec486be4",
                "timestamp": "2017-11-23T15:30:21.261Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "mortgage deals",
                    "action": "book.appointment",
                    "actionIncomplete": false,
                    "parameters": {
                        "contact_email": "trial@gmail.com",
                        "contact_method": "phone, email",
                        "first_name": "Josh",
                        "further_detail": "mortgage deals",
                        "last_name": "Zhu",
                        "phone_number": "6087717789"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "06b42294-710d-4e9d-bb4c-7cdde756bf63",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "00_direct_booking"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Thanks Josh!\nAn agent will contact you by phone, email soon."
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Thanks Josh!\nAn agent will contact you by phone, email soon.",
                                "displayText": "Thanks Josh!\nAn agent will contact you by phone, email soon."
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
            return Appointments.createBooking(sendval).then(function (response) {

                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);

                // todo: update this to reflect new code
                // response.should.be.a('object');
                // response.should.have.property('speech');
                // response.speech.should.be.a('string');
                // response.should.have.property('displayText');
                // response.displayText.should.be.a('string');
                // response.should.have.property('data');
                // response.data.should.be.a('object');
                // response.should.have.property('contextOut');
                // response.contextOut.should.be.a('array');
                // response.should.have.property('source');
                // response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

    });
});