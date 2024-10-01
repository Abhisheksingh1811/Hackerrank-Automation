const puppeteer= require("puppeteer");
const url="https://www.hackerrank.com/auth/login"
const email="abhisheksinghrollnumber1@gmail.com"
const password="Abhi@18112003"
const code=require("./code.js")

let page;// so that i can access all webpage elements in the TAB , in a TAB i can move across webpages  
const browseropenpromise=puppeteer.launch({headless:false, args : ['--start-maximized'],defaultViewport:null});
browseropenpromise.then(function (browserobj){
   const currpage= browserobj.pages()// returns list of all open TAB n by default ther is only one TAB, sooo we get the curr page object
   return currpage;

}).then(function (tablist){
    page=tablist[0];
    const gotologinpagepromise=page.goto(url);
    return gotologinpagepromise;
}).then(function(){
    let waitforemaibox=page.waitForSelector("input[aria-label='Your username or email']",{visible:true})
    return waitforemaibox
}).then(function (){
    const emailtypepromise=page.type("input[aria-label='Your username or email']",email,{delay:20})
    return emailtypepromise
}).then(function(){
    let waitforpswbox=page.waitForSelector("input[aria-label='Your password']",{visible:true})
    return waitforpswbox
}).then(function(){
    const pswtypepromise=page.type("input[aria-label='Your password']",password,{delay:20})
    return pswtypepromise
}).then(function(){
    const clicklogin=waitnclick("button[class='c-cUYkx c-cUYkx-dshqME-variant-primary c-cUYkx-fGHEql-isFullWidth-true c-cUYkx-ABeol-size-large hr-inline-flex hr-justify-center hr-align-center hr-p-y-1']",page)
    return clicklogin
}).then(function(){
    const clickalgo=waitnclick("a[data-attr1=algorithms]",page)
    return clickalgo
}).then(function(){
    const waitfor3sec= page.waitForSelector(".js-track-click.challenge-list-item")
    return waitfor3sec
}).then(function(){
    let allproblems=page.$$(".js-track-click.challenge-list-item")
    return allproblems
}).then(function(allproblems){
    const clicksolveprob=allproblems[0].click()
    return clicksolveprob
}).then(function(){
    const clickcustominput=waitnclick(".checkbox-input",page)
    return clickcustominput
}).then(function(){
    let waitnclickipbox=waitnclick("textarea.custominput",page)
    return waitnclickipbox
}).then(function(){
    const typecodepromise=page.type("textarea.custominput",code.answer[0],{delay:30})
    return typecodepromise
}).then(function(){
    const pressctrl=page.keyboard.down('Control')
    return pressctrl
}).then(function(){
    const pressA=page.keyboard.press('A',{delay:40})
    return pressA
}).then(function(){
    const pressX=page.keyboard.press('X',{delay:40})
    return pressX
}).then(function(){
    const unpressctrl=page.keyboard.up('Control')
    return unpressctrl
}).then(function(){
    const clickcodesec=waitnclick("div[role='code']",page)
    return clickcodesec
}).then(function(){
    const pressctrl=page.keyboard.down('Control')
    return pressctrl
}).then(function(){
    const pressA=page.keyboard.press('A',{delay:40})
    return pressA
}).then(function(){
    const pressV=page.keyboard.press('V' , {delay:40})
    return pressV
}).then(function(){
    const unpressctrl=page.keyboard.up('Control')
    return unpressctrl
}).then(function(){
    const clickrun=page.click("button[class='ui-btn ui-btn-normal ui-btn-secondary pull-right msR hr-monaco-compile hr-monaco__run-code ui-btn-styled']")
    return clickrun
}).then()


function waitnclick(selector,page){
    return new Promise(function(resolve,reject){
        let wait=page.waitForSelector(selector)
        wait.then(function(){
            let click=page.click(selector)
            return click
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject()
        })
    })
}