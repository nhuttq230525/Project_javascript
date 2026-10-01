console.log("video 40")


const ages = [20, 52, 5, 12, 18, 45]

const agesX2 = ages.map(function (value, index) {
    return value * 2
})

const agesX3 = ages.map((value, index) => {
    return value * 3
})

const ages18 = ages.filter((value, index) => {
    return value > 18
})


console.log("agesX2", agesX2)
console.log("agesX3", agesX3)
console.log("ages18", ages18)