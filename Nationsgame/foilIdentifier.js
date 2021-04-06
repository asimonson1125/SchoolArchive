let rarity = 'Legendary';
let e = await fetch(`https://api.nationsgame.net/nation/getEquipment.php?search=1&onlyUnequipped=0&hp=0&defense=0&attack=0&speed=0&defHome=0&strOther=0&strClimate=0&strGain=0&healing=0&from=0&limit=5000&rarity=${rarity}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/equipment", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
let egg = await e.json();
let foils = 0;
egg.forEach(function (x) {
    if (x.equipment_foil == 0) {
        document.querySelector(`div.sc-likbZx.gVyuXQ > div:nth-child(2) > div > div > div:nth-child(${foils + 1})`).remove();
    }
    else { foils += 1; }
});
