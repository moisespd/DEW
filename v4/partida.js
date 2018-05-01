function Partida() {
  this.vidas = 3;
  this.pAcertadas = 0;
  this.pFalladas = 0;
  this.hInicio = new Date();
  this.hFin = undefined;

  // ------------------------------------------------------
  this.calcular_duracion = function() {
    var ahora = new Date();
    return ahora - this.hInicio;
  };
  // ------------------------------------------------------
  this.total_preguntas = function() {
    return this.pAcertadas - this.pFalladas;
  };
  // ------------------------------------------------------
  this.calcular_puntuacion = function() {
    return this.pAcertadas * 10 - this.pFalladas;
  };
  // ------------------------------------------------------
  this.iniciar = function() {
    this.hInicio = new Date();
  };
  // ------------------------------------------------------
  this.terminar = function() {
    this.hFin = new Date();
  };
  // ------------------------------------------------------
}
