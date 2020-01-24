var intended = 100; //set to max packs to buy
var packnum = 4; //1 for infantry, 2 for rare infantry, 3 for epic infantry, 4 for armor, 7 for air, 10 for Special Forces, 13 for static.
//16 for 'crate'. It used up all of my loot tokens.  Not a good idea.

function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}

for(var i = 0; i < intended; i++){
  await sleep(300);
  console.log(i);
  fetch(`https://api.nationsgame.net/nation/actions/purchase.php?type=loot-crates&key=${packnum}&withCoins=0`, {"credentials":"include","headers":{"accept":"application/json","accept-language":"en-US,en;q=0.9","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},"referrer":"https://app.nationsgame.net/shop/loot-crates","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"});
}

