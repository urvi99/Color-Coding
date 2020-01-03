let numSquares = 6;


let colors = generateColors(numSquares);


let squares = document.querySelectorAll(".square");

let pickedColor = pickColor();
let display = document.getElementById("displayColor");
display.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i< modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click", function(){
		
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		(this.textContent === "Easy") ? numSquares = 3 : numSquares = 6 ;

		reset(); 

	});
}

function reset(){
	colors = generateColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDispaly to match picked color
	display.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//change colors of sqaure
	for(var i = 0; i<squares.length; i++)
	{	
		if(colors[i])
		{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
	else
	{
		squares[i].style.display = "none";
	}
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = " ";

}

//easyBtn.addEventListener("click",function(){
//	easyBtn.classList.add("selected");
//	hardBtn.classList.remove("selected");
//	numSquares = 3;
//	colors = generateColors(numSquares);
//	pickedColor = pickColor();
//	display.textContent = pickedColor;
//	for(let i = 0; i< squares.length; i++)
//	{
//		if(colors[i])
//		{
//			squares[i].style.background = colors[i];
//		}
//		else{
//			squares[i].style.display = "none";
//		}
//	}
//
//});

//hardBtn.addEventListener("click",function(){
//	hardBtn.classList.add("selected");
//	easyBtn.classList.remove("selected");
//	numSquares = 6;
//	colors = generateColors(numSquares);
//	pickedColor = pickColor();
//	display.textContent = pickedColor;
//	for(let i = 0; i< squares.length; i++)
//	{
//		
//			squares[i].style.background = colors[i];
//		
//			squares[i].style.display = "block";
//		
//	}


//});


resetButton.addEventListener("click",function(){
	reset();
});

for(let i = 0; i< squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		console.log(clickedColor,pickedColor);
		if(clickedColor === pickedColor)
		{	
			messageDisplay.textContent = "Correct !!!";
			changecolors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"

		}

		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

//change the color of all sqaures to correct color

function changecolors(color)
{
	for(let i = 0 ; i < squares.length ; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num)
{
	let arr = [];
	for(let i = 0; i<num ; i++)
	{
		arr.push(pickRandomColor())
	}
	return arr;
}

function pickRandomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b+ ")" ;

}




