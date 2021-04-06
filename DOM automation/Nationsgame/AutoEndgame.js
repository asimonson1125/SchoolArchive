let insaneDiv = 106746; //vengeance
let cycleDiv = 0; //Plump?

var missionID = 0;
var response = "failed";
var text = "failed";
var done = false;
var batteKey = false;
let completed = 0;
let insane = true;


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
  let insane = false;
  let acceptableMissions = ["Arctic Drill", "Suppressing the Khev Minosk", "Riot Control", "It's the Least We Can Do", "Supply Raid"];
  let a = await fetch("https://api.nationsgame.net/nation/getMissions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
  let b = await a.json();
  acceptableMissions.forEach(function (x) {
    if (b[0].title == x) {
      insane = true;
    }
  });
  if (insane) { return ([b[0].id, true]); } else { return ([b[0].id, false]); }
}

while (!done) {

  //check if already in battle
  let arr = await fetch("https://api.nationsgame.net/nation/getDivisions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
  let barr = await arr.json();
  battleKey = 0;
  barr.forEach(function (x) {
    if (x.ugr_key == insaneDiv || x.ugr_key == cycleDiv) {
      if (x.battle_key != 0) {
        battleKey = x.battle_key;
      }
    }
  });
  if (battleKey == 0) { //div is not battling
    await(async () => { //get mission id
      response = await fetch("https://api.nationsgame.net/nation/getMissions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
      a = await response.json();
      missionID = a[0].id;
      completed = a[0].completed;
    })();
    if (completed == 1) { //complete
      fetch(`https://api.nationsgame.net/nation/actions/completeMission.php?mission=${missionID}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
      await sleep(5000);
    }
    let newmission = await getNewMission();
    missionID = newmission[0];

    //deployment
    if (newmission[1]) {
      insane = true;
      await fetch(`https://api.nationsgame.net/nation/actions/startMission.php?mission=${missionID}&diff=5&division=${insaneDiv}`, {
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
    else {
      insane = false;
      await fetch(`https://api.nationsgame.net/nation/actions/startMission.php?mission=${missionID}&diff=1&division=${cycleDiv}`, {
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
  }
  else {
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
    let divtoheal;
    if (insane) { divtoheal = insaneDiv; } else { divtoheal = cycleDiv; }
    let aone = await fetch(`https://api.nationsgame.net/nation/getUnits.php?reserves=0&name=0&inCombat=0&type=0&division=${divtoheal}&from=0&limit=10`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
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
