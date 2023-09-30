let mb = document.getElementsByClassName("my_blog_con");
let sb = document.getElementsByClassName("saved_blog_con");
let mbh = document.getElementsByClassName("my_blog_head");
let sbh = document.getElementsByClassName("saved_blog_head");
mbh[0].style.cssText = "background-color:#3f487e;"
function show_sb(){
    if(mb[0].style.display != "none"){
        mbh[0].style.cssText = "background-color:#869dfb37;"
        sbh[0].style.cssText = "background-color: #3f487e;"
        mb[0].style.display = "none";
        sb[0].style.display = "grid";
    }
}
function show_mb(){
    if(sb[0].style.display != "none"){
        sbh[0].style.cssText = "background-color:#869dfb37;"
        mbh[0].style.cssText = "background-color: #3f487e;"
        sb[0].style.display = "none";
        mb[0].style.display = "grid";
    }
}

function create_blog(){
    let inp_title = document.getElementById("title").value;
    let inp_blog_desc = document.getElementById("blog_desc").value;
    let inp_blog_img = document.getElementById("blog_img");

    let bcon = document.getElementsByClassName("my_blog_con");
    let blogs = document.getElementsByClassName("blogs");
    let binner = blogs[0].innerHTML;
   
    let newdiv = document.createElement("div");
    newdiv.setAttribute("class","blogs");
    newdiv.innerHTML = binner;
    
    bcon[0].insertAdjacentElement("afterbegin",newdiv);
    let img =  newdiv.childNodes[5].childNodes[1].childNodes[1].childNodes[0];

    newdiv.childNodes[5].childNodes[3].childNodes[1].innerHTML = inp_title;
    newdiv.childNodes[5].childNodes[3].childNodes[3].innerHTML = inp_blog_desc;
    img.src = URL.createObjectURL(inp_blog_img.files[0]);;
}
