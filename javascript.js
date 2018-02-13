var qoute=["There once was a time when all people believed in God and the church ruled. This time was called the Dark Ages.",
" 	Philosophy is questions that may never be answered. Religion is answers that may never be questioned.",
"If god doesn't like the way I live, Let him tell me, not you.","The invisible and the non-existent look very much alike" ];

function myFunction(){
    document.getElementById("demo").innerHTML=qoute[Math.floor(Math.random()*3)];
}

function black(){
    var elem = document.getElementById("demo");
    elem.style.color = "black";
    elem.style.fontSize = "25px";
    elem.style.fontFamily = "monospace"
    
}
function red(){
    var elem = document.getElementById("demo");
    elem.style.color = "Red";
    elem.style.fontSize = "30px";
    elem.style.fontFamily = "sans-serif"
    
}

function green(){
    var elem = document.getElementById("demo");
    elem.style.color = "Green";
    elem.style.fontSize = "35px";
    elem.style.fontFamily = "cursive"
    
}

function blue(){
    var elem = document.getElementById("demo");
    elem.style.color = "Blue";
    elem.style.fontSize = "40px";
    elem.style.fontFamily = "fantasy"
    
}