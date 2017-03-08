function CustomPrompt(){
	this.render = function(dialog, func){

		var dialogoverlay = document.getElementById('dialogoverlay');
	  var dialogbox = document.getElementById('dialogbox');

		// dialogoverlay is a white div with .8 opacity
		// when CustomPrompt is called, show the dialogoverlay div
		dialogoverlay.style.height = window.innerHeight + "px";
		dialogoverlay.style.display = "block";

		// when CustomPrompt is called, show the dialogbox div
	  dialogbox.style.display = "block";

		// change the contents of the dialogboxhead and dialogboxbody divs
		document.getElementById('dialogboxhead').innerHTML = "<img src='images/evolution-logo-text.png'>";
	  document.getElementById('dialogboxbody').innerHTML = `<div id='intro-text'>${dialog}</div>`
		document.getElementById('dialogboxbody').innerHTML += '<input id="prompt_value1" value="Player 1"> <input id="prompt_value2" value="Player 2">';
		document.getElementById('prompt_value1').classList.add('input-box')
		document.getElementById('prompt_value2').classList.add('input-box')

		// when OK button is clicked, execute Prompt.ok(function)
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Prompt.ok(\''+func+'\')">OK</button>';
	}

	this.ok = function(func){
		// get the input from the input fields
		var prompt_value1 = document.getElementById('prompt_value1').value;
		var prompt_value2 = document.getElementById('prompt_value2').value;

		// execute the callback with a parameter of an array with the two values
		window[func]([prompt_value1, prompt_value2]);

		// hide the divs
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";

	}
}

var Prompt = new CustomPrompt();
