var skipped = [3, 'yak farm']; //skips the 3rd factory (and fictional 50th).  Add more factory numbers/names to the array if needed.



var skip;
var factoryName;

var factoryCounter = 1;
while (document.querySelector(`div:nth-child(${factoryCounter}) > div.sc-gJWqzi.kedtgp > button:nth-child(1)`) != undefined){ //find number of factories
    factoryCounter++;
}
var numOfFactories = --factoryCounter;
console.log(`There are ${numOfFactories} factories.`);




function sleep(ms) { //make wait function
  return new Promise(resolve => setTimeout(resolve, ms));
}



for(factoryNum = 1; factoryNum <= numOfFactories; factoryNum++){ //for every factory...
    skip = false;
    factoryName = (document.querySelector(`div:nth-child(${factoryNum}) > div.sc-jVODtj.hbFKfI > div > div`).textContent);
    console.log(`checking factory '${factoryName}'`);
    for(skipdex = 0; skipdex < skipped.length; skipdex++){ //check if factory is to be skipped
        if(factoryNum == skipped[skipdex] || factoryName.toLowerCase() == skipped[skipdex]){
            skip = true;
        }
    }

    if(!skip){ //and if it isn't skipped, collect from it.
        document.querySelector(`div:nth-child(${factoryNum}) > div.sc-gJWqzi.kedtgp > button:nth-child(1)`)
.click();
        if(document.querySelector("div:nth-child(3) > button:nth-child(1)") != undefined){ // make sure the factory hasn't already been collected
            await sleep(2000);
            document.querySelector("div:nth-child(1) > div > div > div:nth-child(3) > button:nth-child(2)").click();
        }
        await sleep(3500);
        if (document.querySelector("div:nth-child(3) > button:nth-child(2)") != undefined){ // if the cancel button is still there, skip this factory.
            document.querySelector("div:nth-child(1) > div > div > div:nth-child(3) > button:nth-child(1)").click();
            console.log(`skipping factory number ${factoryNum} (${factoryName}) due to either lack of resources or unknown error`);
        }
    }
    else{
        console.log(`skipping factory number ${factoryNum} (${factoryName}) due to 'skipped' array`);
    }
}