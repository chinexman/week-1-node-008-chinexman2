/**
 * Laundry Problem
 * Question 2
 *
 * @returns {any} Trip data analysis
 */
function getMaxPairs(noOfWashes, cleanSock, dirtySock) {
    console.log("good")
     let tripPair = 0;
    cleanSock.sort();
    dirtySock.sort();
    console.log(noOfWashes);
    console.log(cleanSock)
    console.log(dirtySock)
    let unmatched = [];

    //loop through cleanSock 
     while(cleanSock.length>=1){
      if(cleanSock.slice(1).includes(cleanSock[0])){
      tripPair++;
     cleanSock.splice(0,2);
     
     }else{
     unmatched.push(...cleanSock.slice(0,1));
     cleanSock = cleanSock.slice(1);
     
     }
    }
   console.log(unmatched);
   console.log(noOfWashes)
     
console.log(tripPair)
   for (let elem of unmatched){
       if(dirtySock.includes(elem) && noOfWashes>0){
           console.log(elem)
       tripPair++;
       let index = dirtySock.indexOf(elem);
       console.log(index)
       dirtySock.splice(index,1);
       noOfWashes--
       }
   }
console.log(tripPair)
console.log(noOfWashes)
console.log(dirtySock.slice())

while(dirtySock.length && noOfWashes>=2){
    if(dirtySock.slice(1).includes(dirtySock[0])){
        console.log(dirtySock.slice(1))
        console.log(dirtySock.slice(1))
        tripPair++;
        dirtySock.splice(0,2);
        noOfWashes-=2;
    }else{
    dirtySock = dirtySock.slice(1);
}
  
 }

return tripPair;

}
console.log(getMaxPairs(5,[1,2,2,7,8,3,7,4],[6,8,4,8,10,9,9,11,11]));

module.exports = getMaxPairs;
