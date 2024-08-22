const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },

  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  }
];

for (let i = 0; i < starWarsCharacters.length; i++) {
  // il blocco del for loop mi rappresenta l'esecuzione in un qualche ciclo del for loop

  const character = starWarsCharacters[i];

  // console.log(starWarsCharacters[i].hair_color);
  console.log(character.hair_color);
}

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/

const charactersNames = [];

/* ESERCIZIO 2
Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  charactersNames.push(character.name);
}
console.log(charactersNames);

const femaleCharacters = [];
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  if (character.gender === "female") {
    femaleCharacters.push(character);
  }
}

console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

const eyeColor = {};

for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  eyeColor[character.eye_color] = [];
}

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  // switch (character.eye_color) {
  //   case "blue":
  //     eyeColor.blue.push(character);
  //     break;
  //   case "yellow":
  //     eyeColor.yellow.push(character);
  //     break;
  //   case "brown":
  //     eyeColor.brown.push(character);
  //     break;
  //   case "red":
  //     eyeColor.red.push(character);
  //     break;
  //   case "blue-gray":
  //     eyeColor["blue-gray"].push(character);
  //     break;
  // }

  eyeColor[character.eye_color].push(character);
}

console.log("eyeColor", eyeColor);

/* ESERCIZIO 6
Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

let crewMass = 0;

// for (let i = 0; i < starWarsCharacters.length; i++) {
//   const character = starWarsCharacters[i];

//   // crewMass = crewMass + character.mass
//   crewMass += character.mass
// }

let i = 0;
while (i < starWarsCharacters.length) {
  const character = starWarsCharacters[i];
  crewMass += character.mass;

  i++;
}

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
console.log("crewMass:", crewMass);

// if (crewMass < 500) {
//   console.log("Ship is under loaded");
// } else if (crewMass < 700) {
//   console.log("Ship is half loaded");
// } else if (crewMass < 900) {
//   console.log("Warning: Load is over 700");
// } else if (crewMass < 1000) {
//   console.log("Critical Load: Over 900");
// } else {
//   console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
// }

switch (true) {
  case crewMass < 500:
    console.log("Ship is under loaded");
    break;
  case crewMass < 700:
    console.log("Ship is half loaded");
    break;
  case crewMass < 900:
    console.log("Warning: Load is over 700");
    break;
  case crewMass < 1000:
    console.log("Critical Load: Over 900");
    break;
  default:
    console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
    break;
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  if (character.gender === "n/a") {
    character.gender = "robot";
  }
}

console.log("gender modificato in robot", starWarsCharacters);

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

for (let i = 0; i < charactersNames.length; i++) {
  const charName = charactersNames[i];

  console.log(i, charName);

  for (let j = 0; j < femaleCharacters.length; j++) {
    const femObj = femaleCharacters[j];

    console.log("   " + j, femObj);

    if (charName === femObj.name) {
      console.log("CORRISPONDENZA TROVATA", i);

      charactersNames.splice(i, 1);
    }
  }
}

console.log("ORIGINAL", charactersNames);

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/

const randIndex = Math.floor(Math.random() * starWarsCharacters.length);
console.log("randIndex", randIndex);
console.log("Personaggio random", starWarsCharacters[randIndex]);

const selectedRandomCharacter = starWarsCharacters[randIndex];
