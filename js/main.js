// Palindroma.
// Chiedere all’utente di inserire una parola.
var richiesta = prompt('inserisci una parola');
console.log(richiesta);

// var parolaDivisa = richiesta.split('');
// console.log(parolaDivisa);

// var parolaInversa = parolaDivisa.reverse();
// console.log(parolaInversa);

// var parola = parolaInversa.join('');
// console.log(parola);

// Creare una funzione per capire se la parola inserita è palindroma.
function palindroma(str) {
    var parolaDef = richiesta.split('').reverse().join('');   // 'parolaDef' concatena tutte le varianti di prima
    console.log(parolaDef);

    if(richiesta == parolaDef) {
        return str + ' la parola è palindroma'
    } else {
        return str + ' la parola non è palindroma'
    }
}
console.log(palindroma(richiesta));
  
console.log('---------------------------');

// Pari e Dispari
// L’utente sceglie pari o dispari 
var scelta = prompt('Scegli: Pari o Dispari?');
console.log(scelta);

// Inserisce un numero da 1 a 5.
var numeroGiocatore = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroGiocatore);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroComputer = Math.floor(Math.random() * 5 ) + 1;
console.log(numeroComputer);

// Sommiamo i due numeri
var somma = numeroGiocatore + numeroComputer;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if(somma % 2 == 0) {
    console.log('La somma è pari')
} 
else 
{
    console.log('La somma è dispari')
}

// Dichiariamo chi ha vinto.
if((scelta == 'pari') && (somma % 2 == 0)) {
    console.log('Hai vinto');
} 
else if((scelta == 'dispari') && (somma % 2 != 0)) {
    console.log('Hai vinto');
} 
else
{
    console.log('Il computer vince');
} 
