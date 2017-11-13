/**
 * A fulfillment webhook request from API.AI
 */
export interface FulfillmentRequest {
    id: string,
    result: {
        parameters: Object,
        source: string,
        action: string
    }
}

/**
 * A fulfillment webhook response to send to API.AI
 */
export interface FulfillmentResponse {
    speech: string,
    displayText: string,
    data: Object,
    contextOut: Object[],
    source: string,
    followupEvent?: Object
}

/**
 * Content Object for SimpleCard component input
 */
export interface SimpleCardContent{
    simpleResponse: string,
    cardTitle: string,
    cardBlurb: string,
    subTitle: string,
    image: string,
    imageAltText: string
}


/**
 * Content Object for ComplexCombo component input
 */
export interface ComplexComboContent{
    simpleResponse : string,
    title : string,
    cardBlurb : string,
    subTitle : string,
    image : string,
    suggestions : Array<any>,
    buttonTitle : string,
    buttonUrl : string
}