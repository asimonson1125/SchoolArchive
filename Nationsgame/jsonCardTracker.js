let a = 0;
let b = 0;
let ones = 0;
let oneleg = 0;
let twos = 0;
let twoleg = 0;
let threes = 0;
let threeleg = 0;
let fours = 0;
let fourleg = 0;
let fives = 0;
let fiveleg = 0;

async function crates(){
if (window.location.href == 'https://app.nationsgame.net/loot-crates') {
    let c = await fetch("https://api.nationsgame.net/nation/getLootCrates.php?from=0&limit=9999999", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/loot-crates", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    let d = await c.json();
    for (let i = 0; i < d.length; i++) {
        a = await fetch(`https://api.nationsgame.net/nation/actions/unbox.php?type=loot-crate&id=${d[i].id}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/loot-crates", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
        b = await a.json();
        for (let ii = 0; ii < b.length; ii++) {
            if (b[ii].equipment_rarity == 1) {
                ones++;
                if (b[ii].equipment_foil != 0) {
                    oneleg++;
                }
            }
            else if (b[ii].equipment_rarity == 2) {
                twos++;
                if (b[ii].equipment_foil != 0) {
                    twoleg++;
                }
            }
            else if (b[ii].equipment_rarity == 3) {
                threes++;
                if (b[ii].equipment_foil != 0) {
                    threeleg++;
                }
            }
            else if (b[ii].equipment_rarity == 4) {
                fours++;
                if (b[ii].equipment_foil != 0) {
                    fourleg++;
                }
            }
            else if (b[ii].equipment_rarity == 5) {
                fives++;
                if (b[ii].equipment_foil != 0) {
                    fiveleg++;
                    for(let stat = 0; stat < b[ii].equipment_stats.length; stat++){
                        console.log(b[ii].equipment_stats[stat]);
                    }
                    console.log("------------");
                }
            }
        }
    }
    console.log(`${ones} commons.  ${oneleg} of them are foil.`);
console.log(`${twos} uncommons.  ${twoleg} of them are foil`);
console.log(`${threes} rares.  ${threeleg} of them are foil.`);
console.log(`${fours} epics.  ${fourleg} of them are foil.`);
console.log(`${fives} legendaries.  ${fiveleg} of them are foil.`);
}
}

async function cards(){
if (window.location.href == 'https://app.nationsgame.net/card-packs') {
    let c = await fetch("https://api.nationsgame.net/users/getCardPacks.php?from=0&limit=9999999", { "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/card-packs", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors", "credentials": "include" });
    let d = await c.json();
    for (let i = 0; i < d.length; i++) {
        a = await fetch(`https://api.nationsgame.net/nation/actions/unbox.php?type=card-pack&id=${d[i].id}`, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://app.nationsgame.net/card-packs",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });
        b = await a.json();
        for (let ii = 0; ii < b.length; ii++) {
            if (b[ii].rarity == 1) {
                ones++;
                if (b[ii].foil != 0) {
                    oneleg++;
                }
            }
            else if (b[ii].rarity == 2) {
                twos++;
                if (b[ii].foil != 0) {
                    twoleg++;
                }
            }
            else if (b[ii].rarity == 3) {
                threes++;
                if (b[ii].foil != 0) {
                    threeleg++;
                }
            }
            else if (b[ii].rarity == 4) {
                fours++;
                if (b[ii].foil != 0) {
                    fourleg++;
                }
            }
            else if (b[ii].rarity == 5) {
                fives++;
                if (b[ii].foil != 0) {
                    fiveleg++;
                }
            }
        }
    }
    console.log(`${ones} commons.  ${oneleg} of them are foil.`);
console.log(`${twos} uncommons.  ${twoleg} of them are foil`);
console.log(`${threes} rares.  ${threeleg} of them are foil.`);
console.log(`${fours} epics.  ${fourleg} of them are foil.`);
console.log(`${fives} legendaries.  ${fiveleg} of them are foil.`);
}
}


crates();
cards(); 
