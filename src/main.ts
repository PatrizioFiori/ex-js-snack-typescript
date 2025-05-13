let dato: unknown
dato = []

if (typeof dato == "string") {
  dato = dato.toUpperCase()
  console.log(dato, "è una stringa");

} else if (typeof dato == "number") {
  dato = dato * 2
  console.log(dato, "è un number");

} else if (typeof dato == "boolean") {
  console.log(dato, "è un booleano");

} else if (typeof dato == "object") {
  if (dato == null) {
    console.log("dato ha valore", dato);

  } else if (Array.isArray(dato)) {

    console.log("dato è un array", dato);

  } else if (dato instanceof Promise) {
    dato.then((res) => {
      console.log(res, "il valore risolto della promise");

    })
  } else {
    console.log("oggetto generico")
  }
}
