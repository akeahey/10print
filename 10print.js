/*
  I've been spending a lot of time looking at water recently, and the random (but not?)
  patterns in how it moves, rushes, ebbs, and flows. I wanted to create something
  that would remind me of those patterns and how the sun shines off of them
*/

const w = process.stdout.columns
const arr = ['\x1b[44m\x1b[37m', '\x1b[44m\x1b[36m', '\x1b[44m\x1b[32m', '\x1b[44m\x1b[33m']
const lines = ['╱', '╲', '╳']

function draw () {
  setTimeout(draw, 1000/30)
  let output = ''
  for (let i = 0; i < w; i++) {
    let x = Math.random()
    const r = Math.floor(Math.random() * arr.length);
    output += arr[r]
    const s = Math.floor(Math.random() * lines.length);
    output += lines[s]
  }
  console.log(output)
}

draw()

