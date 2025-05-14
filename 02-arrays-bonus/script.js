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
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}
//i = 6 finché non arriva >= a 0 diminuisce; quindi partendo da indice 6 salva l'ultimo valore nella nuova variabile fino ad arrivare a indice 0
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i])
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
let indexEd = teachers.indexOf("Ed");
teachers.splice(indexEd, 1)               //trovo a che indice si trova Ed e con .splice parto da quell'indice (indexEd) e ne rimuovo 1("Ed")
console.log(teachers)
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
    isFabioPresent = true;
    break;
  }
}
console.log(isFabioPresent)
// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = " "
for (let i = 0; i < teachers.length; i++) {
  teachersString += teachers[i]; //senza virgola
  //se non è l'ultima parola aggiungi virgola (fino a indice 4)
  if (i < teachers.length) {
    teachersString += ", "
  }
} console.log(teachersString)
