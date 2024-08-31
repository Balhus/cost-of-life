const playwright = require('playwright');
import {chromium} from '@playwright/test';

// (async () => {
//     for (const browserType of ['chromium']) {
//         const browser = await playwright[browserType].launch();
//         const page = await browser.newPage();
//         await page.goto('https://www.numbeo.com/cost-of-living/in/Barcelona?displayCurrency=EUR');
//         await page.waitForTimeout(1000);

//         const products = await page.$$eval('table.data_wide_table tr', all_products => {
//             const data = [];
//             let section = [];

//             let currentHeader = "";

//             all_products.forEach(product => {
//                 const sectionHeaderEl = product.querySelector('th');

//                 if(sectionHeaderEl){ //Create a new section
//                     data.push(section);
//                     section = [];
//                     currentHeader = sectionHeaderEl.innerText;
//                     section = [{ header: currentHeader }];
//                 }else{ //Add data to each section
//                     const priceEl = product.querySelector('td.priceValue span');
//                     const price = priceEl ? priceEl.innerText : null;
//                     const titleEl = product.querySelector(':first-child');
//                     const title = titleEl ? titleEl.innerText : null;
//                     // const ratingEl = product.querySelector('.a-icon-alt');
//                     // const rating = ratingEl ? ratingEl.innerText : null;
                    
//                     section.push({ title, price });
//                 }
                
//             });
//             return data;
//         });
//         console.log(products);
//         await browser.close();
//     };
// })();

const getCountries = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
    await page.goto('https://www.numbeo.com/cost-of-living/');
    // await page.waitForTimeout(1000);

    const countries = await page.$$eval('.links_for_countries table.related_links tr a', all_countries => {
      const data = [];

      all_countries.forEach(country => {
          
              
              const countryName = country.innerText || null;
              const countryLink = 'https://www.numbeo.com/cost-of-living/' + country.getAttribute('href') || null;
              
              data.push({ name: countryName, link: countryLink });
      });

      return data;
    });

    await browser.close();

    return countries;
};


export {
  getCountries
}