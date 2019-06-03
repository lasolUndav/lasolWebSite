var seminarios = {"web":{"titulo":"Seminario Web","nombre":"web"},"control":{"titulo":"Control de Versiones y CI","nombre":"control"},
"spaa":{"titulo":"Single Page Applications con Angular","nombre":"spaa"},"am":{"titulo":"Angular Material","nombre":"am"},
"tdd":{"titulo":"TDD","nombre":"tdd"}}

function setup(){
  var seminario= getSelectedSeminario();
  $("#titulo").text(seminario.titulo);
}
function getSelectedSeminario(){
  return seminarios[GetURLParameter('seminario')];
}

function GetURLParameter(sParam){
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
        return sParameterName[1];
    }
  }
}