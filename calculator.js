// In your JavaScript, put an event listener on each of the buttons.



var addBtn = document.getElementById("add");
// console.log("addBtn", addBtn);
var subtractBtn = document.getElementById("subtract");
var multiplyBtn = document.getElementById("multiply");
var divideBtn = document.getElementById("divide");
var output = document.getElementById("output");


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplyNums(one, two) {
	return one * two;
};

multiplyBtn.addEventListener("click", function () {
	output.innerHTML = multiplyNums(document.getElementById("inputOne").value, document.getElementById("inputTwo").value);	
});


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

 function addNums(one, two) {
 	return +one + +two;
 };

 addBtn.addEventListener("click", function () {
 	output.innerHTML = addNums(document.getElementById("inputOne").value, document.getElementById("inputTwo").value);
 });	

 /*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */	

function subtractNums(one, two) {
	return one - two;
};

subtractBtn.addEventListener("click", function () {
	output.innerHTML = subtractNums(document.getElementById("inputOne").value, document.getElementById("inputTwo").value);
});

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divideNums(one, two) {
	return one / two;
};

divideBtn.addEventListener("click", function () {
	output.innerHTML = divideNums(document.getElementById("inputOne").value, document.getElementById("inputTwo").value);
});







































