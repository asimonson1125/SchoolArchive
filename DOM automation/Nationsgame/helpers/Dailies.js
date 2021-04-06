fetch("https://api.nationsgame.net/nation/actions/purchase.php?type=items&key=83&amount=1", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/shop/items", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" }); //2k funds buy
fetch("https://api.nationsgame.net/nation/actions/useItem.php?key=83&type=default&amount=1&option=null", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" }); //2k funds use
fetch("https://api.nationsgame.net/nation/actions/purchase.php?type=items&key=40&amount=1", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/shop/items", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" }); //trade certificate buy
fetch("https://api.nationsgame.net/nation/actions/useItem.php?key=40&type=certificate&amount=1&option=null", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" }); //trade certificate use
fetch("https://api.nationsgame.net/nation/actions/withdrawTaxes.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" }); //withdraw taxes

fetch("https://api.nationsgame.net/nation/actions/useItem.php?key=12&type=expands&amount=1&option=null", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" }); //expand borders use

//factory collector
let facCap = 0;
let facID = 0;
let response = await fetch("https://api.nationsgame.net/nation/production.php?type=all&filter=all&from=0&limit=9999999", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
let rere = await response.json();

rere.factories.forEach(function (x) {
    facCap = x.productionCapacity;
    facID = x.const_u_key;
    fetch(`https://api.nationsgame.net/nation/actions/collect.php?key=${facID}&amount=${facCap}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
});
