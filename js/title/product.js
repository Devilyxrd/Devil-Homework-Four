var i = 0;
var title = ["Müzik Dükkanı","Hoşgeldiniz","İyi Alışverişler","Ürünlerimiz Sayfası","Made By Kaan"];
var duration = 4000;

function titleVar(){
    document.title = title[i];
    if(i < title.length -1){
    i++;
    }else{
	    i = 0;
    }
    setTimeout("titleVar()",duration);
}

window.onload = titleVar;



/**/

function p1(){
    document.getElementById("u1").style.opacity = "1";
    document.getElementById("u2").style.opacity = "0";
    document.getElementById("u3").style.opacity = "0";
    document.getElementById("u4").style.opacity = "0";
}

function p2(){
    document.getElementById("u1").style.opacity = "0";
    document.getElementById("u2").style.opacity = "1";
    document.getElementById("u3").style.opacity = "0";
    document.getElementById("u4").style.opacity = "0";
}

function p3(){
    document.getElementById("u1").style.opacity = "0";
    document.getElementById("u2").style.opacity = "0";
    document.getElementById("u3").style.opacity = "1";
    document.getElementById("u4").style.opacity = "0";
}

function p4(){
    document.getElementById("u1").style.opacity = "0";
    document.getElementById("u2").style.opacity = "0";
    document.getElementById("u3").style.opacity = "0";
    document.getElementById("u4").style.opacity = "1";
}
