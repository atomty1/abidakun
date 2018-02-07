function clickme(val) {
	var value = document.getElementById("first").value;
	document.getElementById('first').value = value + val;
	return val;
}

function device() {
	var a = document.getElementById("first").value;
	console.log(a.length);
	if (a.length == 11) {
		document.getElementById("first").value = 'calling';
		
	} 
	else {
		document.getElementById("first").value = 'wrong number';
		
	}
}
function remove() {
	document.getElementById('first').value = ''	
}