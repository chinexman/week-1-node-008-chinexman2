function busStop(arr){

  let enter = 0;
  let drop = 0;
  let left = 0;
    // for(let elem = 0; elem < arr.length; elem++){
        for (let elem of arr){
        console.log(elem[1])
     enter += elem[0];
     drop += elem[1];
    }
    console.log(enter)
    console.log(drop)
 left = enter - drop;
 return left;

}

console.log(busStop([[10,0],[5,6],[3,6],[3,9]]));
