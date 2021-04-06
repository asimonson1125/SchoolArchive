
function PercentHP(input) {
    var numerator = -1;
    var denominator = -1;

    for (index = 0; index < input.length; index++) {
        if (input[index] === " ") {
            if (numerator == -1) { //if the numerator hasn't already been found, set the numerator
                numerator = parseInt(input.slice(0, index));
            }
            else { //this must be the denominator
                denominator = parseInt(input.slice(index + 1));
            }
        }
    }
    return (numerator / denominator);
}


function readyToDeploy(minPercent, minUnits) {
    var numOfUnits = 1;
    var deploy = true;
    while (document.querySelector(`div.sc-gPzReC.glOReZ > div.sc-likbZx.gVyuXQ > div:nth-child(2) > div > div > div:nth-child(${numOfUnits}) > div:nth-child(2) > div.sc-hSdWYo.iYWPDK > div > div:nth-child(4) > div.sc-esjQYD.gNEOvj > div.sc-kIPQKe.dkbgRq`) != undefined) { //count num of units in division
        numOfUnits++;
    }
    numOfUnits--;
    if (numOfUnits < minUnits) { deploy = false; }

    for (unitNum = 1; unitNum <= numOfUnits; unitNum++) {
        if (PercentHP(document.querySelector(`div.sc-gPzReC.glOReZ > div.sc-likbZx.gVyuXQ > div:nth-child(2) > div > div > div:nth-child(${unitNum}) > div:nth-child(2) > div.sc-hSdWYo.iYWPDK > div > div:nth-child(4) > div.sc-esjQYD.gNEOvj > div.sc-kIPQKe.dkbgRq`).textContent) < minPercent / 100) {
            deploy = false;
        }
    }
    return (deploy);
}

console.log(readyToDeploy(50, 10)); //call the function to determine if all units are healthy enough to be deployed.  Input is minimum health in percent, then minimum number of units in division.