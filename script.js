// script.js

//Custom function
function calculateWeight(){
    //Store the data of input
    var weightAmount = document.getElementById("weightAmount").value;
    var typeOfConversion = document.getElementById("dropDown").value;
    
    if(weightAmount === "" || typeOfConversion == 0 ){
        window.alert("Please enter a number");
        return;    
    }
    
    var result = weightAmount * typeOfConversion;
     //check if number
    if(result==NaN){
        window.alert("Please give avalid number!")
        return;
    }
    result =Math.round(result * 100) /100;
    
   
    
    if(typeOfConversion==0.4536){
       result += " kg"
       }
    else if(typeOfConversion==2.2046){
       result += " lb"
       }
    
    //Display the weight
    document.getElementById("result").style.display = "block";
    document.getElementById("output").innerHTML =result;
    
}




//Hide the result on load
document.getElementById("result").style.display ="none";

//clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateWeight() };

