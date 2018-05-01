var english_words = [
  //animals
  "dog", "cat",
  // fruits
  "orange", "apple",
  // in the house
  "door", "roof"];

  // ------------------------------------------------------------
function validar_respuesta() {
    var respuesta = document.getElementById("respuesta");
    var imagen = document.getElementById("imagen");

    if (respuesta.value === imagen.getAttribute("value")) {
      alert("OK");
    }
    else {
      alert("ohhh!!!");
    }
    window.location.reload();

}
// ------------------------------------------------------------
function validar_word_2_image(imagen_word) {
    var word = document.getElementById("word").innerHTML;
    if (word === imagen_word) {
      alert("OK");
    }
    else {
      alert("ohhh!!!");
    }
    window.location.reload();
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
function juego_ingles_images() {
  var dado;
  var word = "";

  dado = Math.round(Math.random() * 100, 0);
  dado = dado % english_words.length;
  word = english_words[dado];
  document.write("<img id='imagen' value='" + word + "' src='images/" + word + ".jpg'></img>");
}
// ------------------------------------------------------------
