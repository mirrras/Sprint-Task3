

let select = document.getElementById("select");
let tenge = document.getElementById("tenge");
let dollar = document.getElementById("dollar");
let euro = document.getElementById("euro");
let enterSum = document.getElementById("enterSum");
function getCurrency(){
if(select.value === "KZT"){
    tenge.value = " - "
    dollar.value = (enterSum.value/431).toFixed(2)
    euro.value = (enterSum.value/509).toFixed(2)
}else if (select.value === "USD"){
    dollar.value = " - "
    tenge.value = (enterSum.value * 429).toFixed(2)
    euro.value = (enterSum.value * 429 / 509).toFixed(2)
}else if(select.value === "EUR"){
    euro.value = " - "
    tenge.value = (enterSum.value * 507).toFixed(2)
    dollar.value = (enterSum.value * 507 / 431).toFixed(2)
}
}