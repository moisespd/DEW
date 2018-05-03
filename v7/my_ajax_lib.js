var remoteURI = "https://moisespd.github.io/DEW/v7/server/";

// --------------------------------------------------------------------
function ajaxRETR_connected_players() {
    if (this.readyState == 4 && this.status == 200) {
        var connected_players = JSON.parse(this.responseText);
        var div_connected_players = document.getElementById("connected_players");

        div_connected_players.innerHTML = connected_players.length + " players connected";
        div_connected_players.innerHTML += "<ul>";
        for (var i = 0; i < connected_players.length; i++) {
          div_connected_players.innerHTML += "<li>" + connected_players[i].name + "</li>";
        }
        div_connected_players.innerHTML += "</ul>";
    }
}
// --------------------------------------------------------------------
function ajaxREQ_connected_players() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = ajaxRETR_connected_players;
  xmlhttp.open("GET", remoteURI + "connected_players.json", true);
  xmlhttp.send();
}
// --------------------------------------------------------------------
