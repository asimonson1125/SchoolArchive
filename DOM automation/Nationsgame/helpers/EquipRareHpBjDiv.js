let a = await fetch("https://api.nationsgame.net/nation/getEquipment.php?search=1&onlyUnequipped=1&hp=1&defense=0&attack=0&speed=0&defHome=0&strOther=0&strClimate=0&strGain=0&healing=0&from=0&limit=500&slot=7&rarity=Rare", {
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

let ua = await fetch(`https://api.nationsgame.net/nation/getUnits.php?reserves=0&name=0&inCombat=0&type=0&division=${window.location.href.substring(37)}&from=0&limit=10`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
let ub = await ua.json();

for (let i = 0; i < 10; i++) { // assumes 10 units per division
  fetch(`https://api.nationsgame.net/nation/actions/equipUnit.php?id=${ub[i].u_key}&equipment=${b[i + 1].equipment_id}`, { //errs when equipment 0 is used
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

}
