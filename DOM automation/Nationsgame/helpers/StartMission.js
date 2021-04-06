var divID = 104575; //yugo's plump div
var missionID = 0;
var response = "failed";
var text = "failed";
var done = false;
document.onkeydown = function (event) { console.log('Key press detected.'); done = true; };
await(async () => {
    response = await fetch("https://api.nationsgame.net/nation/getMissions.php", { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
    text = await response.text(); // read response body as text
    missionID = text.substring(8, 14);
    console.log(missionID);
})()
if (text.substring(38, 39) == '1') {
    fetch(`https://api.nationsgame.net/nation/actions/completeMission.php?mission=${missionID}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
}
else {
    fetch(`https://api.nationsgame.net/nation/actions/startMission.php?mission=${missionID}&diff=1&division=${divID}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": "https://app.nationsgame.net/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
}
