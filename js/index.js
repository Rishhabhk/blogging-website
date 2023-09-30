let logbox = document.getElementsByClassName("login_con");
let black = document.getElementsByClassName("dark");
let cancel = document.getElementsByClassName("cancel_btn");

let regbox = document.getElementsByClassName("reg_container");
regbox[0].style.display = "none";
function show_reg(){
    if(regbox[0].style.display == "none"){
        regbox[0].style.display = "block";
        black[0].style.display = "block";
        regbox[0].style.opacity = "1";
    }
    else{
        black[0].style.display = "none";
        regbox[0].style.display = "none"
    }
}
function hide_reg(){
    regbox[0].style.display = "none";
    black[0].style.display = "none";
}

logbox[0].style.display = "none";
function show(){
    if(logbox[0].style.display == "none"){
        black[0].style.display = "block";
        logbox[0].style.display = "block";
        logbox[0].style.opacity = "1";
    }
    else{
        black[0].style.display = "none";
        logbox[0].style.display = "none";
    }
}
function hide(){
    black[0].style.display = "none";
    logbox[0].style.display = "none";
}