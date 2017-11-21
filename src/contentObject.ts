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
        text: "Here is a map of all ATMs in the Lower Mainland.  \n Would you like to narrow down your options to just ONE city?",
        title: "HSBC ATMs",
        subtitle: "Lower Mainland",
        suggestions: [{"title": "Vancouver"}, {"title" : "West Van"}, {"title" : "North Van"}, {"title": "New Westminster"}, {"title": "Burnaby"}, {"title": "Coquitlam"}, {"title" : "Richmond"}],
        imageURL: Images.getCityImage("Vancouver"),
        buttonTitle: ["Map"],
        buttonURL: ["https://www.google.ca/maps/search/hsbc+Vancouver"]
    }
    export let searchATM: ContentObject = {
        simpleResponse : "Find a specific ATM",
        speech: "Find a certain ATM yo",
        text: "Here are the ATMs in your city. Click on the link to open the map.",
        title: "HSBC ATMs in " /* here add the city from the parameters JSON.stringify(req.body.result.parameters["local_cities"])*/,
        subtitle: "",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: Images.getCityImage(city),
        buttonTitle: ["Map"],
        buttonURL: ["https://www.google.ca/maps/search/hsbc+" /* add city here*/]
    }
    export let directRRSP: ContentObject = {
        simpleResponse : "RRSP",
        speech: "RRSPs",
        text: "\n  Life is tough.   \n  Retire instead",
        title: "RRSP's?",
        subtitle: "What about RRSPs shall we discuss?",
        suggestions: [{"title" : "Benefits"}, {"title" : "Apply"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/RRSP.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp"]
    }
    export let applyRRSP: ContentObject = {
        simpleResponse : "Apply for a RRSP",
        speech: "RRSP Apply",
        text: "Social Insurance Number,   \n Two pieces of valid identification,   \n Bank account information (transit, institution number,   \n account number and bank address), Spouse or common-law partner's employment information",
        title: "What you need before you call: ",
        subtitle: "",
        suggestions: [{"title": "Book Now"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/rrspApply.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp"]
    }
    export let benefitsRRSP: ContentObject = {
        simpleResponse : "The Benefits of a RRSP",
        speech: "RRSP Benefits",
        text: "1 Pay less income tax.  \n Your contribution is deducted directly from your current income, giving you immediate tax savings.  \n 2 Build your wealth faster.  \n When you contribute regularly throughout the year, you take advantage of the power of compound interest. And since income earned within your RRSP is not taxed, your investment grows even more quickly!  \n 3  Defer your taxes to a lower rate.   \n When you start to withdraw money from your RRSP investment your income will likely be lower and you’ll pay tax at a lower rate.",
        title: "Why should you do it?",
        subtitle: "",
        suggestions: [{"title": "Book Now"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/rrspBenefits.png",
        buttonTitle: ["More"],
        buttonURL: "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp"
    }
    export let wsfDirect: ContentObject = {
        simpleResponse : "Direct to World Selection Fund",
        speech: "World Selection Direct",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "",
        suggestions: [{"title" : "Eligibility"}, {"title" : "Advantages"}, {"title" : "More Info"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/worldSelectionFund.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/world-selection"]
    }
    export let wsfEligibility: ContentObject = {
        simpleResponse : "WSF Eligibility",
        speech: "The World Selection Eligibility",
        text: "A Minimum initial investment of $50,000...  \n A Subsequent lump-sum investments from $500...   \n To Contribute from $250 in a regular savings plan",
        title: "In order to be eligible, you will need: ",
        subtitle: "",
        suggestions: [{"title" : "More Info"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/worldSelectionFund.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/world-selection"]
    }
    export let wsfMore: ContentObject = {
        simpleResponse : "More about the World Selection Fund",
        speech: "The World Selection More",
        text: "Conservative   \n Moderate Conservative    \n Balanced    \n Growth     \n Aggressive Growth",
        title: "Your goals can influence how you invest",
        subtitle: "Some typical investor types:",
        suggestions: [{"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/worldSelectionFund.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/world-selection"]
    }
    export let wsfAdvantages: ContentObject = {
        simpleResponse : "More about the advantages of the World Selection Fund",
        speech: "The World Selection Advantages",
        text: "1. Global investment opportunities Your portfolio includes investment opportunities identified by professional investment managers who have insight into the regions and markets in which they invest.   \n 2. Broad diversification: Gain exposure to a wide range of geographic regions, asset classes and investment managers to ensure you can benefit from a broadly diversified investment portfolio.",
        title: "Make Bank",
        subtitle: "HSBC World Selection® Portfolio.",
        suggestions: [{"title" : "Eligibility"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/worldSelectionFund.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/world-selection"]
    }
    export let directApply: ContentObject = {
        simpleResponse : "Directly Apply",
        speech: "Direct Apply",
        text: "Sure, what is it you want to apply for?",
        title: "",
        subtitle: "",
        suggestions: [{"title": "Find ATM"}, {"title": "Exchange Rates"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title": "World Selection Fund"}, {"title": "Premier Customer"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/mortgage_00.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let directMortgages: ContentObject = {
        simpleResponse : "Direct to Mortgages",
        speech: "mortgages",
        text: "What is it about mortgages you would like to check out?",
        title: "",
        subtitle: "",
        suggestions: [{"title": "Mortgage Calculator"}, {"title": "Mortgage Catalogue"}, {"title": "Mortgage Pre-approval"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/mortgage_00.png",
        buttonTitle: [],
        buttonURL: []
    }
    export let traditionalMortgage: ContentObject = {
        simpleResponse: "HSBC Traditional Mortgage",
        speech: "Tell me more about first time buyer mortgage",
        text: "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year.   \n You can also make a match a payment and miss one later.   \n Already enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.   \n Enjoy preferential interest rates as a HSBC Premier or HSBC Advance Client.",
        title: "Become a homeowner sooner than you think",
        subtitle: "The HSBC Traditional Mortgage is an ideal choice if you are a first-time homebuyer, have limited down payment options and want to build equity in your home.",
        suggestions: [{"title" : "HSBC Premier"}, {"title": "HSBC Advance"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/couple.png",
        buttonTitle: ["More"],
        buttonURL: "https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages/traditional-mortgage/right-for-you"
    }
    export let equityPowerMortgage: ContentObject = {
        simpleResponse: "HSBC Equity Power Mortgage",
        speech: "Tell me more about the equity power mortgage",
        text: "Renovate, travel or make a major purchase: Access up to 80% of the value of your home.   \n Flexible rate options: Benefit from a combination of fixed and variable terms.   \n Save money: Consolidate high-interest debt and reduce the amount of interest you pay.   \n Exclusive savings: Reduced interest rates for HSBC Premier and HSBC Advance clients.",
        title: "Make the equity in your home work for you",
        subtitle: "The HSBC Equity Power Mortgage is an ideal choice if you want to use the equity you’ve built up in your home for important goals or want to consolidate high-interest loans to reduce the impact of interest rate fluctuations.",
        suggestions: [{"title" : "HSBC Premier"}, {"title": "HSBC Advance"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/equity.png",
        buttonTitle: ["More"],
        buttonURL: "https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages/equity-power-mortgage/right-for-you"
    }
    export let smartSaversMortgage: ContentObject = {
        simpleResponse: "HSBC Smart Savers Mortgage",
        speech: "Tell me more about the smart savers mortgage",
        text: "Pay a lower interest rate on your mortgage based on the amount in your eligible linked HSBC account Continue to earn interest on that linked account.   \n Access the money from your linked account when you need it.   \n Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or increasing the payment amount up to a total of 20% each year.    \n You can also make a match a payment and miss one later.",
        title: "Pay off your mortgage faster",
        subtitle: "The HSBC Smart Savers Mortgage is an ideal choice if you want to keep your savings accessible.",
        suggestions: [{"title" : "HSBC Premier"}, {"title": "HSBC Advance"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/sisters.png",
        buttonTitle: ["More"],
        buttonURL: "https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages/smart-savers-mortgage/right-for-you"
    }
    export let premierCustomerBenefits: ContentObject = {
        simpleResponse: "Premier customer benefits",
        speech: "What are the benefits of being a premier customer?",
        text: "Your Relationship Manager: A dedicated Premier Relationship Manager identifies a wealth strategy designed just for you.   \n Meeting your needs: Our Relationship Managers are recognized based on how well they provide their service and how well they meet your needs.   \n Anytime, anywhere: Your personal economy is always with you. So are we, providing support and services whenever and wherever you need us.     \n Preferential Access: Access some of the most prestigious banking products, services and rewards that we have to offer.",
        title: "HSBC Premier focuses on the most important economy in the world. Yours.",
        subtitle: "",
        suggestions: [{"title" : "HSBC Premier Eligibility"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/premier_needs.png",
        buttonTitle: ["More"],
        buttonURL: "https://www.hsbc.ca/1/2/personal/banking/hsbc-premier/benefits"
    }
    export let advanceCustomerBenefits: ContentObject = {
        simpleResponse: "Advance Benefits",
        speech: "Benefits of Advance",
        text: "Everyone is different, which is why we make the effort to understand your needs and how you like to bank.   \n We offer you preferential rates with unique rewards and benefits to help you with your everyday banking, borrowing and investment needs - because we want to help you reach your individual goals.   \n Speak to a mortgage specialist at 1-866-609-4722. ",
        title: "HSBC",
        subtitle: "Welcome to a whole new way of banking with HSBC Advance",
        suggestions: [{"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/dad.png",
        buttonTitle: ["More"],
        buttonURL: "https://www.us.hsbc.com/1/2/home/advance"
    }
    export let aboutUs: ContentObject = {
        simpleResponse: "HSBC",
        speech: "INFO",
        text: "Founded in 1865 to finance trade between Asia and the West, today HSBC is one of the world’s largest banking and financial services organizations serving around 38 million customers worldwide. Our aim is to be acknowledged as the world’s leading and most respected international bank.   \n Throughout our history we have been where the growth is, connecting customers to opportunities.    \n We enable businesses to thrive and economies to prosper, helping people fulfil their hopes and dreams and realize their ambitions.   \n This is our role and purpose.",
        title: "Fast access and control of your money whenever you need it, wherever you are",
        subtitle: "HSBC is one of the world’s largest banking and financial services organisations.",
        suggestions: [{"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/building.png",
        buttonTitle: ["More"],
        buttonURL: "http://www.about.hsbc.ca"
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

 //TODO: traditionalMortgage
 let text: string = "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year.   \n You can also make a match a payment and miss one later.   \n Already enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.   \n Enjoy preferential interest rates as a HSBC Premier or HSBC Advance Client.";
 let speech : string = "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year.   You can also make a match a payment and miss one later.   Already enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.   Enjoy preferential interest rates as a HSBC Premier or HSBC Advance Client.";
 let simpleResponse: string =  "Every investor has different goals, attitudes towards risk, and amounts to invest.";
 let title : string = "Become a homeowner sooner than you think.";
 let subtitle : string = "The HSBC Traditional Mortgage is an ideal choice if you are a first-time homebuyer, have limited down payment options and want to build equity in your home.";
 let suggestions = [{"title" : "HSBC Premier"}, {"title": "HSBC Advance"}, {"title" : "Main Menu"}];
 let buttonTitle : string = "More";
 let buttonURL : string = "https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages/traditional-mortgage/right-for-you";
 */