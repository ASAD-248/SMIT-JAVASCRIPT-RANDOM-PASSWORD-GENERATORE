



//    ASSIGNMENT 06 RANDOM PASSWORD GENRATOR    //

var str = "ABCDEFGHDGHD2467abcdefijklmn<?%>*&";
for (var i = 0; i < str.length; i++) {

  var random = Math.floor(Math.random() * str.length)
  document.write(str[random])

}

//  var str = ["A","B","C","D","@"];

// for (var i = 0; i < str.length; i++) {

//   var random = Math.floor(Math.random() * str.length)
//   document.write(str[random])

// }


// var str = prompt("Enter any 4 or 5 characters from which the password should be made");

// for (var i = 0; i < str.length; i++) {

//   var random = Math.floor(Math.random() * str.length)
//   document.write(str[random])

// }
