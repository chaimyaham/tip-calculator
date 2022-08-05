// first input
bill=document.getElementById("bill");

//radio btn
five=document.getElementById("five");
ten=document.getElementById("ten");
fifteen=document.getElementById("fifteen");
twentyfive=document.getElementById("twentyfive");
fifty=document.getElementById("fifty");
custom=document.getElementById("custom");
custom_input=document.getElementById("custom_input");

// input number of people
number_of_poeple=document.getElementById("number_of_poeple");
errormsg=document.getElementById("errormsg");

//  reset btn
reset=document.getElementById("resetBTN");

const validationbill=()=>{
    var pattern = /^[0-9]*(,[0-9]{3})*(\.[0-9]+)*$/ ;
          
    if( +bill.value===0 || pattern.test(bill.value)===false){
            bill.style.border="2px solid red";
            return
     }else{
             bill.style.border="2px solid green";
             const bill_value=bill.value;
             return bill_value;

     }
    
}
const validaionNumOfPoeple=()=>{
    var pattern = /^[0-9]*(,[0-9]{3})*(\.[0-9]+)*$/ ;
    if(+number_of_poeple.value===0 || pattern.test(number_of_poeple.value)===false){
        number_of_poeple.style.border="2px solid red";
        errormsg.style.visibility="inherit";
    }else{
        number_of_poeple.style.border="2px solid green";
        errormsg.style.visibility="hidden";
        const numofperson=number_of_poeple.value;
        return numofperson;
    }
}
const tipamount=()=>{
    var selesctedtip=0;
    if(custom_input.value!=0){
        custom.checked="checked";
        custom.value=custom_input.value;
        selesctedtip=custom.value
    }else if(five.checked)selesctedtip=five.value;
    else if(ten.checked)selesctedtip=ten.value;
    else if(fifteen.checked)selesctedtip=fifteen.value;
    else if(twentyfive.checked)selesctedtip=twentyfive.value;
    else if(fifty.checked)selesctedtip=fifty.value;
    return selesctedtip;
}
const calculer=()=>{
    const bill_value=validationbill();
    const numofperson=validaionNumOfPoeple()     
    const tip= tipamount();
    const tipAmount=(bill_value*tip/100)/numofperson;
    const total=tipAmount+bill_value/numofperson;
    console.log(tipAmount.toFixed(2));
    console.log(total.toFixed(2));
    document.getElementById("tip-amount").textContent=`$${tipAmount.toFixed(2)}`
    document.getElementById("total").textContent="$"+total.toFixed(2);
    reset.style.backgroundColor="hsl(172, 67%, 45%)"
    reset.addEventListener("mouseenter",()=>{
        reset.style.backgroundColor="hsl(172, 100%, 74%)"
    })
    reset.addEventListener("mouseleave",()=>{
        reset.style.backgroundColor="hsl(172, 67%, 45%)"
    })

}
function resetbtn(){
   bill.value="";
   number_of_poeple.value="";
   document.getElementById("tip-amount").textContent=`$0.00`
   document.getElementById("total").textContent="$0.00";

}



  
