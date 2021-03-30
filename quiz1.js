function change()
{
    var btn = document.createElement("button");
    btn.innerHTML = "Change this document.";
    document.body.appendChild(btn);
    btn.addEventListener("click", myFunction);
}        
function myFunction()
{
    var header = document.getElementById("hid");
    header.innerHTML= "CSIE@CGU";
    var para = document.getElementById("pid");
    para.innerHTML = "怎麼那麼棒!!";
}