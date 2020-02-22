// import * as d3 from 'd3'
import { scaleQuantile } from "d3"
import { midi, transpose, scale, range } from "tonal"
import * as Tone from "tone"


// ************************
// TEST CONSOLE LOGS
// ************************

// console.log(midi("c4"))

// console.log(midiToNoteName('midiToNoteName:', 61))

// console.log(transpose("d4", "3M"))
// console.log(scale("major").map(transpose("C2")))


// ************************
// ALEX
// ************************

const synth = new Tone.Synth().toMaster()

function playNote(val) {
  const firstMusicScale = scaleQuantile()
    .domain([0, 255])
    .range([1, 128])

  // console.log(midiToNoteName(firstMusicScale(val)))

  // const noteName = midiToNoteName(firstMusicScale(val))

  // console.log(firstMusicScale(noteName))
  // synth.triggerAttackRelease(`${}`, '8n')
}

playNote(140)



// ************************
// WILL
// ************************




// ************************
// BRIAN
// ************************
console.log("this is brian :)");