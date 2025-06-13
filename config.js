

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApikey();

function checkApikey(){
    if (localStorage.getItem("apiKey")){
        window.open("open-api-key.html","_self")
    }
    return localStorage.getItem("apiKey");
}