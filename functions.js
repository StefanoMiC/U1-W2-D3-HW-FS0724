// FUNZIONI
// Una funzione è un BLOCCO DI CODICE RIUTILIZZABILE, e ritardabile nella sua esecuzione
// PUO' (opzionalmente) ricevere dei valori in ingresso (input)
// PUO' (opzionalmente) ritornare un valore (output)

// SINTASSI
/* 

function nomeFunzione(input1, input2, ...) {
    // istruzioni da eseguire....
    const valueToReturn = risultato di un'operazione

    return valueToReturn
}

*/

// 1) Questa è la ⚠️DEFINIZIONE⚠️ di una funzione
function bark() {
  console.log("BAU");
}

// 2) Questa è la sua ESECUZIONE, INVOCAZIONE, CHIAMATA, O UTILIZZO

bark(); // undefined è il valore di ritorno di una funzione void (inutile fargli un console log)

// ci sono due macro distinzioni
// Una funzione che abbia un RETURN (fruttifera / fruitful)
// Una funzione che SENZA RETURN (non fruttifera / void) - spesso la si usa per generare effetti (collaterali) in altri punti del codice

// funzione fruttifera (fruitful)
function sum() {
  return 5 + 2;
}

console.log(sum()); // in questo caso la priorità è sempre l'esecuzione della funzione interna per prima per poi eseguire quelle più esterne

const sumResult = sum(); // posso immaginare l'esecuzione della funzione come IL VALORE CHE MI RITORNA ==> 7
console.log(sumResult);

const sumAndMultiply = sum() * 2; // posso combinare il suo valore di ritorno con altre operazioni

function miao() {
  bark();

  return "MEWWW";
}

console.log(miao());

const loudMeow = miao() + "!!!"; // uso il valore di ritorno e lo manipolo successivamente
console.log(loudMeow);

// Parametri di funzione - mi permette di variare i valori utilizzati all'interno del corpo della funzione,
// quindi ottenere potenzialmente risultati diversi per delle stesse operazioni

function dynamicSum(num1, num2 = 0) {
  // i parametri di una funzione sono come fossero variabile con ambito interno al corpo della funzione (NON SONO VISIBILI ALL'ESTERNO!)
  // i parametri si valorizzano nel momento dell'INVOCAZIONE DELLA FUNZIONE!

  // num2 = 0 è la definizione di un valore di default nel caso in cui num2 risultasse undefined, acquisirebbe il valore 1 prevenendo il risultato NaN dall'operazione 2 + undefined ==> NaN
  // diventerebbe 2 + 0 ==> 2
  return num1 + num2;
}

// i parametri seguono un'ordine ben preciso, bisogna fornirli con un ordine coerente a quello che si aspetta la definizione
// i valori passati come parametro alla funzione si definiscono ARGOMENTI DELLA FUNZIONE
console.log(dynamicSum(6, 4));
console.log(dynamicSum(2));

function sayHi(name) {
  if (name !== undefined) {
    console.log("Ciao " + name + " quanto tempo...!");
  }
}

sayHi("Stefano");
sayHi("Lidia");
sayHi(); // essendoci un controllo interno questa invocazione, si esegue, ma non produce un risultato in console
sayHi("Riccardo");
sayHi("Stefano");

// Esempio di funzione void con effetto collaterale (side effect)

let counter = 0;

function addOne() {
  counter += 1;
}

// la funzione sta avendo un effetto all'esterno, non ha un return, quindi è usata solo per generare un effetto collaterale
addOne();
addOne();
addOne();
addOne();
addOne();
console.log(counter);

const randNum = Math.floor(Math.random() * 5); // questa variabile genera un numero random una volta sola, e rimarrà sempre uguale

console.log(randNum);
console.log(randNum);
console.log(randNum);
// questi tre console log avranno sempre lo stesso valore

// una funzione che genera un numero random all'interno mi creerà un nuovo numero ogni volta che la invocherò
function giveMeRandomNum(limit = 5) {
  const generatedNum = Math.floor(Math.random() * (limit + 1));
  return generatedNum;
}

