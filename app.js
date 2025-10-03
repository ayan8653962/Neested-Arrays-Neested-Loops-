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
// document.write("<br>")
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


