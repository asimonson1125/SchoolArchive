let exceptions = ["salmon farm", "Fishery (Cod)", "Dairy", "hunting lodge", "iron smelter", "bauxite mine", "fishery (mackerel)", "shrimp trawler", "quarry", "Hydro Dam", "hydro plant"];
let facCap = 0;
let facID = 0;
let response = await fetch("https://api.nationsgame.net/nation/production.php?type=all&filter=all&from=0&limit=9999999", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/factories", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
let rere = await response.json();
let collectMe;

rere.factories.forEach(function (x) {
    collectMe = true;
    exceptions.forEach(function (except) {
        if ((x.name).toLowerCase() == except.toLowerCase()) { collectMe = false; }
    });
    if (collectMe) {
        facCap = x.productionCapacity;
        facID = x.const_u_key;
        fetch(`https://api.nationsgame.net/nation/actions/collect.php?key=${facID}&amount=${facCap}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/factories", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    }
});
