// code for changing title of event

var greeting = document.getElementById("greeting");
var image = document.getElementById("picture");

$("#christmas").click(function(){
	console.log("christmas");
	console.log(greeting);
	greeting.innerHTML = "Merry Christmas!";
	
	})

$("#birthday").click(function(){
	greeting.innerHTML = "Happy Birthday!";
	
	})

$("#mother").click(function(){
	greeting.innerHTML = "Happy Mother's Day!";
	
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

$("#red").click(function(){
	console.log("red");
	colour.style.backgroundColor = "#af0314";
	
	})

$("#yellow").click(function(){
	console.log("yellow");
	colour.style.backgroundColor = "#f2b141";
	
	})