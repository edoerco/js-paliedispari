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
  



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
