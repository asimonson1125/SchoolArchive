response = await fetch("https://api.nationsgame.net/nation/getLootCrates.php?from=0&limit=9999999", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/loot-crates", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
rere = await response.json();
rere.forEach(function (x) {
    fetch(`https://api.nationsgame.net/nation/actions/unbox.php?type=loot-crate&id=${x.id}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/loot-crates", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
});

//buy crates proto?
//for(let i = 0; i < 25; i ++){
//    fetch("https://api.nationsgame.net/nation/actions/purchase.php?type=loot-crates&key=4&withCoins=0", {"credentials":"include","headers":{"accept":"application/json","accept-language":"en-US,en;q=0.9","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},"referrer":"https://app.nationsgame.net/shop/loot-crates","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"});
//}
//console.log('Finished!');
