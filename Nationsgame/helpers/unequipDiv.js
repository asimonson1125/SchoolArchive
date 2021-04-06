let a = await fetch(`https://api.nationsgame.net/nation/getUnits.php?reserves=0&name=0&inCombat=0&type=0&division=${window.location.href.substring(37)}&from=0&limit=10`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
let b = await a.json();
await b.forEach(async function (unit) {
  let c = await fetch(`https://api.nationsgame.net/nation/getUnit.php?key=${unit.u_key}&archived=false&insurgent=false&battle=0`, {
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
  let d = await c.json();
  Object.values(d.equipment).forEach(function (x) {
    if (x.equipment.equipment_id != undefined) {
      //unequip
      fetch(`https://api.nationsgame.net/nation/actions/equipUnit.php?unequip=1&id=${unit.u_key}&equipment=${x.equipment.equipment_id}`, {
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
  });
});
