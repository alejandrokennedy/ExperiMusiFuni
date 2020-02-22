import * as d3 from 'd3'
// import * as Tonal from "@tonaljs/tonal"
import { midi, transpose, scale } from "tonal"
import _ from 'lodash'


console.log('testing webpack watch')
console.log(d3)
// console.log(Tonal.note("A4").midi)

console.log(midi("c4")); // => 60
transpose("d4", "3M"); // => 'F#4'
scale("major").map(transpose("C2")); // => ['C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2']


function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());