var con = document.querySelector("#container");
var icon = document.querySelector("i");
var like = document.querySelector("#like");

con.addEventListener("dblclick", function(){
    icon.style.transform = 'translate(-50%, -50%) scale(1)';
    icon.style.opacity = 0.8;
    like.innerHTML = 5578+1;
})

setTimeout(function(){
    icon.style.transform = 'translate(-50%, -50%) scale(0)';
    icon.style.opacity = 0;
},1500)