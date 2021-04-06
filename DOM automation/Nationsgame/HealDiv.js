let a = await fetch(`https://api.nationsgame.net/nation/getUnits.php?reserves=0&name=0&inCombat=0&type=0&division=${window.location.href.substring(37)}&from=0&limit=10`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
let b = await a.json();
b.forEach(function (x) {
  fetch(`https://api.nationsgame.net/nation/actions/useItem.php?key=37&type=boost&amount=1&option=${x.u_key}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
});
