var i = 0;
var title = ["Müzik Dükkanı","Hoşgeldiniz","İyi Alışverişler","Hakkımızda Sayfası","Made By Kaan"];
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