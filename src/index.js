import * as d3 from 'd3'
import { midi, transpose, scale } from "tonal"
import _ from 'lodash'
import * as p5 from 'p5'
import * as THREE from 'three'

// ************************
// TEST CONSOLE LOGS
// ************************

// console.log(d3)
console.log(midi("c4"))
// console.log(transpose("d4", "3M"))
// console.log(scale("major").map(transpose("C2")))

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

let knob1, knob2;
let b1, b2, b3, b4, b5, b6, b7, b8;

// ************************
// ALEX
// ************************




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

    console.log("test")
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();

// ************************
// BRIAN
// ************************
