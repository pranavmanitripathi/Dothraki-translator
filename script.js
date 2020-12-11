
var btntranslate = document.querySelector("#translate-button");
var txtinput = document.querySelector("#translate-input");
var otput = document.querySelector("#translate-output");

var serverurl ="https://api.funtranslations.com/translate/dothraki.json";

function generateurl(text){
    return serverurl +"?"+"text="+text;
}
function errorHandler(error){
    alert("something wrong with server! try again after some time")
}

function btntrans(){
    var inputtext =  txtinput.value;

    fetch(generateurl(inputtext)).
    then(response => response.json()).
    then(json => otput.innerText=json.contents.translated)
    .catch(errorHandler)
};


btntranslate.addEventListener("click", btntrans)
    