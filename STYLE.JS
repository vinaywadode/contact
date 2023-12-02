
function validateForm()
{
    var mobile=document.getElementById("mob").value;
    if(mobile == '')
{
     alert("please Enter 10 Digit Mobile No.");
     return false
    }
     else if(mobile.length<10 || mobile.length>10)
     alert("number min and max  length is 10");
     return false
} 

   
 


