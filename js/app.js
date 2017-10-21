
console.log("działa!");
//string
var myText1 = "lalala";
console.log(myText1);
var myString1 = "34";

//number - liczba
var myNumber = 2.2;
var myNumber2 = 8;
console.log(myNumber + myNumber2);

//wartości logiczne
var prawda = true;
var falsz = false;
console.log(prawda);

//tablice -
var tablica = [1,2,3]; // ile jest tutaj elementów ? 3
//na jakiej pozycji jest licz2? na pierwszej
console.log(tablica);
console.log(tablica[1]);

//mozemy pobrać długość tablicy
console.log(tablica.length);

var tablica2 = ["jabłko","gruszka"];
console.log(tablica2);
console.log(tablica2[1]);

var tablica3 = ["jabłko","gruszka", 5, true];// można przetrzymywać rózne zmienne

//FUNCKJE
//funkcje -tworzą "ogrodzenie", gdzie można napisać czynności-funkcjonalności; są poto to zeby coś robić, a zmienne aby coś przechowywać
// to jak sokowirówka,tzreba coś włożyć , włączyć

function wypisywanie(owoc){// - w nawiasie(jest nowa zmienna var o naziwe owoc)nazwa zmiennej pod któą zossta var owoc="marchewka" ; PARAMETR OWOC
//funcje robimy ,aby coś zwracać
	var sok = "miksowanie" + owoc;
	return sok;
}

var otrzymanySok = wypisywanie("marchewka"); //uruchamianie funkcji - tu właczamy, czylli jest wejściem
console.log(otrzymanySok);
//w nawiasach można coś wrzucić - np. zmienne, lub typy danych; to funkcja z argumentem
console.log(wypisywanie("banan"));

// "miksowanie" + owoc ====== sok ======= wypisywanie("marchewka") ==== otzymanySOk

//INSTRUKCJE WARUNKOWE
//
//if (tu wstawiamy warunek- wartości logiczne){
//	if(128==)
//IF 1>2
//	if(true)
//}

function isRain(){
	console.log("sprawdzam pogodę");
//	algorytm
	return true;
}
var czyPada = isRain();

if (czyPada) {
	console.log("wez parasol")
} else {
	console.log("wez okulary przeciwsłoneczne")
}



//pętle - określamy ile razy ma to zrobić; liczymy od zera, ile razy dopóki i jest mniejsze od 100, czyli wykona się to 100 razy, i++ to zwiększ i o 1

for(var i=0; i<10; i++) {
	console.log("cześć", i);
}

//for(var i=0; i<5; i++) {
//	isRain();
//}
//
//gdy i zwiększamy o 5
//for(var i=98; i<120; i=i+5) {
//	console.log("cześć", i);
//}

//teraz moje ciwczenie
var myName = "Agnieszka";
console.log(myName);

var ourNames = ["Iwona","Agnieszka", "Monika", "Agulina"];
console.log(ourNames[1]);

var num1 = 19;
var num2 = 6;

if(num1>num2) {
	console.log("Hurra!");
}

for(var i=0; i<= 4; i++) {
	console.log(ourNames[i]);
}
//ten kod poniżej to jest to samo 
for(var i=0; i<= ourNames.length; i++) {
	console.log(ourNames[i]);
}

//DOM api - document object model
var ppp = document.querySelector(".jumbotron");
ppp.style.border = "3px solid red";
console.log(ppp);

var divs = document.querySelectorAll("div");

console.log(divs.length);
divs[0].style.display= "none";
