let cleanpile = [1, 2, 1,1, 1];
let dirtypile = [1, 4, 3, 2, 4];
let maxpair=0
console.log(cleanpile.slice(1).includes(cleanpile[0]))
console.log(cleanpile)
// while(cleanpile.length){
//     if(cleanpile.slice(1).includes(cleanpile[0])){
//         maxpair++
//         cleanpile.splice(0,2)
//     }else{
//         unmatched.push(...cleanPile.slice(0,1))
//         cleanPile = cleanPile.slice(1)
//     }
// }

// let noOfWash =4;

// //let trip=0;
// function wash(){

// }

function tripPair(cleanpile,dirtypile,noOfWash){















//     let pair ={};
//     for(let x of array){
//         console.log(x)
//         if(pair.hasOwnProperty(x)){
//             console.log(x);
//             pair[x]++;
//             if(pair[x]>1){
//            noOfWash--;
//             }
//         }else{
//             console.log(x)
//             pair[x]=1;
//             console.log(pair[x])
//         }
//     }
//   return trip;
}

console.log(tripPair(cleanpile,dirypile,noOfWash));