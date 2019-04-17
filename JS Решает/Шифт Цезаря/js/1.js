let textarea = document.querySelector("textarea");
let text = "";
textarea.oninput = Cesar;
// textarea.onkeyup = event.preventDefault();



function Cesar(event){
	console.log(event);
	
	text += String.fromCharCode(event.keyCode + 3);
	console.log(text);
	textarea.value = text;

}