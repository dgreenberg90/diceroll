



diceRoll1();
function diceRoll1() {
	var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
	var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

	document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
	document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

	if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").innerHTML = "<img class='header-img' src='images/trophy.png'> David is the King!!";
		document.querySelector("p#david").innerHTML = "David <i class='far fa-grin-wink'></i>";
		document.querySelector("p#marleen").innerHTML = "Marleen <i class='far fa-sad-tear'></i>";
	} else if (randomNumber2 > randomNumber1) {
		document.querySelector("h1").innerHTML = "<img class='header-img' src='images/trophy.png'> Marleen is the Queen!!";
		document.querySelector("p#marleen").innerHTML = "Marleen <i class='far fa-grin-wink'></i>";
		document.querySelector("p#david").innerHTML = "David <i class='far fa-sad-tear'></i>";
	} else {
		document.querySelector("h1").innerHTML = "<img class='header-img' src='images/indifferent.png'> Draw! No Winner!";
		document.querySelector("p#marleen").innerHTML = "Marleen <i class='far fa-meh'></i>";
		document.querySelector("p#david").innerHTML = "David <i class='far fa-meh'></i>";
	}
}

// Boring, minimal code version:
// 	if (randomNumber1 > randomNumber2) {
// 		document.querySelector("h1").innerHTML = "<img class='header-img' src='images/trophy.png'> Player1 Wins!";
// 	} else if (randomNumber2 > randomNumber1) {
// 		document.querySelector("h1").innerHTML = "<img class='header-img' src='images/trophy.png'> Player2 wins!";
// 	} else {
// 		document.querySelector("h1").innerHTML = "<img class='header-img' src='images/indifferent.png'> Draw!";
// 	}
// }