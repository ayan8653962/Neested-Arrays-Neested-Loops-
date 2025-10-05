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
//  document.write("<br>")
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





// document.writeln(arry[i] * arry[i][j])







