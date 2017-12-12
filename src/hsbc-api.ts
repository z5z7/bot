/**
 * HSBC API
 * A mock RESTful API for HSBC services
 *
 * OpenAPI spec version: 0.2.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import request = require('request');
import http = require('http');
import Promise = require('bluebird');

let defaultBasePath = 'http://localhost/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable:no-unused-variable */

export class ATM {
    'name': string;
    'location': Location;
    'address': Address;
}

export class ATMList {
    'atms': Array<ATM>;
}

export class Address {
    'street': string;
    'number': string;
    'city': string;
    'province': string;
}

export class AppointmentBooking {
    'contactInfo': ContactInfo;
    /**
     * Additional information for the appointment
     */
    'details': string;
}

/**
 * Reference information for a booked appointment
 */
export class AppointmentInfo {
    'reference': string;
    'date': string;
}

export class CalculationResult {
    'result': number;
    'details': string;
}

/**
 * A banking calculator for a particular product function
 */
export class Calculator {
    /**
     * Unique ID of this calculator
     */
    'id': string;
    /**
     * The particular function this calculator computes
     */
    'name': string;
    /**
     * The list of named parameters to include in a CalculatorQuery to this Integrator. All parameters are numbers.
     */
    'parameters': Array<string>;
}

export class CalculatorList {
    /**
     * The product or product category this calculator belongs to
     */
    'product': string;
    'calculators': Array<Calculator>;
}

/**
 * An object containing the necessary parameters as key-value pairs for a particular product function
 */
export class CalculatorQuery {
}

export class ContactInfo {
    'firstName': string;
    'lastName': string;
    'email': string;
    'phone': string;
}

export class Content {
    'key': string;
    'simpleResponse': string;
    'speech': string;
    'text': string;
    'title': string;
    'subtitle': string;
    'imageURL': string;
    'suggestions': Array<string>;
    'buttonTitle': Array<string>;
    'buttonURL': Array<string>;
}

/**
 * Conversion from one currency to another
 */
export class Conversion {
    /**
     * Currency to sell
     */
    'from': Currency;
    /**
     * Currency to buy
     */
    'to': Currency;
    /**
     * Amount to convert
     */
    'amount': number;
    /**
     * Conversion of the specified amount from the desired to target currency
     */
    'conversion': number;
}

export class Currency {
    /**
     * Full name of the currency
     */
    'name': string;
    /**
     * Three letter abbreviation for the currency
     */
    'code': string;
}

export class CurrencyList {
    'currencies': Array<Currency>;
}

/**
 * Exchange rate from a base currency to target currency, including their full names
 */
export class DetailedExchangeRate {
    'from': Currency;
    'to': Currency;
    'buy': number;
    'sell': number;
    'timestamp': string;
}

/**
 * The buying and selling rates to/from a target currency, given some other currency
 */
export class ExchangeRate {
    /**
     * Three letter abbreviation of the target currency
     */
    'code': string;
    'buy': number;
    'sell': number;
}

export class ExchangeRateInfo {
    /**
     * The currency to find exchange rates for
     */
    'from': Currency;
    'rates': Array<ExchangeRate>;
}

export class Location {
    'lon': number;
    'lat': number;
}

export class ModelError {
    /**
     * Information about the error
     */
    'info': string;
}


