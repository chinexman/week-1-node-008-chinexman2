


/**
 * 
 * @param {number[]}
 * @return {number}
 */


//const str1 = "120";



function arrayPacking(integerArray:number[]): number{
    let strValue = "";
    
    for(let index = integerArray.length -1; index>=0; index--){
        const binValue = integerArray[index].toString(2).padStart(8,"0");
        console.log(binValue)
        strValue += binValue;
        console.log(strValue)
    }
       return parseInt(strValue,2);
    }
    
    console.log(arrayPacking([24,85,0]));
    [].map

    