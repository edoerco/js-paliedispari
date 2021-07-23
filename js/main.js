// // Palindroma.
// // Chiedere all’utente di inserire una parola.
// var richiesta = prompt('inserisci una parola');
// console.log(richiesta);

// // var parolaDivisa = richiesta.split('');
// // console.log(parolaDivisa);

// // var parolaInversa = parolaDivisa.reverse();
// // console.log(parolaInversa);

// // var parola = parolaInversa.join('');
// // console.log(parola);

// // Creare una funzione per capire se la parola inserita è palindroma.
// function palindroma(str) {
//     var parolaDef = richiesta.split('').reverse().join('');   // 'parolaDef' concatena tutte le varianti di prima
//     console.log(parolaDef);

//     if(richiesta == parolaDef) {
//         return str + ' la parola è palindroma'
//     } else {
//         return str + ' la parola non è palindroma'
//     }
// }
// console.log(palindroma(richiesta));
  
// console.log('---------------------------');

// Pari e Dispari
// L’utente sceglie pari o dispari 
var scelta = prompt('Scegli: Pari o Dispari?');
console.log(scelta);

// Inserisce un numero da 1 a 5.
var numeroGiocatore = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroGiocatore);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroComputer = pippo();  //pippo è il robot
console.log(numeroComputer);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if(isPari(numeroGiocatore, numeroComputer)) {
    console.log('La somma è pari')
} 
else 
{
    console.log('La somma è dispari')
}

// Dichiariamo chi ha vinto.
if((scelta == 'pari') && (isPari(numeroGiocatore, numeroComputer))) {
    console.log('Hai vinto');
} 
else if((scelta == 'dispari') && (isPari(numeroGiocatore, numeroComputer) == false)) {
    console.log('Hai vinto');
} 
else
{
    console.log('Il computer vince');
} 


function isPari(val1, val2) {
    // Sommiamo i due numeri
    var somma = val1 + val2;
    console.log(somma);
    return (somma % 2 == 0);
}

function pippo() {
    return Math.floor(Math.random() * 5 ) + 1;
}



