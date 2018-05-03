var remoteURI = "https://moisespd.github.io/DEW/v7/server/";

// --------------------------------------------------------------------
function ajaxRETR_connected_players() {
    if (this.readyState == 4 && this.status == 200) {
        var connected_players = JSON.parse(this.responseText);
        document.getElementById("connected_players").innerHTML = connected_players.length;
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
