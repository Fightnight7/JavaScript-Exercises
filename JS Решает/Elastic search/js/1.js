let arr = document.querySelectorAll("li");
let arrtext = [];
let outarr = [];
let ul = document.getElementById("ul");

document.getElementById("text").onkeyup = search;

function search(){
	let text = document.getElementById("text").value;
	for (let i=0; i<arr.length; i++){
		arrtext[i] = arr[i].innerHTML;


	}
	
	for (let i=0; i<arrtext.length; i++){
		
		for (let j=0; j<arrtext[i].length; j++){
			if (text == arrtext[i][j]){
				outarr.push('<li>' + arrtext[i] + '</li>');
				break;
		    }

	    }

    }
    ul.innerHTML = "";
    for (let p = 0; p<outarr.length; p++){
    	ul.innerHTML += outarr[p]; 
    }
    
}
