import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

export namespace Fxfunc {

    export function handleFindWhatExchangeRate(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // call backend to get all the FX rates name available

            if (!req.body.result) {
                reject("invalid request");

            }

            //roundabout way currently use

            client.xratesGet().then(result => {
                let response = result.response;

                let currencies = result.body.currencies;

                //console.log(currencies);

                //let i;
                //let len = currencies.length;
                //let Rarray = [];

                //for (i = 0; i < len; i++) {
                //    Rarray.push(currencies[i].code);
                //}

                function ratehelper (cur: any) : Promise<any> { // do the data adding here then use prom.all with answers inside then? adress+shortname
                    return new Promise(function (fulfill, reject) {
                        //console.log(cur);
                        client.xratesFromGet(cur).then(result => {
                            //console.log(result.body.rates);
                            let Parray = [];
                            let j;
                            let len2 = result.body.rates.length;
                            // console.log(result.body.rates.length);
                            for (j = 0; j < len2; j++) {
                                // console.log(result.body.rates[j]);
                                let str0 = cur;
                                // "to" + result.body.ExchangeRateInfo.rates[j].code +
                                // "rate for buy is" + result.body.ExchangeRateInfo.rates[j].buy.toString();
                                let str1 = str0.concat(" to ", result.body.rates[j].code," rate for buy is ", result.body.rates[j].buy.toString());
                                let str2 = str0.concat(" to ", result.body.rates[j].code," rate for sell is ", result.body.rates[j].sell.toString());
                                // "to" + result.body.ExchangeRateInfo.rates[j].code + "rate for sell is" + result.body.ExchangeRateInfo.rates[j].sell.toString();
                                //console.log(result.body.rates[j].code);
                                Parray.push(str1);
                                Parray.push(str2);
                            }
                            //console.log(Parray);
                            fulfill(Parray);
                        }).catch(err => {
                            let Reject = [];
                            fulfill(Reject);
                        })
                    })
                }

                let i;
                let len = currencies.length;
                let Rarray = [];

                let rateProm : Promise<any>[] = [];
                for (i = 0; i < len; i++) {
                    // console.log(currencies[i].code);
                    rateProm.push(ratehelper(currencies[i].code));
                }

                // console.log(rateProm);

                Promise.all(rateProm).then(values => {
                    //console.log(values);
                    Rarray.push(values)
                    //console.log(Rarray);
                    let text = Rarray.join('\n');
                    //text = text.replace(/\\n/g, '\n');
                    //console.log(text);
                    const result1: FulfillmentResponse = {
                        speech:text,
                        //"Returns list of rates.        currency : rates     \n" +
                        //"no parameters as this is a find, rather than a search, function and so you are returning ALL rates as a list",
                        displayText:text,
                        //"Returns list of rates.        currency : rates     \n" +
                        //"no parameters as this is a find, rather than a search, function and so you are returning ALL rates as a list",
                        data: {},
                        contextOut: [],
                        source: ""
                    };

                    resolve(result1);


                }).catch(reason => {
                    const return2: FulfillmentResponse = {
                        speech: "Something went wrong at our backend",
                        displayText: "Something went wrong at our backend",
                        data: {},
                        contextOut: [],
                        source: ""
                    };

                    resolve(return2);
                });

            }).catch(err => {
                //console.log(err.response);
                //console.log(err.body);
                const return2: FulfillmentResponse = {
                    speech: "Something went wrong at our backend",
                    displayText: "Something went wrong at our backend",
                    data: {},
                    contextOut: [],
                    source: ""
                };

                resolve(return2);
            });

        });

    }

    export function handleSearchWhatExchangeRate(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub

            if (!req.body.result) {
                reject("invalid request");

            }

            let currency_from = req.body.result.parameters.currency_from;
            let currency_into = req.body.result.parameters.currency_into;
            let amount = req.body.result.parameters.amount;
            //console.log(amount);
            if (currency_from == "undefined") {
                currency_from = "CAD";
            }

            //console.log(currency_from);
            //console.log(currency_into);
            //console.log(amount);

            if (amount == "") {
                client.xratesFromToGet(currency_from,currency_into).then(result => {
                    // console.log(result.body);
                    let Rarray =[];
                    let response = result.response;

                    let bprice = result.body.buy;
                    let sprice = result.body.sell;

                    let str0 = currency_from;
                    // "to" + result.body.ExchangeRateInfo.rates[j].code +
                    // "rate for buy is" + result.body.ExchangeRateInfo.rates[j].buy.toString();
                    let str1 = str0.concat(" to ", currency_into," rate for buy is ", bprice.toString());
                    let str2 = str0.concat(" to ", currency_into," rate for sell is ", sprice.toString());

                    Rarray.push(str1);
                    Rarray.push(str2);

                    let text = Rarray.join('\n');

                    const result1: FulfillmentResponse = {
                        speech:text,
                        displayText:text,
                        data: {},
                        contextOut: [],
                        source: ""
                    };

                    resolve(result1);


                }).catch(err => {
                    const return2: FulfillmentResponse = {
                        speech: "Something went wrong at our backend",
                        displayText: "Something went wrong at our backend",
                        data: {},
                        contextOut: [],
                        source: ""
                    };

                    resolve(return2);
                });
            }

            else {

                client.xratesConvertGet(currency_from,currency_into,amount).then(result => {
                    let response = result.response;

                    let body = result.body;

                    // body now just return from and rates???
                    // shoud return FROM TO AMOUNT CONVERSION
                    // conversion {from :currency,to:currency, amount:number,conversion:number)


                    let conversion = result.body.conversion;
                    //console.log(result.body.conversion);
                    // putting in 80 as stub for now
                    if (typeof conversion == 'undefined') {
                        conversion = 100;
                    }
                    //console.log(body);

                    const return1: FulfillmentResponse = {
                        speech: conversion.toString(),
                        displayText: conversion.toString(),
                        data: {},
                        contextOut: [],
                        source: ""
                    };

                    resolve(return1);



                }).catch(err => {
                    //console.log(err.response);
                    //console.log(err.body);
                    const return2: FulfillmentResponse = {
                        speech: "Something went wrong at our backend",
                        displayText: "Something went wrong at our backend",
                        data: {},
                        contextOut: [],
                        source: ""
                    };

                    resolve(return2);
                });


            }



        });

    }
}