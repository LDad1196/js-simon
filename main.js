// Aggiungere event listener che fa partire il gioco al click
document.getElementById("start-btn").addEventListener ("click", function(){
    
    // Creare Timer di 3 secondi nel quale sono visibili i numeri
    let seconds = 3;

    let randomNumbers = []

    // Ciclo che gestisce numeri estratti
    for (let index = 0; index < 5; index++) {
                
        let myNumber = random();

        randomNumbers.push(myNumber);

        console.log("Il numero estratto è: ", myNumber);
    } 
    
    
    let punteggio = 0

    
    // Funzione che regola creazione numeri
    function random() {
	    let numberRandom = Math.floor(Math.random() * 10) + 1;
	    console.log("Il computer ha scelto il numero: ", numberRandom)
	    return numberRandom;
    }

    
    // Gestire funzione che permette di visualizzare i numeri nel momento in cui c'è la possibilità di vedere i numeri
    let timerNumbers = setInterval(function() {
	    
        if(seconds != 0) {
		    document.querySelector("h2").innerText = `I numeri sono: ${randomNumbers}`;
		    seconds--;
	    } 
        
        else {
		    document.querySelector("h2").innerText = "Ora tocca a te";
		    
            clearInterval(timerNumbers);
	    }

    }, 1000);
    
    // Inserire Prompt che ti permette di gestire inserimento numeri
    let promptValue = setInterval(function() {
        
        // Array che gestiscono i numeri scritti da me e i numeri che sono stati indovinati
        let myNumbers = [];
        let indovinati = [];

        if(seconds == 0) {
            
            // Ciclo che gestisce l'inserimento dei numeri tramite prompt
            for (let index = 0; index < 5; index++) {
                
                let myNumber = parseInt(prompt("Inserisci un numero"))

                myNumbers.push(myNumber);

                console.log("Il numero scelto da te è: ", myNumber);
                
            } 
            
            // Ciclo che gestisce il controllo dei numeri
            for (let index = 0; index < randomNumbers.length; index++) {
                
                console.log(randomNumbers[index])
                
                if (myNumbers.includes(randomNumbers[index])) {
                    punteggio++;
                    indovinati.push(randomNumbers[index])
                }
            } 
            
            console.log("Il tuo punteggio è: ", punteggio)
            console.log("I numeri indovinati sono: ", indovinati)

            clearInterval(promptValue)

        }

    }, 1000)

}, {once: true})




