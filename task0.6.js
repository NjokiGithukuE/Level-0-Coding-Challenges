function maximumnumber(number1, number2, number3){
    if(number1 > number2 && number1 > number3){
      return number1+" is the maximum number.";
    }else if (number2 > number1 && number2 > number3){
      return  number2+" is the maximum number.";
    }else{
      return number3+" is the maximum number.";
    }
  }
  maximumnumber(5,6,7);