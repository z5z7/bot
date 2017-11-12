/**
 * Created by valeriewyns on 2017-11-11.
 */
/**
 * Created by valeriewyns on 2017-11-10.
 */
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

export namespace Welcome {

    export function handleInputWelcome(req: any): Promise<FulfillmentResponse> {


        return new Promise<FulfillmentResponse>((resolve, reject) => {

            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "Welcome to HSBC from within where we need to be",
                displayText: "Welcome to HSBC from within my sweet little bitches",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });
    }
}