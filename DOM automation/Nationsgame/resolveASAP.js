function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}
while (1) {
  fetch(`https://api.nationsgame.net/nation/actions/resolveAttack.php?battle=${window.location.href.substring(35)}`, { "credentials": "include", "headers": { "accept": "application/json", "accept-language": "en-US,en;q=0.9", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site" }, "referrer": `${window.location.href}`, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" });
  await sleep(100);
}
