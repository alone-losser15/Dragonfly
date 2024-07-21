// Define the variable to be incremented
let counter = 0;

// Function to increment the counter
function incrementCounter() {
  counter=(counter+1)%5;
  console.log('<img src="./slideimage/img'+counter+'.jpg" >');
  document.getElementById("scroll_page").innerHTML='<img src="./slideimage/img'+counter+'.jpg" >';
}

// Set an interval to call the increment function every second (1000 milliseconds)
setInterval(incrementCounter, 2500);
