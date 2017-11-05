import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi} from './hsbc-api';

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST;
let fakeClient = new DefaultApi(HSBC_SERVICE_HOST);

export namespace Bookfunc {


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

            //console.log(fname);
            //console.log(lname);
            //console.log(mail);
            //console.log(method);
            //console.log(phonenum);
            //console.log(other);

            let contact = {firstName : fname, lastName: lname, email:mail, phone: phonenum};
            let AppBook = {contactInfo: contact, details:other};

            fakeClient.appointmentsPost(AppBook).then(result => {

                let ref = result.body.reference;
                let date = result.body.date;

                //console.log(ref);
                //console.log(date);

                const result1: FulfillmentResponse = {
                    speech: "Thanks! An agent will contact you soon by " + method,
                    displayText: "Thanks! An agent will contact you soon by " + method,
                    data: {},
                    contextOut: [],
                    source: ""
                };

                resolve(result1);

            }).catch(err => {

                const result2: FulfillmentResponse = {
                    speech: "Something went wrong at our Backend",
                    displayText: "Something went wrong at our Backend",
                    data: {},
                    contextOut: [],
                    source: ""
                };

                resolve(result2);

            });
        });

    }

}