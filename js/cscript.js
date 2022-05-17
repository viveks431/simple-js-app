function add(num1, num2) {
    let res = num1 + num2
    return res
  };
  
  function subtract(num1, num2) {
    let res = num1 - num2
    return res
  }
  
  function multiply(num1, num2) {
    let res = num1 * num2
    return res
  } 
  
  function divide(d1, d2){
    if(d1 === 0){
      return "Infinity"
    }else{
      let result = d1 / d2;
      return result;
    }
  }