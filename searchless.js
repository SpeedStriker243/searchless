const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
function setFromRequest()
{
  var q = urlParams.get('q')
  if (!urlParams.has('q'))
  {
    document.getElementById("mendel") = "Can't find a search request. Which is just as well, because nothing much would change if you did have one.";
  }
  else
  {
    document.getElementById("mendel") = "Search request is " + q + ". Entry are denied.";
  }
}
setFromRequest();
