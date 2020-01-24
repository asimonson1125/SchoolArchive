//wait function not necessary but it may help get the intended number of packs.

var toBuy = 1000;
var timeToSleep = 100; //(in ms)

function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}

for(var i = 0; i < toBuy; i++){
  fetch("https://api.nationsgame.net/nation/actions/purchase.php?type=card-packs&key=5&withCoins=0", {"credentials":"include","headers":{"accept":"application/json","accept-language":"en-US,en;q=0.9","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},"referrer":"https://app.nationsgame.net/shop/card-packs","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"});
  await sleep(timeToSleep);
}
