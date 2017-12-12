import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {ContentObject} from "./contracts";
import {MortgageFunc} from './mortgageFunc';
import {AtmFunc} from './atmFunc';
import {Exchange} from './Exchange';
import {Appointments} from './Appointments';
//
let MortgageFunction: MortgageFunc = new MortgageFunc();
let AtmFunction: AtmFunc = new AtmFunc();
let ExchangeFunction: Exchange = new Exchange();
let AppointmentFunction: Appointments = new Appointments();


const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

//this is what allows for greater dynamicism in the handleRequest function
export namespace Integrator {
    //
    //mortgage
    //
    export function calculateMortgageMonthly(req: any): Promise<ContentObject> {
        return MortgageFunction.calculateMortgageMonthly(req);
    }
    export function calculateMortgageRemaining(req: any): Promise<ContentObject> {
        return MortgageFunction.calculateMortgageRemaining(req);
    }
    //
    //atm
    //
    export function searchATM(req : any): Promise<ContentObject>{
        return AtmFunction.searchATM(req);
    }
    //
    //exchange rates
    //
    export function searchFxRates(req : any): Promise<ContentObject>{
        return ExchangeFunction.searchWhatExchangeRate(req);
    }
    export function findFxRates(req : any): Promise<ContentObject>{
        return ExchangeFunction.findExchangeRate(req);
    }
    //
    //book appointment
    export function bookAppointment(req : any): Promise<ContentObject>{
        return AppointmentFunction.bookAppointment(req);
    }
}
