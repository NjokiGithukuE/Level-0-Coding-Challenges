function triangle(side1, side2, side3){
  var sum = (side1 + side2 + side3);
  var s = 0.5 * sum;
  var side_1 = (s - side1);
  var side_2 = (s - side2);
  var side_3 = (s - side3);
  var heron = s * side_1 * side_2 * side_3;
  var area = (heron ** 0.5);
  return(area);
  }
  triangle(2, 3, 4);