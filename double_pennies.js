function double_pennies(num){
  var penny = 0.01;
  for(var i = 1; i <= num; i++){
    penny = penny * 2;
  }

  return penny;
}

console.log(double_pennies(30));
