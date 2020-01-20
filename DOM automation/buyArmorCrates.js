function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}

var intended = 100;
for(var i = 0; i < intended; i++){
  await sleep(300);
  console.log(i);
  fetch("https://api.nationsgame.net/nation/actions/purchase.php?type=loot-crates&key=1&withCoins=0", {"credentials":"include","headers":{"accept":"application/json","accept-language":"en-US,en;q=0.9","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},"referrer":"https://app.nationsgame.net/shop/loot-crates","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"});
}
