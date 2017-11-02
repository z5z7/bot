export namespace Actions {

    export const MY_ACTION = "my.action.trial";
    export const WELCOME = "input.welcome.trial";
    export const MORTGAGERATE_SPECIALOFFER_ADVANCE = "mortgageRate.specialOffer.advance";
    export const MORTGAGERATE_SPECIALOFFER_PREMIER = "mortgageRate.specialOffer.premier";
    export const MORTGAGERATE_SPECIALOFFER_PERSONALRATES = "mortgageRate.specialOffer.personalRates";
    export const MORTGAGERATE_SPECIALOFFER_SMARTSAVER = "mortgageRate.specialOffer.smartSaver";
    export const FIND_WHAT_EXCHANGERATE = "find.what.exchangeRate";
    export const FIND_ATM = "find.atm"; // change to search.where.atm.location
    // find atm now just return all the atm in vancouver map
    export const FIND_ATM_FALLBACK = "actions.intent.PERMISSION";
    export const SEARCH_CURRENCY_EXCHANGE = "search.currency.exchange";
    export const SEARCH_WHAT_EXCHANGERATE = "search.what.exchangeRate";
    export const SEARCH_WHAT_MORTGAGETYPE = "search.what.mortgageType";
    export const SEARCH_WHERE_ATM = "search.where.atm";
    export const SEARCH_WHAT_MORTGAGE_CALCULATOR_PAYMENT_LEFT = "search.what.mortgageCalculator.paymentsLeft";
}