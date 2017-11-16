import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {Google_Components} from './ConversationComponents';
import {Content} from './contentObject';

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

export namespace Bookfunc {
    //directs to type of apply page   (what do they want to apply for?)
    export function handleDirectBookAppointment(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result: Promise<FulfillmentResponse>;
            result = Google_Components.createUtterance(req, Content.directApply);
            resolve(result);

        });
    }






    export function handleBooking(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                reject("invalid request");

            }
            let fname : string = req.body.result.parameters.first_name.toString();
            let lname : string = req.body.result.parameters.last_name.toString();
            let mail : string = req.body.result.parameters.email.toString();
            let method = req.body.result.parameters.contact_method.toString();
            let phonenum : string = req.body.result.parameters.phone_number.toString();
            let other : string = req.body.result.parameters.further_detail.toString();

            let contact = {firstName : fname, lastName: lname, email:mail, phone: phonenum};
            let AppBook = {contactInfo: contact, details:other};

            client.appointmentsPost(AppBook).then(result => {
                //TODO does ref return a status from the request (as in success vs error)
                let ref = result.body.reference;
                let date = result.body.date;

                //console.log(ref);
                //console.log(date);
                let answer = "Thanks! An agent will contact you soon by " + method;
                let returnResult: Promise<FulfillmentResponse> = Google_Components.createUtterance(req, answer);
                resolve(returnResult);

            }).catch(err => {
                let answer = "I'm sorry. We were not able to reconcile your request. Please try again.";
                let returnResult: Promise<FulfillmentResponse> = Google_Components.createUtterance(req, answer);
                resolve(returnResult);

            });
        });

    }

}