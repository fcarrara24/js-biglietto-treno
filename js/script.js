
function updateTextInput(passInput, passValue) {
    const value = document.getElementById(passValue);
    const input = document.getElementById(passInput);

    value.textContent = input.value;
    input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });

}




function trainPrice() {

    let km = document.getElementById('spaceOutput').textContent;
    let age = document.getElementById('ageOutput').textContent;
    let discountCoefficient = 1;
    let stringRest;
    //price is expressed in cents
    const stdEuroKm = 21;

    if (age < 18) {
        discountCoefficient = 0.8;
    } else if (age > 65) {
        discountCoefficient = 0.6;
    }

    centsCost = Math.round((discountCoefficient) * (stdEuroKm * km))
    stringRest = String(centsCost % 100);



    document.getElementById('trainPrice').innerHTML = `il prezzo del suo biglietto sarà ${Math.floor(centsCost / 100)}.${stringRest.padStart(2, '0')} €`;
    document.getElementById('trainPrice').style.display = "block";

}




















// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// let km, age;

// do {
//     if (km !== undefined || age !== undefined) {
//         alert(' si prega di inserire dei numeri nei campi indicati ');
//     }

//     km = prompt('indica quanti km dista la sua destinazione?');
//     age = prompt('scrivere la propria eta');

// } while (isNaN(km) || isNaN(age));


// let discountCoefficient = 1;
// let stringRest;

// age = parseInt(age);
// km = parseInt(km);
// //price is expressed in cents
// const stdEuroKm = 21;

// if (age < 18) {
//     discountCoefficient = 0.8;
// } else if (age > 65) {
//     discountCoefficient = 0.6;
// }

// centsCost = Math.round((discountCoefficient) * (stdEuroKm * km))
// stringRest = String(centsCost % 100);

// alert(`il prezzo del suo biglietto sarà ${Math.floor(centsCost / 100)}.${stringRest.padStart(2, '0')} €`)








// // - **pari o dispari**: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9.
// // Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.

// let hand;
// let num;


// let rndNum = Math.floor((Math.random() * 9) + 1);

// do {
//     hand = prompt('pari o dispari? (non sono ammessi altri input)');
//     num = prompt('scegliere un numero intero tra 1 e 9');
// } while (num.isNaN || num > 9 || num < 1 || !(hand === "pari" || hand === "dispari"));

// num = parseInt(num);


// if ((((num + rndNum) % 2 === 0) && (hand === 'pari')) || (((num + rndNum) % 2 === 1) && (hand === 'dispari'))) {
//     alert(`Io avevo detto ${rndNum}\nComplimenti! hai vinto`);

// } else {
//     alert(`Io avevo detto ${rndNum}\nPeccato, hai perso`);

// }

// // - **quanto manca**: utilizzando le funzioni dell'oggetto Date, stabilire
// // l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.
// let date = new Date();
// let min = date.getMinutes();

// alert(`mancano ancora ${60 - min} minuti alla fine dell'ora. \nLa lezione è lunga`)

