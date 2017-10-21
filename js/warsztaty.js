'use strict';
//ma być restrykcyjnie sprawdzany kod
console.log("to ja");


document.addEventListener('DOMContentLoaded', function () {
	// tutaj będziemy umieszczać kod ze wszystkich zadań
	// przy tym mamay pewność, że wszystko się załaduje- cały HTML i dopiero wykona się scriptJS
	var menuList = document.querySelectorAll(".nav-list > li") //wyszukaj mi tylko dzieci
	console.log(menuList); // mamy tutaj TABLIcę- to zawsze my,ślimy o pętli
	for (var i = 0; i < menuList.length; i++) {
		//ustawiamy nasłuchiwacza co robi użytkownik
		menuList[i].addEventListener("mouseover", function () {
			//			 console.log("hurra");
			//			 this to taka zmienna która  jest tym na co najechał użtukownik;
			//			 zawsze w funkcji eventu musimy odnieść się do this
			var dropdown = this.querySelector(".dropdown");
			//			 console.log(dropdown);
			if (dropdown != null) {
				dropdown.style.display = "block";
			}

		})
	}

	for (var i = 0; i < menuList.length; i++) {
		//ustawiamy nasłuchiwacza co robi użytkownik
		menuList[i].addEventListener("mouseout", function () {
			//			 console.log("hurra");
			//			 this to taka zmienna która  jest tym na co najechał użtukownik;
			//			 zawsze w funkcji eventu musimy odnieść się do this
			var dropdown = this.querySelector(".dropdown");
			//			 console.log(dropdown);
			if (dropdown != null) {
				dropdown.style.display = "none";
				//				 jak chcemy się dobrać do styli to po nazwie stylu dajemy . piszemy style dajemy . wartość
			}

		})
	}

	//	 zadanie 2 - do jednego
	var buttons = document.querySelectorAll('.read-more');
	console.log(buttons);
	console.log(buttons[0].previousElementSibling);
//dla jednego
//	buttons[0].addEventListener('click', function () {
//		var textArea = this.previousElementSibling;
//
//		if (textArea.style.display === 'none' || textArea.style.display === '') {
//
//			textArea.style.display = 'block';
//			this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
//		} else {
//
//			textArea.style.display = 'none';
//			this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
//		}
//		
//		
//
//	});

	for(var i=0; i<buttons.length; i++) { 
		
		buttons[i].addEventListener('click', function () {
		var textArea = this.previousElementSibling;

		if (textArea.style.display === 'none' || textArea.style.display === '') {

			textArea.style.display = 'block';
			this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
		} else {

			textArea.style.display = 'none';
			this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
		}
		})
		

											 }
	
		
		
});