export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(requestOptions: request.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: request.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: request.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string;

    applyToRequest(requestOptions: request.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(_: request.Options): void {
        // Do nothing
    }
}

export enum DefaultApiApiKeys {
}

export class DefaultApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: DefaultApiApiKeys, value: string) {
        this.authentications[DefaultApiApiKeys[key]].apiKey = value;
    }
    /**
     *
     * @summary Books an appointment.
     * @param appointmentBooking
     */
    public appointmentsPost (appointmentBooking?: AppointmentBooking) : Promise<{ response: http.ClientResponse; body: AppointmentInfo;  }> {
        const localVarPath = this.basePath + '/appointments';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: appointmentBooking,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: AppointmentInfo;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Returns all ATMs
     * @summary ATMs
     */
    public atmGet () : Promise<{ response: http.ClientResponse; body: ATMList;  }> {
        const localVarPath = this.basePath + '/atm';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: ATMList;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Returns a list of publically available calculators for a given product
     * @summary Integrator Types
     * @param product A banking product name
     */
    public calculateProductGet (product: string) : Promise<{ response: http.ClientResponse; body: CalculatorList;  }> {
        const localVarPath = this.basePath + '/calculate/{product}'
                .replace('{' + 'product' + '}', String(product));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling calculateProductGet.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CalculatorList;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Returns the result of the product function calculator given the parameters in the body. Specify calculator function parameters as query strings, whose keys are obtained from the calculate/product endpoint
     * @summary A Calculation Result
     * @param product A banking product name
     * @param id The unique id of a product function calculator
     */
    public calculateProductIdGet (product: string, id: string) : Promise<{ response: http.ClientResponse; body: CalculationResult;  }> {
        const localVarPath = this.basePath + '/calculate/{product}/{id}'
                .replace('{' + 'product' + '}', String(product))
                .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling calculateProductIdGet.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling calculateProductIdGet.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CalculationResult;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * HSBC proprietary text content relating to given subject
     * @summary Text content
     * @param subject A HSBC related subject name
     */
    public contentSubjectGet (subject: string) : Promise<{ response: http.ClientResponse; body: Content;  }> {
        const localVarPath = this.basePath + '/content/{subject}'
                .replace('{' + 'subject' + '}', String(subject));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'subject' is not null or undefined
        if (subject === null || subject === undefined) {
            throw new Error('Required parameter subject was null or undefined when calling contentSubjectGet.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Content;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary Converts a specified amount from a selling to a buying currency
     * @param from Three letter abbreviation of a supported currency to sell
     * @param to Three letter abbreviation of a supported currency to buy
     * @param amount The desired amount to exchange from selling to buying currency
     */
    public xratesConvertGet (from: string, to: string, amount: number) : Promise<{ response: http.ClientResponse; body: Conversion;  }> {
        const localVarPath = this.basePath + '/xrates/convert';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'from' is not null or undefined
        if (from === null || from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling xratesConvertGet.');
        }

        // verify required parameter 'to' is not null or undefined
        if (to === null || to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling xratesConvertGet.');
        }

        // verify required parameter 'amount' is not null or undefined
        if (amount === null || amount === undefined) {
            throw new Error('Required parameter amount was null or undefined when calling xratesConvertGet.');
        }

        if (from !== undefined) {
            queryParameters['from'] = from;
        }

        if (to !== undefined) {
            queryParameters['to'] = to;
        }

        if (amount !== undefined) {
            queryParameters['amount'] = amount;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Conversion;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary Returns the buying and selling rates to all supported currencies from the specified one
     * @param from Three letter abbreviation of a supported currency
     */
    public xratesFromGet (from: string) : Promise<{ response: http.ClientResponse; body: ExchangeRateInfo;  }> {
        const localVarPath = this.basePath + '/xrates/{from}'
                .replace('{' + 'from' + '}', String(from));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'from' is not null or undefined
        if (from === null || from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling xratesFromGet.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: ExchangeRateInfo;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary Returns the exchange rate between the base and target currencies
     * @param from
     * @param to
     */
    public xratesFromToGet (from: string, to: string) : Promise<{ response: http.ClientResponse; body: DetailedExchangeRate;  }> {
        const localVarPath = this.basePath + '/xrates/{from}/{to}'
                .replace('{' + 'from' + '}', String(from))
                .replace('{' + 'to' + '}', String(to));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'from' is not null or undefined
        if (from === null || from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling xratesFromToGet.');
        }

        // verify required parameter 'to' is not null or undefined
        if (to === null || to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling xratesFromToGet.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: DetailedExchangeRate;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Returns list of exchangable currencies
     * @summary Exchangeable currencies
     */
    public xratesGet () : Promise<{ response: http.ClientResponse; body: CurrencyList;  }> {
        const localVarPath = this.basePath + '/xrates';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CurrencyList;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
