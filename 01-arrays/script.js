const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick";

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
teachers.pop();
const lastTeacher = "Luca";

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
teachers.shift()
const firstTeacher = "Nathan";

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
console.log(teachers.indexOf("Lewis"));
const lewisIndex = 5;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmptyResponse;

if (teachers.length < 1) {
  isTeachersEmptyResponse = true;
  console.log("L'array è vuoto perché contiene", teachers.length, "nomi")
}

else {
  isTeachersEmptyResponse = false;
  console.log("L'array non è vuoto perché contiene", teachers.length, "nomi")
}

const isTeachersEmpty = isTeachersEmptyResponse;
console.log("L'elenco degli insegnanti è vuoto?", isTeachersEmpty);

 


