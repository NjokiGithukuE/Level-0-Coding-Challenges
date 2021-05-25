function area(a, b, c){
  var sum = (a + b + c);
  var s = 0.5 * sum; //calculate the semiperimeter
  var sa = (s - a);
  var sb = (s - b);
  var sc = (s - c);
  var A = s * sa * sb * sc;
  var H = (A ** 0.5); //Heron's formula
  return(H);
  }
  area(2, 3, 4);