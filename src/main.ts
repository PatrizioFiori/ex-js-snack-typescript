//Snack 1
let dato: unknown

switch (typeof dato) {
  case "string":
    console.log(dato.toUpperCase(), "è una stringa");
    break;
  case "number":
    console.log(dato * 2, "è un number");
    break;
  case "boolean":
    console.log(dato, "è un booleano");
    break;
  case "object":
    if (dato === null) {
      console.log("dato ha valore", dato);
    } else if (Array.isArray(dato)) {
      console.log("dato è un array", dato);
    } else if (dato instanceof Promise) {
      dato.then(res => console.log(res, "il valore risolto della promise"));
    } else {
      console.log("oggetto generico");
    }
    break;
  default:
    console.log("tipo sconosciuto");
}




//Snack 2

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascista: number,
  sesso: "m" | "f",
  anniDiServizio: number[],
  readonly email: string,
  contratto: "indeterminato" | "determinato" | "freelance"
}

let Lavoratore: Dipendente = {
  nome: "Marco",
  cognome: "Rossi",
  annoNascista: 1999,
  sesso: "m",
  anniDiServizio: [2019, 2020, 2021, 2022, 2023],
  email: "MarcoRossi@gmail.com",
  contratto: "indeterminato"
}





//Snack 3

type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[],
  certificazioni: string[]
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number | null
  stakeholderPrincipali: string[]
}
