/**
 * Created by valeriewyns on 2017-11-13.
 */
export namespace Images {
    //TODO: export this out to api
    const url: string = "https://storage.googleapis.com/hello_init/chat_trial_images/";

    let imageMap = {
        "welcomeImage" : url + "welcomeImage.png",
        //
        "atmMapAllImage" : url + "atmMapAll.png",
        "atmMapVanImage" : url + "atmMapVancouver.png",
        "atmMapRichmondImage" : url + "atmMapRichmond.png",
        "atmMapBurnabyImage" : url + "atmMapBurnaby.png",
        "atmMapWestVanImage" : url + "atmMapWestVan.png",
        "atmMapNorthVanImage" : url + "atmMapNorthVan.png",
        "atmMapCoquitlamImage" : url + "atmMapCoquitlam.png",
        "atmMapNewWestImage" : url + "atmMapNewWest.png",
        //
        "bookAppointmentImage" : url + "bookAppointment.png",
        //
        "fxRatesImage" : url + "fxRates.png",
        //
        "mortgageImage0" : url + "mortgage_00.png",
        "mortgageImage1" : url + "mortgage_01.png",
        //
        "premierCustomerImage" : url + "premierCustomer.png",
        //
        "rrspImage" : url + "RRSP.png",
        //
        "wsfImage" : url + "worldSelectionFund.png"
    };
    export function getImage(image : string){
        return imageMap[image];
    }
}
