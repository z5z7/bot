/**
 * Created by valeriewyns on 2017-11-13.
 */

    //good for dynamically created image names... such as ATM maps
const url: string = "https://storage.googleapis.com/hello_init/chat_trial_images/";

export namespace Images {

    //TODO this should also be externalized.. right?
    export let atmMapAllImage: string = url + "atmMapAll.png";
    export let atmMapWestVancouverImage: string = url + "atmMapWestVan.png";
    export let atmMapRichmondImage: string = url + "atmMapRichmond.png";
    export let atmMapBurnabyImage: string = url + "atmMapBurnaby.png";
    export let atmMapVancouverImage: string = url + "atmMapVancouver.png";
    export let atmMapNorthVancouverImage: string =  url + "atmMapNorthVan.png";
    export let atmMapCoquitlamImage: string =   url + "atmMapCoquitlam.png";
    export let atmMapNewWestminsterImage: string =  url + "atmMapNewWest.png";
    //
    export let fxRatesImage: string = url + "fxRates.png";
    //
    export let mortgageImage0: string = url + "mortgage_00.png";
    export let mortgageImage1: string =  url + "mortgage_01.png";
    //
    export let premierCustomerImage: string = url + "premierCustomer.png";


    export function getCityImage(city : string){
        if(city.includes("Vancouver")){
            return atmMapVancouverImage;
        }else if (city.includes("Burnaby")){
            return atmMapBurnabyImage;
        }else if (city.includes("Richmond")){
            return atmMapRichmondImage;
        }else if (city.includes("New Westminster")){
            return atmMapNewWestminsterImage;
        }else if (city.includes("North Vancouver")){
            return atmMapNorthVancouverImage;
        }else if (city.includes("Coquitlam")){
            return atmMapCoquitlamImage;
        }else if (city.includes("West Vancouver")){
            return atmMapWestVancouverImage;
        }
    }

}
