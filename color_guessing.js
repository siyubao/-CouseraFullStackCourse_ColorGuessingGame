var colors = ["red", "orange", "yellow", "green", "blue", "teal", "purple"];
var target;
var guess_input_text;
var finished = false;
var guesses = 0;

function do_game() {
	target = colors[Math.floor(Math.random() * colors.length)];
	alert("I'm thinking of: " + target);
	
	while (guess_input_text !== target) {
		guess_input_text = prompt("I'm thinking of one of these colors:\n\n" + colors.sort().join(", ") + "\n\n What color am I thinking of?");
		
		check_guess();
		guesses += 1
	}
}


function check_guess() {
	if (!colors.includes(guess_input_text)) {
		confirm("Sorry, I don't recognize your color.\n\nPlease try again.");
		return false;
	}
			
	if ((colors.includes(guess_input_text)) && (guess_input_text != target)) {
		confirm("Sorry, your guess is not correct!\n\nPlease try again.");
		return false;
	}
	
	if (colors.indexOf(guess_input_text) > colors.indexOf(target)) {
		confirm("Sorry, your guess is not correct!\n\nHint: your color is alphabetically higher than mine.\n\nPlease try again.");
		return false;
	}
	
	if (colors.indexOf(guess_input_text) < colors.indexOf(target)) {
		confirm("Sorry, your guess is not correct!\n\nHint: your color is alphabetically lower than mine.\n\nPlease try again.");
		return false;
	}
	
	else {
		myBody = document.getElementsByTagName("body")[0];
		myBody.style.backgroundColor = target;
		alert("Congratulations! You have guessed the color!\n\nIt took you " + (guesses+1) + " guesses to finish the game!\n\nYou can see the color in the background.")
		return true;
	}
}