console.log(giveMeRandomNum()); // non avendo passato nessun argomento si attiva il valore di default (5), è come se avessimo chiamato giveMeRandomNum(5)
console.log(giveMeRandomNum());
console.log(giveMeRandomNum());

// questi valori possono essere in alcuni casi uguali, ma sicuramente possono essere anche diversi tra loro

const hundredNums = [];

for (let i = 0; i < 100; i++) {
  const newNum = giveMeRandomNum(200);
  hundredNums.push(newNum);
}

console.log(hundredNums);

// myFunc(); // ReferenceError: Cannot access 'myFunc' before initialization
// una funzione dichiarata in questo modo non subendo l'hoisting non può essere chiamata prima, rendendo il codice più ordinato

// function expression usata come valore di una variabile (evita l'effetto dell'hoisting)
const myFunc = function () {
  console.log("whatever");
};

myFunc(); // la posso chiamare solo dopo la sua definizione

// arrow functions

const giveMeFive = function () {
  return 5;
};

// const giveMeFiveArrow = () => {
//   return 5;
// };

// la funzione arrow può avere un return implicito
// le funzioni arrow sono SEMPRE ANONIME e hanno quindi bisogno di una variabile che le identifichi (le dia un nome)
const giveMeFiveArrow = () => 5;

console.log(giveMeFive());
console.log(giveMeFiveArrow());

const animals = ["Parrot", "Mouse", "Cat", "Goldfish", "Dog", "Horse"];

// funzione che mi trova l'indice di un elemento tramite l'utilizzo di un parametro che useremo per comparazione
const findAnimalIndex = function (animalToFind) {
  for (let i = 0; i < animals.length; i++) {
    const animalStr = animals[i];

    if (animalToFind === animalStr) {
      // se siamo qui significa che un elemento è stato trovato, e possiamo leggere il suo indice
      console.log("TROVATO, l'indice è:", i);
    }
  }
};

findAnimalIndex("Dog");

// variante con array interno, in questo caso non modifichiamo l'array precedente ma ne creiamo sempre uno nuovo, per ogni esecuzione della funzione
// se avessimo usato un array esterno, dopo ogni chiamata della funzione si sarebbe svuotato di un elemento

// questa funzione trova la posizione (come prima) e la utilizza per eliminare un elemento
const findAndDestroyAnimal = function (animalToFind) {
  const innerAnimals = ["Parrot", "Mouse", "Cat", "Goldfish", "Dog", "Horse"];

  for (let i = 0; i < innerAnimals.length; i++) {
    const animalStr = innerAnimals[i];

    if (animalToFind === animalStr) {
      innerAnimals.splice(i, 1);
    }
  }

  return innerAnimals;
};

console.log(findAndDestroyAnimal("Mouse"));

// questa funzione trova un elemento di un array a partire sempre dal parametro e sostituisce l'elemento trovato con un altro,
// definito dal secondo parametro della funzione

// quindi ogni volta che utilizziamo questa funzione potremmo decidere di cercare un animale diverso e cambiare l'animale con cui lo sostituiamo
const findAndReplaceAnimal = function (animalToFind, newAnimal) {
  const innerAnimals = ["Parrot", "Mouse", "Goldfish", "Dog", "Horse", "Cat"];

  for (let i = 0; i < innerAnimals.length; i++) {
    const animalStr = innerAnimals[i];

    if (animalToFind === animalStr) {
      innerAnimals.splice(i, 1, newAnimal);
    }
  }

  return innerAnimals;
};

// la funzione effettua le stesse operazioni ogni volta che viene eseguita, ma ogni volta che la utilizziamo possiamo cambiare il
// valore cercato e quello con cui sostituirlo
console.log(findAndReplaceAnimal("Cat", "Dragon"));
console.log(findAndReplaceAnimal("Parrot", "Monster"));
console.log(findAndReplaceAnimal("Mouse", "Crocodile"));
