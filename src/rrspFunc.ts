/**
 * Created by valeriewyns on 2017-11-13.
 */
import {Google_Components} from "./google_ConversationComponents";
import {Images} from "./imageLibrary";
import {FulfillmentResponse, SimpleCardContent, SimpleCardSuggestionsContent} from "./contracts";


export namespace RrspFunc {
    export function handleDirectRRSP(req: any): Promise<FulfillmentResponse>{
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let isText = Google_Components.isTextSurface(req);
            let isGoogle = Google_Components.isGoogle(req);

            //TODO: answer should be result of api call
            let text: string = "\n  Life is tough.   \n  Retire instead";
            let speech : string = "What shall we discuss?";
            let simpleResponse: string = "Invest in your future";
            let title : string = "RRSP's?";
            let subtitle : string = "What about RRSPs shall we discuss?";
            let suggestions = [{"title" : "Benefits"}, {"title" : "Apply"}];
            let buttonTitle : string = "More";
            let buttonURL : string = "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp";

            if(isGoogle){
                if(isText) {
                    let contentObj: SimpleCardSuggestionsContent = {
                        simpleResponse: simpleResponse,
                        cardTitle: title,
                        subTitle: subtitle,
                        cardBlurb: text,
                        image: Images.rrspImage,
                        suggestions: suggestions,
                        buttonTitle: buttonTitle,
                        buttonUrl: buttonURL
                    }

                    let result: Promise<FulfillmentResponse> = Google_Components.returnSimpleCardSuggestions(contentObj);
                    resolve(result);
                }else{
                    let result: Promise<FulfillmentResponse> = Google_Components.returnSimple(speech);
                    resolve(result);
                }
            }
        })
    }
    export function handleApplyRRSP(req:any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let isText = Google_Components.isTextSurface(req);
            let isGoogle = Google_Components.isGoogle(req);

            //TODO: answer should be result of api call
            let text: string = "Social Insurance Number,   \n Two pieces of valid identification,   \n Bank account information (transit, institution number,   \n account number and bank address), Spouse or common-law partner's employment information";
            let speech : string = "Social Insurance Number, Two pieces of valid identification, Bank account information (transit, institution number, account number and bank address), Spouse or common-law partner's employment information";
            let simpleResponse: string = "Apply Now";
            let title : string = "What you need before you call";
            let subtitle : string = "";
            let suggestions = [{"title":"Book Now"}, {"title" : "Main Menu"}];
            let buttonTitle : string = "More";
            let buttonURL : string = "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp";

            if(isGoogle){
                if(isText){
                    let contentObj : SimpleCardSuggestionsContent = {
                        simpleResponse : simpleResponse,
                        cardTitle : title,
                        subTitle: subtitle,
                        cardBlurb : text,
                        image: Images.rrspApplyImage,
                        suggestions : suggestions,
                        buttonTitle : buttonTitle,
                        buttonUrl : buttonURL
                    }
                    let result: Promise<FulfillmentResponse>  = Google_Components.returnSimpleCardSuggestions(contentObj);
                    resolve(result);
                }else{
                    let result: Promise<FulfillmentResponse> = Google_Components.returnSimple(speech);
                    resolve(result);
                }
            }
        })
    }
    export function handleRRSPBenefits(req:any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let isText = Google_Components.isTextSurface(req);
            let isGoogle = Google_Components.isGoogle(req);



            //TODO: answer should be result of api call
            let text: string = "1 Pay less income tax.  \n Your contribution is deducted directly from your current income, giving you immediate tax savings.  \n 2 Build your wealth faster.  \n When you contribute regularly throughout the year, you take advantage of the power of compound interest. And since income earned within your RRSP is not taxed, your investment grows even more quickly!  \n 3  Defer your taxes to a lower rate.   \n When you start to withdraw money from your RRSP investment your income will likely be lower and you’ll pay tax at a lower rate.";
            let speech :  string = "1 Pay less income tax. Your contribution is deducted directly from your current income, giving you immediate tax savings.   2 Build your wealth faster.   When you contribute regularly throughout the year, you take advantage of the power of compound interest. And since income earned within your RRSP is not taxed, your investment grows even more quickly!   3  Defer your taxes to a lower rate.    When you start to withdraw money from your RRSP investment your income will likely be lower and you’ll pay tax at a lower rate.";

            let simpleResponse: string = "Invest in your future";
            let title : string = "Why should you do it?";
            let subtitle : string = "";
            let suggestions = [{"title":"Book Now"}, {"title" : "Main Menu"}];
            let buttonTitle : string = "More";
            let buttonURL : string = "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp";

            if(isGoogle){
                if(isText){
                    let contentObj : SimpleCardSuggestionsContent = {
                        simpleResponse : simpleResponse,
                        cardTitle : title,
                        subTitle: subtitle,
                        cardBlurb : text,
                        image: Images.rrspBenefitsImage,
                        suggestions : suggestions,
                        buttonTitle : buttonTitle,
                        buttonUrl : buttonURL
                    }
                    let result: Promise<FulfillmentResponse>  = Google_Components.returnSimpleCardSuggestions(contentObj);
                    resolve(result);
                }else{
                    let result: Promise<FulfillmentResponse> = Google_Components.returnSimple(speech);
                    resolve(result);
                }
            }
        })
    }
}