/**
 * Created by valeriewyns on 2017-11-15.
 */
import {ContentObject} from './contracts';
//TODO: this should all be retrieved from the database
//name of function is the same as the key to call
export namespace Content {
//all of these will be populated from api instead
    export let welcome: ContentObject = {
        simpleResponse: "Welcome to our lair",
        speech: "Welcome to HSBC, what shall we talk about today? Mortgages? RRSPs?, Finding an ATM?",
        text: "We could talk about many things from mortgages to RRSPs",
        title: "How can we help you today?",
        subtitle: "Find out more",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }

    export let findATM: ContentObject = {
        simpleResponse: "Find some ATMs",
        speech: "Find me all ATMs YO!",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png/atmMapAll.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let searchATM: ContentObject = {
        simpleResponse : "Find a specific ATM",
        speech: "Find a certain ATM yo",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let directRRSP: ContentObject = {
        simpleResponse : "Direct to RRPS",
        speech: "RRSP Direct",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let applyRRSP: ContentObject = {
        simpleResponse : "Apply for a RRSP",
        speech: "RRSP Apply",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let benefitsRRSP: ContentObject = {
        simpleResponse : "The Benefits of a RRSP",
        speech: "RRSP Benefits",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: "More",
        buttonURL: "http://www.hsbc.ca/1/2/world-selection"
    }
    export let wsfDirect: ContentObject = {
        simpleResponse : "Direct to World Selection Fund",
        speech: "World Selection Direct",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let wsfEligibility: ContentObject = {
        simpleResponse : "WSF Eligibility",
        speech: "The World Selection Eligibility",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let wsfMore: ContentObject = {
        simpleResponse : "More about the World Selection Fund",
        speech: "The World Selection More",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let wsfAdvantages: ContentObject = {
        simpleResponse : "More about the advantages of the World Selection Fund",
        speech: "The World Selection Advantages",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let directApply: ContentObject = {
        simpleResponse : "Directly Apply",
        speech: "Direct Apply",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let directMortgages: ContentObject = {
        simpleResponse : "Direct to Mortgages",
        speech: "Direct Apply",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
}
/*
//TODO: welcome
 /*let text: string = "We could talk about many things from mortgages to RRSPs";
 let speech : string = "Welcome to HSBC, what shall we talk about today? Mortgages? RRSPs?, Finding an ATM?"
 let simpleResponse: string = "Welcome to HSBC";
 let title : string = "How can we help you today?";
 let subtitle : string = "Find out more";
 let suggestions = [{"title":"Find ATM"}, {"title" : "Exchange Rates"}, {"title" : "Mortgages"}, {"title":"RRSPs"}, {"title":"World Selection Fund"}, {"title":"Premier Customer"}];
 let buttonTitle : string = "Visit HSBC";



//atmContent
//TODO: findATM
 let simpleResponseText: string = "Here is a map of all ATMs in the Lower Mainland.  \n Would you like to narrow down your options to just ONE city? ";
 let simpleResponseSpeech: string = "Here is a list of the ATMs in the Lower Mainland. This will soon be connected to api";
 let title:string = "HSBC ATMs";
 let subtitle:string = "Lower Mainland";
 let image:string = Images.getCityImage("Vancouver");
 let buttonTitle: string = "Map";
 let buttonURL: string = "https://www.google.ca/maps/search/hsbc+Vancouver";
 let suggestions = [{"title":"Vancouver"}, {"title" : "West Van"}, {"title" : "North Van"}, {"title":"New Westminster"}, {"title":"Burnaby"}, {"title":"Coquitlam"}, {"title" : "Richmond"}];

//TODO: searchATM
 let city = JSON.stringify(req.body.result.parameters["local_cities"]);
 let simpleResponseText: string = "Here are the ATMs in your city. Click on the link to open the map";
 let simpleResponseSpeech: string = "Here is a list of addresses of ATMS in your city";
 let title: string = "HSBC ATMs in your city";
 let image:string = Images.getCityImage(city);
 let buttonTitle : string = "Map";
 let buttonURL: string = "https://www.google.ca/maps/search/hsbc+" + city;

//rrsp content
//TODO: directRRSP
 let text: string = "\n  Life is tough.   \n  Retire instead";
 let speech : string = "What shall we discuss?";
 let simpleResponse: string = "Invest in your future";
 let title : string = "RRSP's?";
 let subtitle : string = "What about RRSPs shall we discuss?";
 let suggestions = [{"title" : "Benefits"}, {"title" : "Apply"}];
 let buttonTitle : string = "More";
 let buttonURL : string = "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp";

 //TODO: applyRRSP
 let text: string = "Social Insurance Number,   \n Two pieces of valid identification,   \n Bank account information (transit, institution number,   \n account number and bank address), Spouse or common-law partner's employment information";
 let speech : string = "Social Insurance Number, Two pieces of valid identification, Bank account information (transit, institution number, account number and bank address), Spouse or common-law partner's employment information";
 let simpleResponse: string = "Apply Now";
 let title : string = "What you need before you call";
 let subtitle : string = "";
 let suggestions = [{"title":"Book Now"}, {"title" : "Main Menu"}];
 let buttonTitle : string = "More";
 let buttonURL : string = "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp";

 //TODO: benefitsRRSP
 let text: string = "1 Pay less income tax.  \n Your contribution is deducted directly from your current income, giving you immediate tax savings.  \n 2 Build your wealth faster.  \n When you contribute regularly throughout the year, you take advantage of the power of compound interest. And since income earned within your RRSP is not taxed, your investment grows even more quickly!  \n 3  Defer your taxes to a lower rate.   \n When you start to withdraw money from your RRSP investment your income will likely be lower and you’ll pay tax at a lower rate.";
 let speech :  string = "1 Pay less income tax. Your contribution is deducted directly from your current income, giving you immediate tax savings.   2 Build your wealth faster.   When you contribute regularly throughout the year, you take advantage of the power of compound interest. And since income earned within your RRSP is not taxed, your investment grows even more quickly!   3  Defer your taxes to a lower rate.    When you start to withdraw money from your RRSP investment your income will likely be lower and you’ll pay tax at a lower rate.";

 let simpleResponse: string = "Invest in your future";
 let title : string = "Why should you do it?";
 let subtitle : string = "";
 let suggestions = [{"title":"Book Now"}, {"title" : "Main Menu"}];
 let buttonTitle : string = "More";
 let buttonURL : string = "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp";

 //TODO: key = wsfDirect
 let text: string = "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.";
 let speech : string = "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.";
 let simpleResponse: string = "The World Selection Fund";
 let title : string = "Prepare for your financial future";
 let subtitle : string = "";
 let suggestions = [{"title" : "Eligibility"}, {"title" : "Advantages"}, {"title" : "More Info"}];
 let buttonTitle : string = "More";
 let buttonURL : string = "http://www.hsbc.ca/1/2/world-selection";

 //TODO: wsfEligibility
 let text: string = "A Minimum initial investment of $50,000...  \n A Subsequent lump-sum investments from $500...   \n To Contribute from $250 in a regular savings plan";
 let speech : string = "A Minimum initial investment of $50,000...   A Subsequent lump-sum investments from $500...    To Contribute from $250 in a regular savings plan";
 let simpleResponse: string = "The World Selection Fund";
 let title : string = "In order to be eligible, you will need:";
 let subtitle : string = "";
 let suggestions = [{"title" : "More Info"}, {"title" : "Main Menu"}];
 let buttonTitle : string = "More";
 let buttonURL : string = "http://www.hsbc.ca/1/2/world-selection";

 //TODO: wsfMore
 let text: string = "Conservative   \n Moderate Conservative    \n Balanced    \n Growth     \n Aggressive Growth";
 let speech : string = "Conservative   Moderate   Conservative   Balanced   Growth Aggressive Growth";
 let simpleResponse: string =  "Every investor has different goals, attitudes towards risk, and amounts to invest.";
 let title : string = "Your goals can influence how you invest";
 let subtitle : string = "Some typical investor types:";
 let suggestions = [{"title" : "Main Menu"}];
 let buttonTitle : string = "More";
 let buttonURL : string = "http://www.hsbc.ca/1/2/world-selection";

 //TODO: wsfAdvantages
 let text: string = "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.";
 let speech : string = "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.";
 let simpleResponse: string =  "Advantages to the World Selection Fund";
 let title : string = "Make Bank";
 let subtitle : string = "HSBC World Selection® Portfolio.";
 let suggestions = [{"title" : "Eligibility"}, {"title": "Advantages"}, {"title" : "Main Menu"}];
 let buttonTitle : string = "More";
 let buttonURL : string = "http://www.hsbc.ca/1/2/world-selection";
 */