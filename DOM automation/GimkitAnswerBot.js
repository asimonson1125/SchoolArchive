// ==UserScript==
// @name         GimkitBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  answer gimkit questions with key
// @author       You
// @match        https://addons.mozilla.org/en-US/firefox/search/?q=scriptmonkey&type=extension
// @grant        none
// @include      *https://www.gimkit.com/live/*
// ==/UserScript==



(async function () {
    'use strict';
    let noShop = true;
    while (true) {
        await sleep(100);
        if (document.querySelector("div.sc-eGMfeR.iMmzoX > span:nth-child(2) > div > div > div") != null && noShop){
            document.querySelector("div.sc-eGMfeR.iMmzoX > span:nth-child(2) > div > div > div").click(); //NEXT QUESTION
            await sleep(200);
        }
        else{
            solveQuestion();
        }
    }

})();


function sleep(ms) { //make wait function
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function solveQuestion() {
    let id = 0;
    id = await findAnswer(document.querySelector("div.sc-bEGMXy.iIPRna > div > div > div > div > span").textContent);
    if (id == -1) {
        return "stopping bot...";
    }
    //document.querySelector(`div.sc-fQrEfc.FYAWt > div:nth-child(${id}) > div > div > div`).click(); //SELECT ANSWER
    for(let i = 1; i <=4; i++){
        if(i != id){
            document.querySelector(`div.sc-fQrEfc.FYAWt > div:nth-child(${i}) > div > div > div`).remove();
        }
    }
    await sleep(500);
    if (document.querySelector("div.sc-eGMfeR.iMmzoX > span:nth-child(2) > div > div > div") != null){
    document.querySelector("div.sc-eGMfeR.iMmzoX > span:nth-child(2) > div > div > div").click();//NEXT QUESTION
    }
}

function findAnswer(question) {
    let answer = "unknown";
    switch (question) {
        case "What should you do when you arrive in the morning?":
            answer = "Locker, breakfast if you need it, Period 1";
            break;
        case "What time will BHS's doors open for students?":
            answer = "8:30 a.m.";
            break;
        case "Which way can you walk on the Ramp?":
            answer = "Up";
            break;
        case "Where should you sit in the Cafeteria?":
            answer = "at a sticker";
            break;
        case "When walking in the halls, you should...":
            answer = "follow the arrows";
            break;
        case "How should you wear your mask?":
            answer = "over your nose & mouth";
            break;
        case "Who has to change clothes for PE/Weightlifting?":
            answer = "No one";
            break;
    }
    if (answer == "unknown") {
        console.log("Answer could not be identified.");
        return -1;
    }
    else {
        console.log("answer: " + answer);
        for (let i = 1; i < 5; i++) {
            if (document.querySelector(`div.sc-fQrEfc.FYAWt > div:nth-child(${i}) > div > div > div > div > span`).textContent.includes(answer)) {
                console.log(`answer #${i}`);
                return (i);
            }
        }
        console.log("Answer not displayed on quiz");
        return -1;
    }
}

function simulate(element, eventName) {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers) {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent) {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents') {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
                options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
                options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}
