
var a = document.getElementById ("stylebutton");
function like(){
    if(a.style.color == "grey"){
        a.style.color = "#FF0000";
    }else{
        a.style.color = "grey";
    }
}
a.addEventListener('click', like);

var b = document.getElementById ("second");
function secondlike(){
    if(b.style.color == "grey"){
        b.style.color = "#FF0000";
    }else{
        b.style.color = "grey";
    }
}
b.addEventListener('click', secondlike);


var c = document.getElementById ("firstsave");
function saved(){
    if(c.style.color == "grey"){
        c.style.color = "black";
    }else{
        c.style.color = "grey";
    }
}
c.addEventListener('click', saved);

var d = document.getElementById ("save");
function save(){
    if(d.style.color == "grey"){
        d.style.color = "black";
    }else{
        d.style.color = "grey";
    }
}
d.addEventListener('click', save);




  

