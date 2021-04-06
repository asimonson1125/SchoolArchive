function sleep(ms) { //make wait function
    return new Promise(resolve => setTimeout(resolve, ms));
}

while (document.getElementsByClassName('sc-eopZyb iThVJr') != undefined) { //while there are at least 5 cards left
    for (i = 5; i > 0; i--) {
        document.querySelector(`div:nth-child(${i}) > div.sc-gJWqzi.lgCjDF > button`).click();
        while (document.getElementsByClassName('sc-eopZyb iThVJr').length == 0) { // wait until pack appears
            await sleep(10);
        }
        document.querySelector("div.sc-ifAKCX.faVmmo").click();
        await sleep(1000);
    }
}

while (document.querySelector(`div:nth-child(1) > div.sc-gJWqzi.lgCjDF > button`) != undefined) {
    document.querySelector(`div:nth-child(1) > div.sc-gJWqzi.lgCjDF > button`).click();
    while (document.getElementsByClassName('sc-eopZyb iThVJr').length == 0) { // wait until close button appears
        await sleep(100);
    }
    document.querySelector("div.sc-ifAKCX.faVmmo").click();
    await sleep(1000);
}
