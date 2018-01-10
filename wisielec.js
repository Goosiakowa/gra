var haslo="Bez pracy nie makołacy";
haslo=haslo.toUpperCase();//zamienia na duże litery

var dlugosc = haslo.length;//length to atrybut cecha
var haslo1 = "";

for(i=0; i<dlugosc; i++){
    if (haslo.charAt(i)==" ") 
        haslo1=haslo1 + " ";
    else 
        haslo1=haslo1 + "-";
}

function wypisz_hasło(){
    document.getElementById("plansza").innerHTML=haslo1;
    
}

window.onload=wypisz_hasło;