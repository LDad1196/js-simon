// Inserire le variabili di calcolo dei numeri casuali
let value1 = random();
let value2 = random();
let value3 = random();
let value4 = random();
let value5 = random();


// Funzione che regola creazione numeri
function random() {
	let numberRandom = Math.floor(Math.random() * 10) + 1;
	console.log("Il computer ha scelto il numero: ", numberRandom)
	return numberRandom;
}


// Aggiungere event listener che fa partire il gioco al click
document.getElementById("start-btn").addEventListener ("click", function(){
// Creare Timer di 30 secondi nel quale sono visibili i numeri
    let seconds = 3;
    let timerNumbers = setInterval(function() {
	    // Gestire funzione che permette di visualizzare i numeri nel momento in cui c'è la possibilità di vedere i numeri
        if(seconds!=0) {
		    document.querySelector("h2").innerText = `I numeri sono: ${value1},  ${value2},  ${value3},  ${value4},  ${value5}`;
		    seconds--;
	    } else {
		    document.querySelector("h2").innerText = "Ora tocca a te";
		    clearInterval(timerNumbers);
	    }
    }, 1000);

    if (timerNumbers == 0) {
        let myNumber = parseInt(prompt("Inserisci i numeri"))
    }
}, {once: true})

// Inserire Prompt che ti permette di gestire inserimento numeri


