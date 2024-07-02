// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start
const width = 128; // Easier to do math on
const height = 128;

setDocDimensions(width, height);

const numCraters = 10

const t = new bt.Turtle()

t.up()
t.jump([64, 64-32])
t.down()
t.arc(360, 32)

function findMaxDistance(x, y) {
  let distances = []
  if( x >= 64 ) {
    distances.push(96-x);
  } else {
    distances.push(x-32);
  }
  if( y >= 64 ) {
    distances.push(96-y);
  } else {
    distances.push(y-32);
  }
  return Math.min(...distances)
}

for (let i = 0; i < numCraters; i++) {
  // Finds a random coordinate in the circle
  const xCoord = bt.randIntInRange(38, 90);
  // Math to figure out max y distance possible at x coord so that the point is not outside the area
  const angle = Math.acos((xCoord-64)/32)
  const yOffset= Math.round(Math.sin(angle)*32)
  const yCoord = bt.randIntInRange(64-yOffset, 64+yOffset);
  // Random circle radius
  const circleRadius = bt.randIntInRange(1, findMaxDistance(xCoord, yCoord))
  if (yCoord >= 64) {
    t.jump([xCoord, yCoord-circleRadius])
  } else {
    t.jump([xCoord, yCoord+circleRadius])
  }
  t.arc(360, circleRadius)
}

// draw it
drawLines(t.lines());