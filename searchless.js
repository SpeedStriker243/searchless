// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
const rawString = window.location.search;
console.log(rawString);
var filteredString = rawString.replace('?q=','');
var distilledString = filteredString.replaceAll('+',' ');
var pureString = distilledString.replaceAll('%20',' ');
var msgToDisplay;
var action;
if (filteredString.length < 1 || pureString == "?q") {
	msgToDisplay = "Can't find a search request. Searchless cannot deny something that does not exist.";
	document.getElementById("s1").style.display = "none";
}
else {
	switch (Math.floor(Math.random() * 6)) {
	case 0:
		action = "successfully thrown in the bin";
		break;
	case 1:
		action = "sent home";
		break;
	case 2:
		action = "shown the door";
		break;
	case 3:
		action = "politely asked to leave";
		break;
	case 4:
		action = "on its way to the search engine selector but got lost";
		break;
	case 5:
	default:
		action = "not found and got caught by the 404 police";
		break;
}
console.log(action);
	msgToDisplay = "Your search request, which is \"" + pureString + "\", was " + action + ".\nThank you for choosing Searchless as your non-search engine!";
	document.getElementById("s1").style.display = "initial";
}
console.log(msgToDisplay);
document.getElementById("m1").innerHTML = msgToDisplay;
function realSearch(engine)
{
	window.location.href = engine + pureString;
}
document.getElementById("year").innerHTML = new Date().getFullYear();
// @license-end
