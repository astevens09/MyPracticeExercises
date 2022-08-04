//Create array for car objects
var cars = [];
//Create object constructor for Car objects
  //Car properties will be: make, color, year, honk function
  //honk function should alert the car's color, make and "honk honk!!"
  //make default parameters to make==ford, color==black, year==2020
function Car(make='Ford', color='black', year=2020){
  this.make= make;
  this.color= color;
  this.year= year;
  this.honk= function(){
    alert(`${this.color} ${this.make} honk honk!!!`);
  }
}



//Create a prompt to ask use for input for 5 new car objects into cars array:
  //When creating car objects include below:
  //Car make should include Ford, Nissan, Chevy
  //Car color should include black, yellow, red
  //Car year should be between 2010-2020

  //This for loop ask the user 5 times for the make, color, and year of a car
  //The string received from the prompt  is split into an array
  //The array is passed into the Car constructor function using the spread operato
  for(var i=0; i<3; i++){
    //This returns a string
    var temp = prompt("Enter car make,color, and year separated by commas with no spaces");
    //Separate string into an array
    var carData = temp.split(',');
    //Assign Car prototype temp value.
    var tempCar = new Car(...carData);
    //push tempCar array into cars array
    cars.push(tempCar);
  }
  console.log(cars);

//log all cars made on even years, if no cars available log it.

//log all cars that are red and yellow (best ferrari colors), if no cars available log it.

//call honk function for all the 'Ford' model cars

//call honk function for all the 'Nissan' model cars



//concepts to try
  //Default parameters for functions
  //the spread operator '...'
