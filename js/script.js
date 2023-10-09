
let km = prompt('quanti km dista la sua destinazione?');
let age = prompt('scrivere la propria eta');
let discountCoefficient = 1;
let stringRest;

age = parseInt(age);
km = parseInt(km);
//price is expressed in cents
const stdEuroKm = 21;

if (age < 18) {
    discountCoefficient = 0.8;
} else if (age > 65) {
    discountCoefficient = 0.6;
}

centsCost = Math.round((discountCoefficient) * (stdEuroKm * km))
stringRest = String(centsCost % 100);

alert(`il prezzo del suo biglietto sarà ${Math.floor(centsCost / 100)}.${stringRest.padStart(2, '0')}€`)