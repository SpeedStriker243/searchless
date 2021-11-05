// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
const rawString = window.location.search;
console.log(rawString);
var filteredString = rawString.replace('?q=','');
var distilledString = filteredString.replaceAll('+',' ');
var pureString = distilledString.replaceAll('%20',' ');
var msgToDisplay;
if (filteredString.length < 1) {
	msgToDisplay = "Can't find a search request. Searchless cannot deny something that does not exist.";
	document.getElementById("s1").style.display = "none";
}
else {
	msgToDisplay = "Your search request, which is \"" + pureString + "\", was successfully thrown in the bin.\nThank you for choosing Searchless as your non-search engine!";
	document.getElementById("s1").style.display = "initial";
}
console.log(msgToDisplay);
document.getElementById("m1").innerHTML = msgToDisplay;
function realSearch(engine)
{
	window.location.href = engine + pureString;
}
// @license-end
