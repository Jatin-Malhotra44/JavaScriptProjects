var button=document.querySelector("#button") 
var sqr=document.querySelectorAll('td')


function clear(){
	for (var i = 0; i< sqr.length; i++) {
		sqr[i].textContent=''
	}
}
button.addEventListener('click',clear);

function change(){
	if (this.textContent===''){
		this.textContent='X';
	}
	else if(this.textContent==='X'){
		this.textContent='O';
	}
	else {this.textContent=''
	}
	}

for (var i = 0; i < sqr.length; i++) {
	sqr[i].addEventListener('click',change)
}