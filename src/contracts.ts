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
 * A fulfillment webhook respose to send to API.AI
 */
export interface FulfillmentResponse {
    speech: string,
    displayText: string,
    data: Object,
    contextOut: Object[],
    source: string,
    followupEvent?: Object
}