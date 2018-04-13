
function getXMLHttp() {
  var XMLHttp
  try {
    xmlHttp = new XMLHttpRequest();
  } catch (e) {
    try {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        return false;
      }
    }
  }
  return xmlHttp;
}

var xmlHttp = getXMLHttp();

var htmlCode = "";

var response;

$(document).ready(function() {

  var send = "hook.php";

  xmlHttp.open("GET", send, true);

  xmlHttp.send(null);

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4) {

      response = xmlHttp.responseText.split("~");

      for (var i = 0; i < response.length; i++) {
        htmlCode += '<a href="' + response[i] + '">';
        htmlCode += '<img class="card-img-top img-thumbnail" src="' + response[i] + '"/>';
        htmlCode += '</a>';

        }
      

      document.getElementById('gallery1').innerHTML = htmlCode;
      document.getElementById('gallery2').innerHTML = htmlCode;
      document.getElementById('gallery3').innerHTML = htmlCode;
    
    }

  }

});
