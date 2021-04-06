let a = await fetch(`https://api.nationsgame.net/game/getBattleData.php?battle=${window.location.href.substring(35)}`, {
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

let str = "";
let unit = 0;
b.defenders[0].groups[0].units.forEach(function (x) { unit++; str += x.u_key; str += "\n" });
str += "\n";
b.defenders[1].groups[0].units.forEach(function (x) { unit++; str += x.u_key; str += "\n" });
str += "\n\n\n";
b.attackers[0].groups[0].units.forEach(function (x) { unit++; str += x.u_key; str += "\n" });
str += "\n";
b.attackers[1].groups[0].units.forEach(function (x) { unit++; str += x.u_key; str += "\n" });
console.log(str);
