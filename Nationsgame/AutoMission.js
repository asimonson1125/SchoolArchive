var divID = 114762; //Yugoslavia's Less Gun
var missionID = 0;
var missionComplete = 0;
var mResponse = "failed";
var text = "failed";
var done = false;
var battling = false;
function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.onkeydown = function (event) { console.log('Key press detected.'); done = true; };
while (done != true) {
  await(async () => {
    mResponse = await fetch("https://api.nationsgame.net/nation/getMissions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    a = await mResponse.json(); // read response body as text
    missionID = a[0].id;
    missionComplete = a[0].completed;
  })()

  //check if already in battle
  let arr = await fetch("https://api.nationsgame.net/nation/getDivisions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
  let barr = await arr.json();
  battling = false;
  barr.forEach(function (x) {
    if (x.ugr_key == divID && x.ugr_battle == 1) {
      battling = true;
    }
  });

  if (missionComplete == 1) { //complete
    fetch(`https://api.nationsgame.net/nation/actions/completeMission.php?mission=${missionID}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    await sleep(5000);
  }
  else if (!battling) { // start new battle
    fetch(`https://api.nationsgame.net/nation/actions/startMission.php?mission=${missionID}&diff=1&division=${divID}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    await sleep(100000);
  }
  else { await sleep(100000); }

  //check if badly injured
  let aone = await fetch(`https://api.nationsgame.net/nation/getUnits.php?reserves=0&name=0&inCombat=0&type=0&division=${divID}&from=0&limit=10`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
  let bone = await aone.json();
  bone.forEach(function (x) {
    if (x.current_health / x.unit_max_health < .4) {
      console.log('healed a unit');
      fetch("https://api.nationsgame.net/nation/actions/purchase.php?type=items&key=37&amount=1", {
        "headers": {
          "accept": "application/json",
          "accept-language": "en-US,en;q=0.9",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        "referrer": "https://app.nationsgame.net/shop/items",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
      });
      fetch(`https://api.nationsgame.net/nation/actions/useItem.php?key=37&type=boost&amount=1&option=${x.u_key}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    }
  });

}
