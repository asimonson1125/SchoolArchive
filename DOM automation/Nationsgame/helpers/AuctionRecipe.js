let id = 75; //put recipe id here (same as one you use to buy recipe from shop)
let base = 10000;
let buyout = 50000;

/*
Known recipe ids:
57 - Yeti Bane
62 - General Stratton's Helment
67 - Tind Terminator and Tracker
72 - Overtuned Jackhammer
75 - Reconfigured Sectopod
78 - Uriel's Chosen
81 - Acquirer
*/

async function auction(id, base, buyout) {
    let a = await fetch(`https://api.nationsgame.net/nation/actions/postItemOnAuction.php?type=item&id=${id}&base=${base}&buyout=${buyout}`, {
        "headers": {
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": window.location.href,
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });

    let b = await a.json();
    return(b.text[0]);
}
await auction(id,base,buyout);