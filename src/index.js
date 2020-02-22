import * as d3 from 'd3'
import { midi, transpose, scale } from "tonal"
import _ from 'lodash'
// import * as p5 from 'p5'
import * as THREE from 'three'

// ************************
// TEST CONSOLE LOGS
// ************************

// console.log(d3)
// console.log(midi("c4"))
// console.log(transpose("d4", "3M"))
// console.log(scale("major").map(transpose("C2")))

// console.log(midiToNoteName('midiToNoteName:', 61))

// console.log(transpose("d4", "3M"))
// console.log(scale("major").map(transpose("C2")))

// let knob1, knob2;
// let b1, b2, b3, b4, b5, b6, b7, b8;

// ************************
// ALEX
// ************************

// const synth = new Tone.Synth().toMaster()

// function playNote(val) {
//   const firstMusicScale = scaleQuantile()
//     .domain([0, 255])
//     .range([1, 128])

//   // console.log(midiToNoteName(firstMusicScale(val)))

//   // const noteName = midiToNoteName(firstMusicScale(val))

//   // console.log(firstMusicScale(noteName))
//   // synth.triggerAttackRelease(`${}`, '8n')
// }

// playNote(140)



// ************************
// WILL
// ************************

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 400, 400 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var animate = function () {

    console.log("test");
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

// animate();




// ************************
// BRIAN
// ************************
console.log("this is brian :)");

var serial;   // variable to hold an instance of the serialport library
var portName = 'COM3';    // fill in your serial port name here
var inData;   // variable to hold the input data from Arduino

var minWidth = 600;   //set min width and height for canvas
var minHeight = 400;
var width, height;    // actual width and height for the sketch

function setup() {
  // set the canvas to match the window size
  if (window.innerWidth > minWidth){
    width = window.innerWidth;
  } else {
    width = minWidth;
  }
  if (window.innerHeight > minHeight) {
    height = window.innerHeight;
  } else {
    height = minHeight;
  }

  //set up canvas
  // createCanvas(width, height);
  // noStroke();

  //set up communication port
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);  // set a callback function for the serialport list event

  serial.open('COM3');
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
}

function draw() {
  // set background to black
  // background(0);
  animate();
}
setup();
draw();
// Following functions print the serial communication status to the console for debugging purposes

function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 // print(i + " " + portList[i]);
 }
}

function serverConnected() {
  // print('connected to server.');
}

function portOpen() {
  // print('the serial port opened.')
}

var serialInArray=[0,0,0,0,0,0,0,0,0,0];
var serialCount=0;
var firstContact=false;

var knob1=0;
var knob2=0;
var b1,b2,b3,b4,b5,b6,b7,b8;

function serialEvent() {
  // inData = Number(serial.read());

  inData = (serial.read());
  if(firstContact==false){
  	if(inData==65){
		serial.clear();
		firstContact=true;
		serial.write('A');
		console.log("firstContact=true");
  	}
  }
  else{
  	serialInArray[serialCount]=inData;
  	serialCount++;

  	// when all values hit
  	if (serialCount>9){
  		//set values to variables
  		knob1=Number(serialInArray[0]);
  		console.log("knob1 val: ");
  		console.log(knob1);

  		knob2=Number(serialInArray[1]);
  		console.log("; knob2 val: ");
  		console.log(knob2);


  			b1=Number(serialInArray[2]);
  		console.log("b1 : ");
  		console.log(b1);
  			b2=Number(serialInArray[3]);
  		console.log("b2 : ");
  		console.log(b2);
  			b3=Number(serialInArray[4]);
  		console.log("b3 : ");
  		console.log(b3);
  			b4=Number(serialInArray[5]);
  		console.log("b4 : ");
  		console.log(b4);
  			b5=Number(serialInArray[6]);
  		console.log("b5 : ");
  		console.log(b5);
  			b6=Number(serialInArray[7]);
  		console.log("b6 : ");
  		console.log(b6);
  			b7=Number(serialInArray[8]);
  		console.log("b7 : ");
  		console.log(b7);
  			b8=Number(serialInArray[9]);
  		console.log("b8 : ");
  		console.log(b8);

  		

  		console.log(serialInArray);

  		serial.write('A');
  		serialCount=0;  	
  	}
  }
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function portClose() {
  print('The serial port closed.');
}
