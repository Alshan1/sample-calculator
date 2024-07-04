function numAddition(){
    var firstnum = document.getElementById("inputnum1")
    var secondnum = document.getElementById("inputnum2")
    var resultnum = document.getElementById("resultnum")

    var firstnumvalue = parseFloat(firstnum.value);
    var secondnumvalue = parseFloat(secondnum.value);


    var sum = firstnumvalue + secondnumvalue;
  
    resultnum.value =  sum;

}

function numSubtraction(){
    var firstnum = document.getElementById("inputnum1")
    var secondnum = document.getElementById("inputnum2")
    var resultnum = document.getElementById("resultnum")

    var firstnumvalue = parseFloat(firstnum.value);
    var secondnumvalue = parseFloat(secondnum.value);


    var sum = firstnumvalue - secondnumvalue;
  
    resultnum.value =  sum;

}

function numMultiplication(){
    var firstnum = document.getElementById("inputnum1")
    var secondnum = document.getElementById("inputnum2")
    var resultnum = document.getElementById("resultnum")

    var firstnumvalue = parseFloat(firstnum.value);
    var secondnumvalue = parseFloat(secondnum.value);


    var sum = firstnumvalue * secondnumvalue;
  
    resultnum.value =  sum;
}
function numDivision(){
    var firstnum = document.getElementById("inputnum1")
    var secondnum = document.getElementById("inputnum2")
    var resultnum = document.getElementById("resultnum")

    var firstnumvalue = parseFloat(firstnum.value);
    var secondnumvalue = parseFloat(secondnum.value);


    var sum = firstnumvalue / secondnumvalue;
  
    resultnum.value =  sum;
}