import { getCountries } from '../scraping/index'

/**
 * Gets the scrapped data by calling the scrapper and saves the data to the DB
 */
async function scrapingDataToDb(){
    return getCountries();
}

export {
    scrapingDataToDb
}