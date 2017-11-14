/**
 * Created by valeriewyns on 2017-11-13.
 */
import {Google_Components} from "./google_ConversationComponents";
import {Images} from "./imageLibrary";
import {FulfillmentResponse, SimpleCardContent} from "./contracts";


export namespace RrspFunc {
    export function handleDirectRRSP(req: any): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            //TODO: answer should be result of api call
            let text: string = "\n  The benefits of an RRSP?,   \n  or how to apply for a self-directed RRSP?";
            let speech : string = "What shall we discuss?  The benefits of an RRSP?,  or how to apply for a self-directed RRSP?";
            let simpleResponse: string = "Invest in your future";
            let title : string = "RRSP's?";
            let subtitle : string = "What about RRSPs shall we discuss?";
            let buttonTitle : string = "More";
            let buttonURL : string = "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp";


            let surface = Google_Components.returnSurfaceType(req);
            console.log("surface: " + surface);

             //let result: Promise<FulfillmentResponse> = Google_Components.returnSimple(speech);
             //resolve(result);

            let contentObj : SimpleCardContent = {
                simpleResponse : simpleResponse,
                cardTitle : title,
                subTitle: subtitle,
                cardBlurb : text,
                image: Images.rrspImage,
                buttonTitle : buttonTitle,
                buttonUrl : buttonURL
            }

            let result: Promise<FulfillmentResponse>  = Google_Components.returnSimpleCard(contentObj);
            resolve(result);
        })
    }

}
