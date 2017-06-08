// code for changing title of event and image

var greeting = document.getElementById("greeting");
var image = document.getElementById("picture");

$("#christmas").click(function(){
	console.log("christmas");
	console.log(greeting);
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
	console.log("pink");
	colour.style.backgroundColor = "#ff7fa3";
	
	})

$("#blue").click(function(){
	console.log("blue");
	colour.style.backgroundColor = "#64a7f4";
	
	})

$("#green").click(function(){
	console.log("green");
	colour.style.backgroundColor = "#197016";
	
	})


$("#yellow").click(function(){
	console.log("yellow");
	colour.style.backgroundColor = "#f2b141";
	
	})

// code for changing border style

var borderTop = document.getElementById("picture");

$("#double").click(function(){
	console.log("picture");
	borderTop.style.borderTop = "double 7px white";
	borderTop.style.borderBottom = "double 7px white";
})

$("#solid").click(function(){
	console.log("picture");
	borderTop.style.borderTop = "solid 6px white";
	borderTop.style.borderBottom = "solid 6px white";
})

$("#dotted").click(function(){
	console.log("picture");
	borderTop.style.borderTop = "dotted 6px white";
	borderTop.style.borderBottom = "dotted 6px white";
})

// code for choosing font


