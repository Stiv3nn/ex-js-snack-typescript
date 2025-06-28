// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se èun booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”

// 🎯 BONUS
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.

// -------------

// let dato: unknown;
// if (typeof dato === 'string') {
//     console.log(dato.toUpperCase());
// } else if (typeof dato === 'number') {
//     console.log(dato * 2);
// } else if (typeof dato === 'boolean') {
//     console.log(dato ? 'Si' : 'No');
// } else if (dato === null) { //typeof dato === 'null' ---> E' SAGLIATO SCRIVERE COSI PERCHE' E' UN BUG ANCORA NON RISOLTO
//     console.log('Il dato è vuoto');
// } else if (Array.isArray(dato)) {
//     console.log(dato.length);
// } else if (dato instanceof Promise) {
//     dato.then((msg) => console.log(msg));
// } else {
//     console.log('Tipo non supportato');
// }

// ------------------------------------------------------------------------------------------------------------------------------

// 🏆 Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

// 🎯 BONUS
// Il type alias Dipendente, ha anche i seguenti dati:

// emailAziendale → Email assegnata al dipendente (non si può modificare)
// contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.

// ----------

type Dipendente = {
    nome: string,
    cognome: string,
    annoNascita: number,
    sesso: 'M' | 'F',
    anniDiServizio: number[]
};