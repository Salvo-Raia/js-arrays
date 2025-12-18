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
console.log("Array:", teachers);
const reversedTeachers = teachers.reverse()
console.log("Array con ordine invertito:", reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (i = 0; i < teachers.length; i++) {
  if (teachers[i].length >=5) {
    longNames.push(teachers[i]);
    console.log(teachers[i], "contiene 5 o più caratteri. Lo aggiungo alla lista");
  }
}

console.table(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1)
console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const teacher = "Fabio";
let teacherFound; 

for (i = 0; i < teachers.length; i++)
  if (teacher === teachers[i]) {
    teacherPresent = true;
  }

  const isFabioPresent = teacherPresent;
  console.log("Fabio è presente?", teacherPresent);
  
// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;