console.log("video 39")

const scores = [9, 8, 3, 5, 6]

// //for each
// scores.forEach(function (value, index) {
//     console.log("value", value, "index", index)
// })

//map
scores.map(function (value, index) {
    console.log("value", value, "index", index)
})

//modify date

const newScores = scores.map(function (value, index) {
    return value + 5
})

console.log("newScores", newScores)