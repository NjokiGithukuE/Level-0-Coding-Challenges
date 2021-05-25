function maximumnumber(x,y,z){
    if(x>y && x>z){
      return x+" is the maximum number.";
    }else if(y>x && y>z){
      return  y+" is the maximum number.";
    }else{
      return z+" is the maximum number.";
    }
  }
  maximumnumber(5,6,7);