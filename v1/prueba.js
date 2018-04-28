var diccionarioIngles = ["window", "door", "dog", "cat", "pencil"];
var diccionarioEspanol = ["ventana", "puerta", "perro", "gato", "lápiz"];
var puntos = 0;
var preguntas = 0;
// -----------------------------------------
function mostrarMenu() {
  var opcion;

  opcion = prompt(
    "PREGUNTAS: " + preguntas + "\n" +
    "PUNTOS: " + puntos + "\n" +
    "1: sumas\n" +
    "2: restas\n" +
    "3: multiplicaciones\n" +
    "\nElige tu opción: ");
  return opcion;
}

// -----------------------------------------
function juegoSumas() {
  var valor1, valor2, resultado;
  var respuesta;

  valor1 = Math.round(Math.random() * 10, 0);
  valor2 = Math.round(Math.random() * 10, 0);
  resultado = valor1 + valor2;

  respuesta = +prompt("¿Cuánto vale la siguiente suma? " + valor1 + " + " + valor2);
  if (respuesta === resultado) {
    return true;
  }
  return false;
}
// -----------------------------------------
function juegoRestas() {
  var valor1, valor2, resultado;
  var respuesta;

  valor1 = Math.round(Math.random() * 10, 0);
  valor2 = Math.round(Math.random() * 10, 0);
  resultado = valor1 - valor2;

  respuesta = +prompt("¿Cuánto vale la siguiente resta? " + valor1 + " - " + valor2);
  if (respuesta === resultado) {
    return true;
  }
  return false;
}
// -----------------------------------------
function juegoMultiplicaciones() {
  var valor1, valor2, resultado;
  var respuesta;

  valor1 = Math.round(Math.random() * 10, 0);
  valor2 = Math.round(Math.random() * 10, 0);
  resultado = valor1 * valor2;

  respuesta = +prompt("¿Cuánto vale la siguiente multiplicación? " + valor1 + " * " + valor2);
  if (respuesta === resultado) {
    return true;
  }
  return false;
}
// -----------------------------------------
function juegoPalabrasEspanolIngles() {
  var dado;
  var respuesta;
  var resultado;

  dado = Math.round(Math.random() * 100, 0);
  dado = dado % diccionarioIngles.length;
  resultado = diccionarioIngles[dado];
  respuesta = prompt("¿Cómo se escribe en inglés la siguiente palabra?\n" + diccionarioEspanol[dado]);
  if (respuesta === resultado) {
    return true;
  }
  return false;
}

// -----------------------------------------
function juegoPalabrasInglesEspanol() {
  var dado;
  var respuesta;
  var resultado;

  dado = Math.round(Math.random() * 100, 0);
  dado = dado % diccionarioIngles.length;
  resultado = diccionarioEspanol[dado];
  respuesta = prompt("¿Cómo se escribe en español la siguiente palabra?\n" + diccionarioIngles[dado]);
  if (respuesta === resultado) {
    return true;
  }
  return false;
}
// -----------------------------------------

function jugar(juegoId) {
  var aciertaJuego = true;

  switch (juegoId) {
    case "1":
      aciertaJuego = juegoSumas();
    break;
    case "2":
      aciertaJuego = juegoRestas();
    break;
    case "3":
      aciertaJuego = juegoMultiplicaciones();
    break;
    case "4":
      aciertaJuego = juegoPalabrasInglesEspanol();
    break;
    case "5":
      aciertaJuego = juegoPalabrasEspanolIngles();
      break;
  }
  preguntas++;
  if (aciertaJuego) {
    alert("OK!!!");
    puntos += 10;
  }
  else {
    alert("Noooo!!!");
    puntos -= 1;
  }
}
// -----------------------------------------
