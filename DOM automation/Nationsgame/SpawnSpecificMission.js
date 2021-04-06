let found = false;
while (!found) {
    await fetch("https://api.nationsgame.net/nation/actions/useItem.php?key=90&type=default&amount=1&option=null", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    fetch("https://api.nationsgame.net/nation/actions/purchase.php?type=items&key=90&amount=1", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    let a = await fetch("https://api.nationsgame.net/nation/getMissions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    let b = await a.json();
    b.forEach(function (x) {
        if (x.title == "Homeland Offense") { found = true; }
        console.log(x.title);
    });
}
