let rarity = 'Common';
let e = await fetch(`https://api.nationsgame.net/nation/getEquipment.php?search=1&onlyUnequipped=1&hp=0&defense=0&attack=0&speed=0&defHome=0&strOther=0&strClimate=0&strGain=0&healing=0&from=0&limit=5000&rarity=${rarity}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/equipment", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
let egg = await e.json();
let foils = 0;
discard = [];
egg.forEach(function (x) {
  if (x.equipment_foil == 0) {
    discard.push(x);
  }
  else { foils += 1; }
});
discardStr = "[" + discard[0].equipment_id;
for (let i = 1; i < discard.length; i++) {
  discardStr += "," + discard[i].equipment_id;
}
discardStr += "]";
let a = await fetch("https://api.nationsgame.net/nation/actions/discardEquipment.php", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryX4KhZS6RAVc1IYml",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://app.nationsgame.net/equipment",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": `------WebKitFormBoundaryX4KhZS6RAVc1IYml\r\nContent-Disposition: form-data; name=\"json\"\r\n\r\n{\"equipment\":${discardStr}}\r\n------WebKitFormBoundaryX4KhZS6RAVc1IYml--\r\n`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
let b = await a.json();
console.log(b);
