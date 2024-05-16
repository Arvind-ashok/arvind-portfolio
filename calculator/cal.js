function cal(val){
    document.getElementById("display").value = document.getElementById("display").value+val;
   
}
function clearDisplay(){
    document.getElementById("display").value="";
}
function calculate(){
    var input=document.getElementById("display").value;
    var resultvalue=eval(input);
    document.getElementById("display").value=resultvalue;
}