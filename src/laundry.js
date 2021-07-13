/**
 * Laundry Problem
 * Question 2
 *
 * @returns {any} Trip data analysis
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
    console.log("good")
     let tripPair = 0;
    cleanPile.sort();
    dirtyPile.sort();
    console.log(cleanPile)
    let unmatched = [];

    //loop through cleanpile 
     while(cleanPile.length>=1){
      if(cleanPile.slice(1).includes(cleanPile[0])){
      tripPair++;
     cleanPile.splice(0,2);
     
     }else{
     unmatched.push(...cleanPile.slice(0,1));
     cleanPile = cleanPile.slice(1);
     
     }
    }
   console.log(unmatched);



return unmatched;

}
console.log(getMaxPairs(5,[1,2,2,7,8,3,7,4],[6,8,4,8,10,9]));

//module.exports = getMaxPairs;
