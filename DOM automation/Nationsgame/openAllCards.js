if (window.location.href == 'https://app.nationsgame.net/loot-crates') {
    response = await fetch("https://api.nationsgame.net/nation/getLootCrates.php?from=0&limit=9999999", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/loot-crates", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    rere = await response.json();
    for (let i = 0; i < rere.length; i++) {
        await fetch(`https://api.nationsgame.net/nation/actions/unbox.php?type=loot-crate&id=${rere[i].id}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/loot-crates", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    }
    console.log('done! crates might still be displayed, but refresh for proof that they have been opened.');
}
else if (window.location.href == 'https://app.nationsgame.net/card-packs') {
    response = await fetch("https://api.nationsgame.net/users/getCardPacks.php?from=0&limit=9999999", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/card-packs", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    rere = await response.json();
    for (let i = 0; i < rere.length; i++) {
        await fetch(`https://api.nationsgame.net/nation/actions/unbox.php?type=card-pack&id=${rere[i].id}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/card-packs", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    }
    console.log('done! packs might still be displayed, but refresh for proof that they have been opened.');
}
else { console.log("Literally where are you.. it isn't one of the urls this was meant for."); }
