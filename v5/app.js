var puntos = 0;
var juego_word_2_image_images_writen = false;
var english_words = [
  //animals
  "dog", "cat", "elephant", "camel", "fish",
  // fruits
  "orange", "apple", "pear", "banana", "grapes",
  // in the body
  "hand", "foot", "nose",
  // in the house
  "door", "roof", "floor", "ceiling"];
// ------------------------------------------------------------
function intro_validar_operacion(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla==13) validar_operacion();
}
// ------------------------------------------------------------
function intro_validar_image_2_word(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla==13) validar_image_2_word();
}
// ------------------------------------------------------------
function validar_operacion() {
  var respuesta = document.getElementById("respuesta");
  var resultado = respuesta.getAttribute("resultado");

  if (respuesta.value === resultado) {
    puntos++;
    alert("Puntos: " + puntos + "\nOK");
  }
  else {
    alert("ohhh!!!");
  }
  juego_operaciones();
}
// ------------------------------------------------------------
function juego_operaciones() {
  var valor1, valor2, aux, resultado;
  var respuesta = document.getElementById("respuesta");
  var operacion = document.getElementById("operacion");
  var operadores = ["+", "-", "*"];
  var operador = operadores[Math.round(Math.random() * (operadores.length - 1), 0)];

  valor1 = Math.round(Math.random() * 10, 0);
  valor2 = Math.round(Math.random() * 10, 0);
  if (valor2 > valor1) {
    aux = valor1;
    valor1 = valor2;
    valor2 = aux;
  }
  resultado = eval(valor1 + operador + valor2);

  respuesta.value = "";
  respuesta.setAttribute("resultado", resultado);
  respuesta.focus();
  operacion.innerHTML = "¿Cuánto vale la siguiente operación? " + valor1 + " " + operador + " " + valor2;
}
// ------------------------------------------------------------
function validar_image_2_word() {
    var respuesta = document.getElementById("respuesta");
    var imagen = document.getElementById("imagen");

    if (respuesta.value === imagen.getAttribute("value")) {
      puntos++;
      alert("Puntos: " + puntos + "\nOK");
    }
    else {
      alert("ohhh!!!");
    }
    juego_image_2_word();
}
// ------------------------------------------------------------
function validar_word_2_image(imagen_word) {
    var word = document.getElementById("word").innerHTML;
    if (word === imagen_word) {
      puntos++;
      alert("Puntos: " + puntos + "\nOK");
    }
    else {
      alert("Puntos: " + puntos + "\nohhh!!!");
    }

    juego_word_2_image();
}
// ------------------------------------------------------------
function juego_word_2_image() {
  var dado;
  var word = "";
  var elem;

  dado = Math.round(Math.random() * 100, 0);
  dado = dado % english_words.length;
  word = english_words[dado];
  elem = document.getElementById("word");
  elem.innerHTML = word;
}
// ------------------------------------------------------------
function juego_image_2_word() {
  var dado;
  var word = "";
  var image = document.getElementById("imagen");
  var respuesta = document.getElementById("respuesta");

  respuesta.value = "";
  respuesta.focus();

  dado = Math.round(Math.random() * 100, 0);
  dado = dado % english_words.length;
  word = english_words[dado];
  image.src = "images/" + word + ".jpg";
  image.setAttribute("value", word);
}
// ------------------------------------------------------------
function juego_word_2_image_write_images() {
  // if (! juego_word_2_image_images_writen) {
  // }
  var word = "";
  for (var i = 0; i < english_words.length; i++) {
//  for (var i = 0; i < 1; i++) {
    word = english_words[i];
    document.write("<img height='150px' onclick='validar_word_2_image(" + String.fromCharCode(34) + word + String.fromCharCode(34) + ")' " +
      "src='images/" + word + ".jpg'></img>");
  }
}
// ------------------------------------------------------------
