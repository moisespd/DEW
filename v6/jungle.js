var timer;
var jungle;
var counter = 0;
var puntos = 0;
var MAX_ANIMALS = 20;

// -----------------------------------------------------
function stopJungle() {
  clearInterval(timer);
}
// -----------------------------------------------------
function updateUIcounter() {
  var counter = document.getElementById("counter");
  counter.innerHTML = jungle.children.length + " animales";
}
// -----------------------------------------------------
function updateJungle() {
  if (jungle.children.length >= MAX_ANIMALS) {
    stopJungle();
    alert("Fin de la partida!!!");
    return;
  }

  if ((jungle.children.length > 0) && (jungle.children.length % 5 == 0)) {
      removeAnimal();
  }
  loadAnimal();
  updateUIcounter();
}
// -----------------------------------------------------
function huntAnimal() {
  var puntosElem = document.getElementById("puntos");

  this.parentElement.removeChild(this);
  puntos++;
  puntosElem.innerHTML = puntos + " puntos";
  updateUIcounter();
}
// -----------------------------------------------------
function getRandom(min, max) {
  var dado = min + Math.round(Math.random() * (max - min - 1));
  return dado;
}
// -----------------------------------------------------
function getRandomAnimal() {
  var strAnimals = ["dog", "lion", "cat", "bird", "fish", "bear", "snake"];
  var dado = getRandom(0, strAnimals.length);
  return strAnimals[dado];
}
// -----------------------------------------------------
function loadAnimal() {
  var animal = document.createElement("img");

  animal.classList.add("animal");
  animal.src = "animals/" + getRandomAnimal() + ".png";
  animal.id = "animal" + counter;
  animal.style.top = getRandom(0, jungle.clientHeight - 50) + "px";
  animal.style.left = getRandom(0, jungle.clientWidth - 50) + "px";
  counter++;
  animal.onclick = huntAnimal;
  jungle.appendChild(animal);
}
// -----------------------------------------------------
function removeAnimal() {
  var animal = jungle.children[0];
  jungle.removeChild(animal);
}
// -----------------------------------------------------
function initJungle() {
  timer = setInterval(updateJungle, 1000);
  jungle = document.getElementById("jungle");
}
