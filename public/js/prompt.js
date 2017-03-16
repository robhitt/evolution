function CustomPrompt(){
	this.render = function(dialog,func){

		var winW = window.innerWidth;
	  var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
	  var dialogbox = document.getElementById('dialogbox');

		dialogoverlay.style.display = "block";
	  dialogoverlay.style.height = winH+"px";

//		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
//	  dialogbox.style.top = "100px";

	  dialogbox.style.display = "block";

		document.getElementById('dialogboxhead').innerHTML = "<img src='images/evolution-logo-text.png'>";
	  document.getElementById('dialogboxbody').innerHTML = `<div id='intro-text'>${dialog}</div>`

		document.getElementById('dialogboxbody').innerHTML += '<input id="prompt_value1" value="Player 1"> <input id="prompt_value2" value="Player 2">';
		document.getElementById('prompt_value1').classList.add('input-box')
		document.getElementById('prompt_value2').classList.add('input-box')
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Prompt.ok(\''+func+'\')">OK</button>';
	}

	this.cancel = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}

	// in progress
	// Use this to obtain player 1 Name
	this.ok = function(func){
		var prompt_value1 = document.getElementById('prompt_value1').value;
		var prompt_value2 = document.getElementById('prompt_value2').value;
		//debugger
		window[func]([prompt_value1, prompt_value2]);
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";


		return prompt_value1
	}


}
var Prompt = new CustomPrompt();
