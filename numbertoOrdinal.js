const numberToOrdinal = number => {
  let result = "";
console.log(number)
if(number > 10000){
    return "please enter a valid number range from 0 to 10000";
}
let strnumb = number.toString();
console.log(strnumb)
console.log(typeof strnumb);
console.log(strnumb[0])


if(strnumb ==="0"){
    result = strnumb;
    return result;
}
else if(strnumb[strnumb.length-1]>0 && strnumb[strnumb.length-1 ]<=3){
if((strnumb[0]==="1" && strnumb.length ===1) || (strnumb[strnumb.length-2]!=="1" && strnumb[strnumb.length-1]==="1")){

    result = strnumb + "st";
    console.log(result)
    return result;
}else if(strnumb[strnumb.length-1]==="1" && strnumb[strnumb.length-2]==="1" ){
   result = strnumb + "th";
   return result;
}

if((strnumb[0]==="2" && strnumb.length ===1) || (strnumb[strnumb.length-2]!=="1" && strnumb[strnumb.length-1]==="2")){

    result = strnumb + "nd";
    console.log(result)
    return result;
}else if(strnumb[strnumb.length-1]==="2" && strnumb[strnumb.length-2]==="1" ){
   result = strnumb + "th";
   return result;
}

if((strnumb[0]==="3" && strnumb.length ===1) || (strnumb[strnumb.length-2]!=="1" && strnumb[strnumb.length-1]==="3")){

    result = strnumb + "rd";
    console.log(result)
    return result;
}else if(strnumb[strnumb.length-1]==="3" && strnumb[strnumb.length-2]==="1" ){
   result = strnumb + "th";
   return result;
}

}else{
    result = strnumb + "th";
    return result;
}

return result;

};



console.log(numberToOrdinal(111));