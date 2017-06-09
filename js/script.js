// code for changing title of event and image

var greeting = document.getElementById("greeting");
var image = document.getElementById("picture");


$("#christmas").click(function(){
	greeting.innerHTML = "Merry Christmas!";
	$("#picture").attr("src", "images/christmas.jpg");
	
	})

$("#birthday").click(function(){
	greeting.innerHTML = "Happy Birthday!";
	$("#picture").attr("src", "images/birthday.jpg");
	})

$("#mother").click(function(){
	greeting.innerHTML = "Happy Mother's Day!";
	$("#picture").attr("src", "images/flowers.jpg");
	})

// code for changing background colour

var colour = document.getElementById("background");

$("#pink").click(function(){
	colour.style.backgroundColor = "#ea106e";
	
	})

$("#blue").click(function(){
	colour.style.backgroundColor = "#365bc9";
	
	})

$("#green").click(function(){
	colour.style.backgroundColor = "#197016";
	
	})


$("#purple").click(function(){
	colour.style.backgroundColor = "#460784";
	
	})

// code for changing border style

var borderTop = document.getElementById("picture");

$("#double").click(function(){
	borderTop.style.borderTop = "double 7px white";
	borderTop.style.borderBottom = "double 7px white";
})

$("#solid").click(function(){
	borderTop.style.borderTop = "solid 6px white";
	borderTop.style.borderBottom = "solid 6px white";
})

$("#dotted").click(function(){
	borderTop.style.borderTop = "dotted 6px white";
	borderTop.style.borderBottom = "dotted 6px white";
})

// code for choosing font

var font = document.getElementById("greeting");

$("#handwriting").click(function(){
	greeting.style.fontFamily = "Homemade Apple";
	greeting.style.fontSize = "25px";
})

$("#plain").click(function(){
	greeting.style.fontFamily = "Muli";
	greeting.style.fontSize = "30px";
})

$("#cursive").click(function(){
	greeting.style.fontFamily = "Parisienne";
	greeting.style.fontSize = "35px";
})

$("#bold").click(function(){
	greeting.style.fontFamily = "Fugaz One";
	greeting.style.fontSize = "30px";
})

// code for changing the text in the message box

$("#messageWrite").keyup(function(){
	$('#message').text($(this).val());
})

