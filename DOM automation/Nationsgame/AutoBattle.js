let battleID = window.location.href.substring(35);
let finished = false;

let a = await fetch(`https://api.nationsgame.net/game/getBattleData.php?battle=${battleID}`, {
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
if (b.archived == 1) { finished = true; }
let units = b.attackers[0].groups[0].units;
if (!b.clickToResolve) {
  await fetch("https://api.nationsgame.net/nation/actions/useItem.php?key=88&type=default&amount=1&option=null", { //resolve battle items
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

function heal(units) {
  units.forEach(function (x) {
    if (x.current_health / x.unit_max_health < .4) {
      console.log('healed a unit');
      fetch(`https://api.nationsgame.net/nation/actions/useItem.php?key=37&type=boost&amount=1&option=${x.u_key}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    }
  });
}

function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}
while (!finished) {
  for (let i = 0; i < 5; i++) {
    fetch(`https://api.nationsgame.net/nation/actions/resolveAttack.php?battle=${battleID}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    await sleep(100);
  }
  heal(units);
}
