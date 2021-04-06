//slow as all hell, probably because of queryselector
function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}
let a = await fetch("https://api.nationsgame.net/nation/getEquipment.php?search=1&onlyUnequipped=0&hp=0&defense=0&attack=0&speed=0&defHome=0&strOther=0&strClimate=0&strGain=0&healing=0&from=0&limit=99990", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/equipment", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
let b = await a.json();
for (let i = 0; i < b.length; i++) {
  if (b[i].equipment_loan == 1) {
    document.querySelector(`#equipment_select_eq_${b[i].equipment_id}`).click();
    await sleep(20);
  }
}
