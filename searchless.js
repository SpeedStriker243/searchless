function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}
function setFromRequest()
{
  if (request.length < 1)
  {
    document.getElementById("mendel") = "Can't find a search request. Which is just as well, because nothing much would change if you did have one.";
  }
  else
  {
    document.getElementById("mendel") = "Search request is " + request + ". Entry are denied.";
  }
}
var request = getUrlVars()["q"];
setFromRequest();
