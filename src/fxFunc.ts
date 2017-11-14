import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {Google_Components} from './google_ConversationComponents';

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

export namespace FxFunc {

    export function handleFindWhatExchangeRate(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            if (!req.body.result) {
                reject("invalid request");

            }

            //roundabout way currently use

            client.xratesGet().then(result => {
                let response = result.response;

                let currencies = result.body.currencies;


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

                    let answer: Promise<FulfillmentResponse> = Google_Components.returnSimple(text);
                    resolve(answer);



                }).catch(reason => {
                    let error: Promise<FulfillmentResponse> = Google_Components.returnSimple("Error Reason: " + reason);
                    resolve(error);

                });

            }).catch(err => {
                let error: Promise<FulfillmentResponse> = Google_Components.returnSimple("Error: " + err);
                resolve(error);

            });

        });

    }

    export function handleSearchWhatExchangeRate(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {
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
                    let response = req.body.result.response;

                    let bprice = req.body.result.body.buy;
                    let sprice = req.body.result.body.sell;

                    let str0 = currency_from;
                    // "to" + result.body.ExchangeRateInfo.rates[j].code +
                    // "rate for buy is" + result.body.ExchangeRateInfo.rates[j].buy.toString();
                    let str1 = str0.concat(" to ", currency_into," rate for buy is ", bprice.toString());
                    let str2 = str0.concat(" to ", currency_into," rate for sell is ", sprice.toString());

                    Rarray.push(str1);
                    Rarray.push(str2);

                    let text = Rarray.join('\n');

                    let answer: Promise<FulfillmentResponse> = Google_Components.returnSimple(text);
                    resolve(answer);


                }).catch(err => {
                    let error: Promise<FulfillmentResponse> = Google_Components.returnSimple("Error retrieving: " + err);
                    resolve(error);
                });
            }

            else {

                client.xratesConvertGet(currency_from,currency_into,amount).then(result => {
                    let response = req.body.result.response;

                    let body = req.body.result.body;

                    // body now just return from and rates???
                    // shoud return FROM TO AMOUNT CONVERSION
                    // conversion {from :currency,to:currency, amount:number,conversion:number)


                    let conversion = req.body.result.body.conversion;
                    //console.log(result.body.conversion);
                    // putting in 80 as stub for now
                    if (typeof conversion == 'undefined') {
                        conversion = 100;
                    }
                    //console.log(body);

                    let answer: Promise<FulfillmentResponse> = Google_Components.returnSimple(conversion.toString());
                    resolve(answer);


                }).catch(err => {
                    //console.log(err.response);
                    //console.log(err.body);
                    let error: Promise<FulfillmentResponse> = Google_Components.returnSimple("Error: " + err);
                    resolve(error);
                });
            }
        });
    }
}