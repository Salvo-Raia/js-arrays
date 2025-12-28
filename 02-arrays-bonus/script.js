const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log();

console.table(teachers);
const teachersReverse = [];

for (i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  teachersReverse.unshift(currentTeacher)
}

console.table(teachersReverse);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
console.log("Passiamo al setaccio la lista insegnanti per individuare solo quelli il cui nome è di almeno 5 caratteri");
const longNames = [];

for (i = 0; i < teachers.length; i++) {
  if (teachers[i].length >=5) {
    longNames.push(teachers[i]);
    console.log(teachers[i], "contiene 5 o più caratteri, lo aggiungo alla lista ✅");
  } else {
    console.log(teachers[i], "non contiene abbastanza caratteri, NON lo aggiungo alla lista ❌");
    
  }
}
console.log("Ecco una lista con i nomi che contengono 5 o più caratteri");
console.table(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
console.log("Cancello Ed dall'array teachers...🗑️");
teachers.splice(1, 1)
console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const teacher = "Fabio";
let isFabioPresent = false;
console.log("Controlliamo se", teacher, "è nell'elenco...⌛");

for (i = 0; i < teachers.length && isFabioPresent == false; i++)
  if (teacher === teachers[i]) {
    isFabioPresent = true;
    console.log("Sì", teacher, "è presente! 👍");
  } 

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
console.log("Ecco una lista sfusa del corpo docenti 📝");

const teachersString = teachers.join(", "); 
console.log(teachersString);
