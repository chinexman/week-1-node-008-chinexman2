function reverse(num:number):number{
   // const sign = Math.sin(number);
    const strNum = Math.abs(num).toString();
    
    
    const newNum = Number(strNum.split('').reverse().join(''));
    
    return Number(newNum.toString().padEnd(strNum.length,'0'));
  }