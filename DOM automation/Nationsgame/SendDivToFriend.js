let TARGETDIVISIONID = 109563;
let CURRENTDIVISIONID = 104575;
let units = [];
let a = await fetch(`https://api.nationsgame.net/nation/getUnits.php?reserves=0&name=0&inCombat=0&type=0&division=${CURRENTDIVISIONID}&from=0&limit=10`, {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": `https://app.nationsgame.net/military/${CURRENTDIVISIONID}`,
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
let b = await a.json();
b.forEach(function (x) {
  units.push(parseInt(x.u_key));
});
units.forEach(function (TARGETUNITID) {
  fetch("https://api.nationsgame.net/nation/actions/addUnitsToDivision.php", {
    "headers": {
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryUER66DUTQkg71WBR",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": `https://app.nationsgame.net/military/${CURRENTDIVISIONID}`,
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `------WebKitFormBoundaryUER66DUTQkg71WBR\r\nContent-Disposition: form-data; name=\"json\"\r\n\r\n{\"group\":3,\"division\":\"${TARGETDIVISIONID}\",\"units\":[\"${TARGETUNITID}\"]}\r\n------WebKitFormBoundaryUER66DUTQkg71WBR--\r\n`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
});
