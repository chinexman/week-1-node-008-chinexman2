
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
    let maxPair = 0
    cleanPile.sort()
    dirtyPile.sort()
    let unmatched = []
    while(cleanPile.length){
        if(cleanPile.slice(1).includes(cleanPile[0])){
            maxPair++
            cleanPile.splice(0,2)
        }else{
            unmatched.push(...cleanPile.slice(0,1))
            cleanPile = cleanPile.slice(1)
        }
    }

console.log(maxPair)
    
    for(item of unmatched){
        if(dirtyPile.includes(item) && noOfWashes > 0){
            maxPair++
            let index = dirtyPile.indexOf(item)
            dirtyPile.splice(index,1)
            noOfWashes--
        }
    }
    
console.log(dirtyPile)
    while(dirtyPile.length && noOfWashes >= 2){
        if(dirtyPile.slice(1).includes(dirtyPile[0])){
            maxPair++
            dirtyPile.splice(0,2)
            noOfWashes-=2
            console.log(noOfWashes)
        }else{
            dirtyPile = dirtyPile.slice(1)
            console.log(dirtyPile)
        }
    }

    return maxPair
}


console.log(getMaxPairs(10,[1, 2, 1,2,3,4,5],[1, 2, 3, 4, 5, 16, 17, 17, 19, 20,20]))
//module.exports = getMaxPairs;