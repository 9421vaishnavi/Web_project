let firstnumber="";
let secondnumber="";
operator="";
let Itaking =document.getElementById("Itaking");

function press(value){
    if(value==='+'||value==='-'||value==='*'||value==='/'||value==='%'){
    operator =value;
    Itaking.value=Itaking.value+operator;

    }
    else{
        if(operator===""){
            firstnumber+=value;
        Itaking.value=firstnumber;    
        }
        else{
            secondnumber+=value;
        }
            Itaking.value=Itaking.value+secondnumber;
        
    }
}
// result
function calculate(){
     let num1=Number(firstnumber);
     let num2=Number(secondnumber);
     let result;
     switch(operator)
     {
        case '+':result=num1+num2;break;
        case '%':result=((num1*num2)/100);break;
        case '-':result=num1-num2;break;
        case '*':result=num1*num2;break;
        case '/':result=num2!==0?num1/num2:"error";break;
        default:result="invalid";
     }
     Itaking.value=result;
     firstnumber=result.toString();
     secondnumber="";
     operator="";
    
}
// clear Screen
function clearall()
{
 firstnumber="";
 secondnumber="";
 operator="";
 Itaking.value="";
}