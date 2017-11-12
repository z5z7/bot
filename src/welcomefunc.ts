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

import {Components} from "./speechComponents";

export namespace Welcome {

    export function handleInputWelcome(req: any): Promise<FulfillmentResponse> {

        //console.log("incoming request is: " + JSON.stringify(req.body).toString());
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result:Promise<FulfillmentResponse> = Components.returnSimpleResponse("And yet more gnats in my pants   \n", "and snakes in my pancakes");
            resolve(result);

        });
    }
}