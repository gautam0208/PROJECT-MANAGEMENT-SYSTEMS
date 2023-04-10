function func_rno1(){
    var reg1=document.getElementById("rno1").value;

    var reg=/^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
    if(!reg.test(reg1)){
        document.getElementById("error").innerHTML="Enter Valid reg.no.!(ddCCCCDDDD)";
        document.getElementById("rno1").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("rno1").style.border="2px solid green";
        }
}

function func_fname1(){
    var name1=document.getElementById("fname1").value;
    var reg=/^[A-Za-z]+$/;
    if(!reg.test(name1)){
        document.getElementById("error").innerHTML="Enter Valid First Name!No space and digits!";
        document.getElementById("fname1").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("fname1").style.border="2px solid green";
        }
}

function func_phno1(){
    var pnum1=document.getElementById("phnum1").value;
    var reg=/^[+]{1}[9]{1}[1]{1}[0-9]{10}$/;

    if(!reg.test(pnum1)){
        document.getElementById("error").innerHTML="Enter Valid phone number!!!";
        document.getElementById("phnum1").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("phnum1").style.border="2px solid green";
        }
}

  function func_gmail1(){
    var email1=document.getElementById("gmail1").value;
    var reg=/^[a-z0-9._-]+@[a-z]+.[a-z.]{2,5}$/;
      
    if(!reg.test(email1)){
        document.getElementById("error").innerHTML="Enter Valid Gmail!ex:test@gmail.com";
        document.getElementById("gmail1").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("gmail1").style.border="2px solid green";
        }
}

function func_rno2(){
    var reg2=document.getElementById("rno2").value;

    var reg=/^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
    if(!reg.test(reg2)){
        document.getElementById("error").innerHTML="Enter Valid reg.no.!(ddCCCCDDDD)";
        document.getElementById("rno2").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("rno2").style.border="2px solid green";
        }
}

function func_fname2(){
    var name2=document.getElementById("fname2").value;
    var reg=/^[A-Za-z]+$/;
    if(!reg.test(name2)){
        document.getElementById("error").innerHTML="Enter Valid First Name!No space and digits!";
        document.getElementById("fname2").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("fname2").style.border="2px solid green";
        }
}

function func_phno2(){
    var pnum2=document.getElementById("phnum2").value;
    var reg=/^[+]{1}[9]{1}[1]{1}[0-9]{10}$/;

    if(!reg.test(pnum2)){
        document.getElementById("error").innerHTML="Enter Valid phone number!!!";
        document.getElementById("phnum2").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("phnum2").style.border="2px solid green";
        }
}

  function func_gmail2(){
    var email2=document.getElementById("gmail2").value;
    var reg=/^[a-z0-9._-]+@[a-z]+.[a-z.]{2,5}$/;
      
    if(!reg.test(email2)){
        document.getElementById("error").innerHTML="Enter Valid Gmail!ex:test@gmail.com";
        document.getElementById("gmail2").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("gmail2").style.border="2px solid green";
        }
}

function func_rno3(){
    var reg3=document.getElementById("rno3").value;

    var reg=/^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
    if(!reg.test(reg3)){
        document.getElementById("error").innerHTML="Enter Valid reg.no.!(ddCCCCDDDD)";
        document.getElementById("rno3").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("rno3").style.border="2px solid green";
        }
}

function func_fname3(){
    var name3=document.getElementById("fname3").value;
    var reg=/^[A-Za-z]+$/;
    if(!reg.test(name3)){
        document.getElementById("error").innerHTML="Enter Valid First Name!No space and digits!";
        document.getElementById("fname3").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("fname3").style.border="2px solid green";
        }
}

function func_phno3(){
    var pnum3=document.getElementById("phnum3").value;
    var reg=/^[+]{1}[9]{1}[1]{1}[0-9]{10}$/;

    if(!reg.test(pnum3)){
        document.getElementById("error").innerHTML="Enter Valid phone number!!!";
        document.getElementById("phnum3").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("phnum3").style.border="2px solid green";
        }
}

  function func_gmail3(){
    var email3=document.getElementById("gmail3").value;
    var reg=/^[a-z0-9._-]+@[a-z]+.[a-z.]{2,5}$/;
      
    if(!reg.test(email3)){
        document.getElementById("error").innerHTML="Enter Valid Gmail!ex:test@gmail.com";
        document.getElementById("gmail3").style.border="2px solid red";
    }
    else
        {
             document.getElementById("error").innerHTML="";
            document.getElementById("gmail3").style.border="2px solid green";
        }
}

function addMember1(){
    console.log("clicked!!");
         var x=document.getElementById("mem2");
         var btn=document.getElementById("btn1");
         var rbtn=document.getElementById("btn2");
         console.log(x.style.display);
         if (x.style.display == "none" || x.style.display == ""){
            x.style.display='block';
            btn.style.display='none';
            rbtn.style.display='block';
         }
            
  }
  function addMember2(){
    console.log("clicked!!");
         var x=document.getElementById("mem3");
         var btn=document.getElementById("btn2");
         var rbtn=document.getElementById("btn3");
         console.log(x.style.display);
         if (x.style.display == "none" || x.style.display == ""){
            x.style.display='block';
            btn.style.display='none';
            rbtn.style.display='block';
         }
  }
  
  function removeMember2(){
    console.log("clicked!!");
         var x=document.getElementById("mem2");
         var btn=document.getElementById("btn1");
         var rbtn=document.getElementById("btn2");
         console.log(x.style.display);
         if (x.style.display == "block" ){
            x.style.display='none';
            btn.style.display='block';
            rbtn.style.display='none';
         }
            
  }

  function removeMember3(){
    console.log("clicked!!");
         var x=document.getElementById("mem3");
         var btn=document.getElementById("btn2");
         var rbtn=document.getElementById("btn3");
         console.log(x.style.display);
         if (x.style.display == "block" ){
            x.style.display='none';
            btn.style.display='block';
            rbtn.style.display='none';
         }
            
  }