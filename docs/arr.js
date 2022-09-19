var inp = document.getElementById("arr").innerText;
var ouTpt = document.createElement("h1");
var ary = document.createElement("div")


function getarr(){
    
ouTpt.innerText= inp.innerText;
ary.appendChild(ouTpt);

}

var a = [];
var b=prompt("number to push")
 a.push(b);
console.log(a)