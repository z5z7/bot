
//TODO: This is glitchy as fuck... fix it
/*

import {FulfillmentResponse, FulfillmentRequest, ContentObject} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {Convo_Components} from './ConversationComponents';
import {Content} from "./contentObject";

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

export class Exchange {

    //input : Currency you want the list of exchanges for, or blank for all
    //output: lPromise response of currencies

        findExchangeRate = function(req: any): Promise<string> {
            console.log("find exchange rate");
           //     console.log(req.body);
            if (!req.body) return this.exchangeHelperAll(req); // Check invalid Paramgit
            console.log("within excha");
            //try/catch just in case there is no currency_from parameter
            //if there is no parameter it means we want it ALLLLL
            try{
                if(req.body.result.parameters.currency_from){
                    return this.exchangeHelperFrom(req);
                }
            }
            catch(err){
                return this.exchangeHelperAll(req);
            }


        }
        exchangeHelperAll = function(req: any): Promise<string> {

            return new Promise<string>((resolve, reject) => {

             if (!req.body.result) reject("invalid request");

             client.xratesGet().then(result => {
                let response = result.response;
                let currencies = result.body.currencies;
                let len = currencies.length;
                let Rarray = [];

                let rateProm: Promise<any>[] = [];
                for (let i = 0; i < len; i++) {
                     console.log(currencies[i].code);
                    rateProm.push(this.ratehelper(currencies[i].code)); // ratehelper is just making a string of all of these returns
                }

                Promise.all(rateProm).then(values => {
                    Rarray.push(values);
                    let answer: string = Rarray.join('\n');


                    resolve(answer.toString());


                })
            })
             .catch(err => { // catch for promise loop
                resolve(err);
            });
        });
    }


    exchangeHelperFrom = function(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");
            let currency_from = req.body.result.parameters.currency_from;

            client.xratesFromGet(currency_from).then(result => {

                let rateinfo = result.body.rates;
                let Rarray = [];
                Rarray.push("From Currency " + currency_from + " the rates are \n")
                for (let i = 0; i < rateinfo.length; i++) {
                    let exchinfo = rateinfo[i];
                    console.log("exchinfo: " + exchinfo);
                    let bprice = exchinfo.buy, sprice = exchinfo.sell, fromcode = exchinfo.code;
                    let str1 = ("Buy price: "+  bprice.toString()," Sell Price: ", + sprice.toString() + "Currency Code: " + fromcode.toString());
                    Rarray.push(str1);
                }

                    let answer = Rarray.join('  \n');
                    resolve(answer.toString());

            }).catch(err => { // catch for promise loop
                resolve(err);
            });
        });
    }

    searchFxRates = function(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            let currency_from = req.body.result.parameters.currency_from;
            let currency_into = req.body.result.parameters.currency_into;
            let amount = req.body.result.parameters.amount;

            if (currency_from == "") {// in the case of no from input, assume Canadian
            currency_from = "CAD";
            }

            if (amount == "") { // case where no amount is given
                client.xratesFromToGet(currency_from,currency_into).then(result => {

                    let Rarray =[];
                    let bprice = result.body.buy;
                    let sprice = result.body.sell;

                    let str0 = currency_from;
                    let str1 = str0.concat(" to ", currency_into," rate for buy is ", bprice.toString() + "  ");
                    let str2 = str0.concat(" to ", currency_into," rate for sell is ", sprice.toString() + "  \n");

                    Rarray.push(str1);
                    Rarray.push(str2);

                    let answer : string = Rarray.join('\n');




                    resolve(answer.toString());


                }).catch(err => { // TODO promise rejection is caught by caller? Need to confirm
                        resolve(err);

                });
            }
            else { // case where amount is given
                client.xratesConvertGet(currency_from,currency_into,amount).then(result => {


                    resolve(result.toString());

                }).catch(err => {
                        resolve(err);

                });
            }
        });
    }

    ratehelper = function(cur: any) : Promise<any> { // do the data adding here then use prom.all with answers inside then? adress+shortname
        return new Promise(function (fulfill, reject) {
            //console.log(cur);
            client.xratesFromGet(cur).then(result => {
                //console.log(result.body.rates);
                let Parray = [];
                let j;
                let len2 = result.body.rates.length;
                for (j = 0; j < len2; j++) {
                    let str0 = "for " + cur;
                    let str1 = str0.concat(" to ", result.body.rates[j].code," rate for buy is ", result.body.rates[j].buy.toString());
                    let str2 = str0.concat(" ,sell rate is ", result.body.rates[j].sell.toString());
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
}
*/