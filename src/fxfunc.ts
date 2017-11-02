import {FulfillmentResponse, FulfillmentRequest} from './contracts';

export namespace Fxfunc {

    export function handleFindWhatExchangeRate(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub
            // call backend to get all the FX rates

            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "Returns list of rates.        currency : rates     \n" +
                "no parameters as this is a find, rather than a search, function and so you are returning ALL rates as a list",
                displayText: "Returns list of rates.        currency : rates     \n" +
                "no parameters as this is a find, rather than a search, function and so you are returning ALL rates as a list",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });

    }

    export function handleSearchCurrencyExchange(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: ??? is it still used

            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "This will return just one value foreign_currency : amount\n" +
                "The parameter will be the currency to exchange in shortForm: e.g. USD\n" +
                "Optional parameter: they might include a sum to convert... in this case multiply sum by exchange rate and return",
                displayText: "This will return just one value foreign_currency : amount\n" +
                "The parameter will be the currency to exchange in shortForm: e.g. USD\n" +
                "Optional parameter: they might include a sum to convert... in this case multiply sum by exchange rate and return",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });

    }

    export function handleSearchWhatExchangeRate(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            // todo: stub

            if (!req.body.result) {
                reject("invalid request");

            }

            const result: FulfillmentResponse = {
                speech: "**webhook here returning $amount converted into $currency",
                displayText: "**webhook here returning $amount converted into $currency",
                data: {},
                contextOut: [],
                source: ""
            };

            resolve(result);

        });

    }
}