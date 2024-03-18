const min = 1
const max = 50

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let rand 
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}
