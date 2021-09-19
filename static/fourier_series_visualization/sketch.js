 //data structure for coefficient
class coefficient {
  constructor(_amplitude, _nth) {
    this.amplitude = _amplitude;
    this.nth = _nth;
  }
}


//array for save form data
let rect_coefficients = [];
let triang_coefficients = [];

//fill vectors with appropriate coefficient for rectangular and triangular wave
for (let i = 0; i < 15; i++) {
  let n = i * 2 + 1;
  let amplitude = 100 * (4 / (n * 3.14));

  let rect_coef = new coefficient(amplitude, n);
  rect_coefficients.push(rect_coef);

  amplitude = 30 * ((16 / (3.14)) * ((-1) ** ((n - 1) / 2)) / (n ** 2));
  triang_coef = new coefficient(amplitude, n);
  triang_coefficients.push(triang_coef);
}

/*-----------------------------------------*/

let time = 0;
let coefficients = []

// let coefficients = []; //array to fill from the server with form

let wave = []; //array of point of the function that will interpolate with vertex

//get the form with Id
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {

  //Cancels the event to send data
  e.preventDefault(); 

  const formData = new FormData(myForm);

  time=0;

  const data = {
    amplitude: formData.get("amplitude"),
    nth: formData.get("nth"),
  };


  let c = new coefficient(data.amplitude, data.nth);
  
  coefficients.push(c);

});

function rectangular() {
  time=0;
  coefficients = rect_coefficients;
}

//get a triangular request from the server
function triangular() {
  time=0;
  coefficients = triang_coefficients;
}

//clear the coefficient entered both in the client and in the server
function reset() {
  wave = []
  coefficients= []
}

//initial environment, is called when the program starts
function setup() {

  createCanvas(1200, 600);
  stroke(127, 127, 127);

}

//the function is called in loop and draw the sketch.
//the framerate is 60 frame per second 
function draw() {
  background(0, 10, 40);

  //return when coefficients is empty
  if (coefficients.length == 0) return;

  //draw x axis
  line(200, 300, 1000, 300);
  //translate the cordinates
  translate(300, 300);

  //center of the 1-th circle
  let x = 0;
  let y = 0;

  for (let i = 0; i < coefficients.length; i++) {

    //save the cordinates of the center of the (i-1)-th circle that will update for the i-th circle
    let prevx = x;
    let prevy = y;

    //calculate the center of the (i+1)-th circle
    x += coefficients[i].amplitude * cos(coefficients[i].nth * time);
    y += coefficients[i].amplitude * sin(coefficients[i].nth * time);

    noFill();
    stroke(120);

    ellipse(prevx, prevy, coefficients[i].amplitude * 2);

    //save the point of the latest circle in the beginning of array
    if (i == coefficients.length - 1) 
      wave.unshift(y); 

    
    stroke(255);
    //  fill(255);
    line(prevx, prevy, x, y);
  }

  /*draw the function linking all point of wave[] */
  {
    beginShape();
    translate(200, 0);
    line(x - 200, y, 0, y);

    ellipse(0, y, 5, 5);

    for (let i = 0; i < wave.length; i++) 
      vertex(i, wave[i]);
    
    endShape();
  }

  //increment time for the next loop
  time -= 0.02;

  //remove point too old
  if (wave.length > 600) {
    wave.pop();
  }
}
