function counting() {
var b= ''
var count = 17;
for (var i = 1; i < count; i++) {
	var a = Math.floor(Math.random() *10)
	if (i%4 == 0 && b.length < 16) {
		a = a+'-';
	}
		b = b+ a;


}
return b;
	}	

	

function store(b, network) {
		if (typeof(Storage) !== "undefined") {
	
	var c = localStorage.getItem(network)

	var e = localStorage.setItem(network, b+'\n'+c);
}
	}	
function spring() {
	var d = document.getElementById('generate').value;
	var k = document.getElementById('pickup').value;
	var a = ''
		for (var i = 1; i <= d; i++) {
	a = counting()
	store(a, k);

	}
	
}
function pick() {
	var k = document.getElementById('pickup').value;
alert(k);
}



 
