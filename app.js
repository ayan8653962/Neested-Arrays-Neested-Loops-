// question 1
for (var i = 0; i < 3; i++) {   // rows
    var row = "";
    for (var j = 0; j < 3; j++) {   // columns
        row += "* ";
    }
    document.write(row + "<br>");
}

// question 2
for(var i=1; i<5; i++){
  for(var j=1; j<5; j++){
    document.write(j , " ")
  }
document.write("<br>")
}

// question 3
var divide = "" ;
for(j=1; j<8; j++){
  document.write(divide += "* ")
  document.write("<br> ")  
}
document.write("<br>")
// question 4
for(var i=1; i<6; i++){
    for(j=1; j<6; j++){
        document.write(j , " ")
    }
  document.write("<br>")
}
 document.write("<br>")
// question 5
for(var i=1; i<=5 ; i++){
  for(var j=1; j<i; j++){
   document.write(j + " ")
  }
  document.write("<br>")
}
 document.write("<br>")
// // question 6
for(var i=1; i<=10; i++){
  for(var j=1; j<=10; j++){
    document.write(i * j + " ")
  }
  document.write("<br>")
}
document.write("<br>")
// question 7
for(var i=6; i>=1; i--){
  for(var j=1; j <=i; j++){
    document.write("* ")
  }
  document.write("<br>")
}
document.write("<br>")
// question 8
for(var i=1; i<=4; i++){
  for(var j=1; j<=4; j++){
    document.write("#. ")

  }
document.write("<br>")
}
document.write("<br>")
// question 9
var arry=[
  [1,2,3],
  [4,7,3],
  [2,8,5]
];
for(var i=0; i<arry.length; i++){
  for(var j=0; j<arry[i].length; j++){
    document.write(arry[i][j]+ " ")
  }
  document.write("<br>")
}
document.write("<br>")
// question 10
var arry=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
];
for(var i=0; i<3; i++){
  for(var j=0; j<3; j++){
    document.write(arry[j][i]+ " ")
  }
  document.write("<br>")
}
document.write("<br>")
// question 11
var sum = 0;
var arry = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
for(var i=0; i<arry.length; i++){
  for(var j=0; j<arry[i].length; j++){
    sum = sum + arry[i][j]
  }
}
document.writeln("Total sum of arry " + sum )
document.writeln("<br>")
// question 12
var sum = 0;
var count = 0;
var arry = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
for(var i=0; i<arry.length; i++){
  for(var j=0; j<arry[i].length; j++){
    sum = sum + arry[i][j]
    count++
  }
}
document.writeln("Average of array " + sum / count)
document.writeln("<br>")
// question 13
var max =arry[0][0];
var array=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
for(var i=0; i<array.length; i++){
  for(var j=0; j<array[i].length; j++){
    if(max < array[i][j]){
      max = array[i][j]
    }
  }
}
document.writeln("Bigest number of an arry  " + max)
document.writeln("<br>")
// question 14
var min = array[0][0];
var array = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
for(var i=0; i<array.length; i++){
  for(var j=0; j<array[i].length; j++){
    if(min > array[i][j]){
      min = array[i][j]
    }
  }
}
document.writeln("Smollest number of an arry " + min)
document.writeln("<br>")
// question 15
var count =0;
var array = [
  [1,2,3,4,5,6],
  [7,8,9,10,11,12],
  [13,14,15,16,17,18]
];
for(var i=0; i<array.length; i++){
  for(var j=0; j<array[i].length; j++){
    if(array[i][j] % 2 ===0 ){
      count++
    }
  }
}
document.writeln("Total even number in array " + count)
document.writeln("<br>")
// question 16
var odd = 0; 
var array = [
  [1,2,3,4,5,6],
  [7,8,9,10,11,12],
  [13,14,15,16,17,18]
];
for(var i=0; i<array.length; i++){
  for(var j=0; j<array[i].length; j++){
    if(array[i][j] % 2 !== 0 ){
      odd++
    }
  }
}
document.writeln("Total odd number in array " + odd)
document.writeln("<br>")
  // question 17
  var negative = 0;
  var array = [
    [-7,-6,-5,-4,-3,-2,-1,0],
    [1,2,3,4,5,6],
    [7,8,9,10,11,12]
  ];
  for(var i=0; i<array.length; i++){
    for(var j=0; j<array[i].length; j++){
      if(array[i][j] < 0){
     array[i][j] =  negative 
      }
    }
  }
  document.writeln("Reaplace negative number from zero 0 ")
  document.writeln("<br>")
  // question 18
  var diviby5 = 0;
  var array = [
    [-7,-6,-5,-4,-3,-2,-1,0],
    [1,2,3,4,5,6],
    [7,8,9,10,11,12]
  ];
  for(var i=0; i<array.length; i++){
    for(var j=0; j<array[i].length; j++){
      if(array[i][j] % 5 === 0 ){
        diviby5++
      }
    }
  }
  document.writeln("Total divide by 5 = " + diviby5)
  document.writeln("<br>")
  // question 19
 var array =[
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15]
 ];
 for(var i=0; i<array.length; i++){
  var sum =0;
  for(var j=0; j<array[i].length; j++){
    sum +=array[i][j]
  }
  document.writeln("Row " + (i + 1) + " ka sum " + sum + "<br>")
 }
  document.writeln("<br>")
  // question 20
 var array =[
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15]
 ];
 for(var j=0; j<array[0].length; j++){
  var total = 0 ;
  for(var i=0; i<array.length; i++){
    total += array[i][j]
  }
  document.writeln("Column " +  (j + 1) + " ka sum " + total + "<br>")
 }



