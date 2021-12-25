/*this function will get executed once the "compute interest" button is pressed*/
function compute()
{   
    var principal = document.getElementById("principal").value;
    var v;
    /*validating the input amount field*/
    if (principal <= 0){
        alert('Enter a positive number');
        /*for focusing the input amount field*/
        document.getElementById("principal").focus();
    }
    else {
        var rate = document.getElementById('rate').value;
        var years = document.getElementById('years').value;
        var interest = principal*years*rate/100;
        var year = new Date().getFullYear()+parseInt(years);

        /*adding the values in corresponding elements*/
        document.getElementById('p').innerHTML=principal;
        document.getElementById('r').innerHTML=rate+'%';
        document.getElementById('i').innerHTML=interest;
        document.getElementById('y').innerHTML=year;

        document.getElementById('result').style.display='inline';
    }
}


function updateRate()
{
    var rateval=document.getElementById('rate').value;
    document.getElementById('rate_val').innerHTML=rateval;
}        
