let battleid = window.location.href.substring(35)
let a = await fetch(`https://api.nationsgame.net/game/getBattleFeed.php?battle=${battleid}&after=3036401`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `https://app.nationsgame.net/battle/${battleid}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
let b = await a.json();
let lestring = "";
b.forEach(function (x) {
    lestring = lestring.concat(x.b_log_target);
    lestring = lestring.concat("\n");
});
console.log(lestring);
