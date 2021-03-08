const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
function setFromRequest()
{
  var request = urlParams.get("q")
  if (request.length < 1)
  {
    document.getElementById("mendel") = "Can't find a search request. Which is just as well, because nothing much would change if you did have one.";
  }
  else
  {
    document.getElementById("mendel") = "Search request is " + request + ". Entry are denied.";
  }
}
setFromRequest();
