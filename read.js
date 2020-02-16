"use strict";

/*
  1000 milliseconds = 1 second
  300 wpm = 300 words for every 60 seconds
  300 / 60 = 5 words per second
    - Repeat function 5 times in 1 second
    - 1 second / 5 repeats = .2 seconds
    - .2 seconds = 200 milliseconds
  Do display a text at 300 words per minute the function needs to be called once every 200 milliseconds
*/

var index = 0;
var text = "";
var wpm = 0;
var words = text.split(" ");
var repeat;

function reader() //function called by the button in index.html
{
  text = document.getElementById("text_input").value; //Text Input text box value
  wpm = document.getElementById("wpm").value; //WPM text box value
  let speed = parseFloat(wpm); // take wpm and set it as a float value in speed

  words = text.split(/\s+/); // split the text string at every whitespace

  speed = 1.0 / (speed / 60.0) * 1000; // the formula to set the speed

  repeat = setInterval(main, speed); // repeat the function 'main' at the interval of 'speed'
}

function main()
{
  document.getElementById("output").innerHTML = "<h1>" + words[index] + "</h1>"; // add an h3 tag to the div element with the words in 'words' at 'index' index
  index++; // increment the index position
  if (index === words.length) // if the index is at the last element of the array stop the repetition
  {
    clearInterval(repeat);
  }
}
