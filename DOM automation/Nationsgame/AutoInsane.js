//------------------------------------------------------------------------------
//
// This script resolves insanes and heals your units until you are out of
// resolves.  When this happens, it'll heal all units with less than 90% HP
//
//------------------------------------------------------------------------------
let whdiv = 106746; //vengeance (for testing)

var missionID = 0;
var text = "failed";
let resp = "failed";
var done = false;
let lastOne = false;
var batteKey = false;
let battleCompleted = 0;


function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.onkeydown = function (event) { console.log('Key press detected.'); done = true; };

for (let i = 0; i < 9; i++) {
  await fetch("https://api.nationsgame.net/nation/actions/useItem.php?key=88&type=default&amount=1&option=null", { //resolve battle items
    "headers": {
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://app.nationsgame.net/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });
}

fetch("https://api.nationsgame.net/nation/actions/useItem.php?key=85&type=default&amount=1&option=null", { //loot token boost
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://app.nationsgame.net/",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

async function getNewMission() {
  let found = false;
  let acceptableMissions = ["Arctic Drill", "Suppressing the Khev Minosk", "Riot Control", "It's the Least We Can Do", "Supply Raid", "Temperate Terrorists"];
  let a = await fetch("https://api.nationsgame.net/nation/getMissions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
  let b = await a.json();
  acceptableMissions.forEach(function (x) {
    if (b[0].title == x) { found = true; }
  });
  while (!found) {
    await sleep(1000);
    await fetch("https://api.nationsgame.net/nation/actions/useItem.php?key=90&type=default&amount=1&option=null", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    fetch("https://api.nationsgame.net/nation/actions/purchase.php?type=items&key=90&amount=1", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    let a = await fetch("https://api.nationsgame.net/nation/getMissions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    let b = await a.json();
    acceptableMissions.forEach(function (x) {
      if (b[0].title == x) { found = true; }
    });
  }
  return (b[0].id);
}


getNewMission();
while (!done) {

  //check if already in battle
  let arr = await fetch("https://api.nationsgame.net/nation/getDivisions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
  let barr = await arr.json();
  battleKey = 0;
  barr.forEach(function (x) {
    if (x.ugr_key == whdiv) {
      battleKey = x.battle_key;
    }
  });
  if (battleKey == 0) { //div is not battling
    await sleep(5000);
    await(async () => { //get mission id
      resp = await fetch("https://api.nationsgame.net/nation/getMissions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
      a = await resp.json();
      missionID = a[0].id;
      battleCompleted = a[0].completed;
    })();
    if (battleCompleted == 1) { //complete
      fetch(`https://api.nationsgame.net/nation/actions/completeMission.php?mission=${missionID}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
      await sleep(5000);
    }
    missionID = await getNewMission();

    if (lastOne) { done = true; }
    //deployment
    await fetch(`https://api.nationsgame.net/nation/actions/startMission.php?mission=${missionID}&diff=5&division=${whdiv}`, {
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


    let newkey = await fetch("https://api.nationsgame.net/nation/getDivisions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    let newkey2 = await newkey.json();
    battleKey = 0;
    newkey2.forEach(function (x) {
      if (x.ugr_key == whdiv) {
        battleKey = x.battle_key;
      }
    });
    if (battleKey != 0) {
      let resolveLimit = await fetch(`https://api.nationsgame.net/game/getBattleData.php?battle=${battleKey}`, {
        "headers": {
          "accept": "application/json",
          "accept-language": "en-US,en;q=0.9",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        "referrer": `https://app.nationsgame.net/battle/${battleKey}`,
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
      });
      let resolveLimitjson = await resolveLimit.json();
      if (resolveLimitjson.userResolveLimit) {
        lastOne = true;
        done = true;
        let aone = await fetch(`https://api.nationsgame.net/nation/getUnits.php?reserves=0&name=0&inCombat=0&type=0&division=${whdiv}&from=0&limit=10`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
        let bone = await aone.json();
        bone.forEach(function (x) {
          if (x.current_health / x.unit_max_health < .9) {
            console.log('healed a unit in the final battle');
            fetch(`https://api.nationsgame.net/nation/actions/useItem.php?key=37&type=boost&amount=1&option=${x.u_key}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
          }
        });

      }
    }
  }
  else if(!done){
    //now resolve

    for (let resnum = 20; resnum > 0; resnum--) {
      fetch(`https://api.nationsgame.net/nation/actions/resolveAttack.php?battle=${battleKey}`, {
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

    //and heal
    let aone = await fetch(`https://api.nationsgame.net/nation/getUnits.php?reserves=0&name=0&inCombat=0&type=0&division=${whdiv}&from=0&limit=10`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    let bone = await aone.json();
    bone.forEach(function (x) {
      if (x.current_health / x.unit_max_health < .4) {
        console.log('healed a unit');
        fetch(`https://api.nationsgame.net/nation/actions/useItem.php?key=37&type=boost&amount=1&option=${x.u_key}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
      }
    });

  }
  await sleep(2000);
}
