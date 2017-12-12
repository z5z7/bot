import {ContentObject} from "./contracts";
import {MortgageFunc} from './mortgageFunc';
import {AtmFunc} from './atmFunc';
import {Exchange} from './exchangeFunc';
import {Appointments} from './appointmentFunc';
//
let MortgageFunction: MortgageFunc = new MortgageFunc();
let AtmFunction: AtmFunc = new AtmFunc();
let ExchangeFunction: Exchange = new Exchange();
let AppointmentFunction: Appointments = new Appointments();


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
