const BinarySearch = (arr,element)=>{
     let array = arr.sort();
    let firstIndex = 0;
    let lastIndex = array.length-1;
    let midIndex = Math.floor((firstIndex + lastIndex)/2);


    console.log("first :" + firstIndex);
    console.log("last :" + lastIndex);
    console.log("mid :" + midIndex);
    console.log("**************************")
    while(array[midIndex] !==element && firstIndex <lastIndex){
        console.log("first :" + firstIndex);
        console.log("last :" + lastIndex);
        console.log("mid :" + midIndex);
        console.log("**************************")
        if(element < array[midIndex]){
            
            lastIndex = midIndex;
        } else{
            firstIndex = midIndex + 1
        }

        midIndex = Math.floor((firstIndex + lastIndex)/2)
    }

    return midIndex ? midIndex :-1;
}


console.log(BinarySearch([1,2,3,4,5,6,7,8],8));

let arr = [1,2,3,4]
console.log(arr.indexOf(2));

const linearSearch = (arr,element)=>{
    let array = arr.sort();
    for (let index = 0; index < array.length; index++){
        if(array[index]===element){
            return index;
        }
    }
}

console.log(linearSearch([1,2,3,4,5,6,7,8],8))