let divs = [112918, 113137, 112273, 108639]; //Casca Replacement 2, Replacement 3, Persistence 2, BATTLESTACK
let interrupted = false;

function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function healHurt() {
  for (let i = 0; i < divs.length; i++) {
    let aone = await fetch(`https://api.nationsgame.net/nation/getUnits.php?reserves=0&name=0&inCombat=0&type=0&division=${divs[i]}&from=0&limit=10`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
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
}
document.onkeydown = function (event) { console.log('Key press detected.'); interrupted = true; };
await healHurt();
//toggle mobilize with fetch("https://api.nationsgame.net/nation/actions/toggleMobilize.php?division=107753", {"credentials":"include","headers":{"accept":"application/json","accept-language":"en-US,en;q=0.9","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},"referrer":"https://app.nationsgame.net/military/107753","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"});

while (!interrupted) {
  let a = await fetch("https://api.nationsgame.net/nation/getDivisions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
  let b = await a.json();
  for (let i = 0; i < b.length; i++) {
    inArray = false;
    divs.forEach(function (x) {
      if (b[i].ugr_key == x) { inArray = true; }
    });
    if (inArray && b[i].ugr_trvl_time == 0 && b[i].ugr_battle == 0) {
      fetch(`https://api.nationsgame.net/nation/actions/deployDivision.php?division=${b[i].ugr_key}&val=pkx`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    }
  }
  await healHurt();
  await sleep(20000);
  await healHurt();
  await sleep(30000);
}
