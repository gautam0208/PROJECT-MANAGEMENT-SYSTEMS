<?php
$host="localhost";
$dbusername="root";
$dbpassword="";
$dbname="test";
$conn=mysqli_connect($host,$dbusername,$dbpassword,$dbname);


if(!$conn)
{
    echo "Server is not connected";

}

if(isset($_POST["submit"]) && !empty($_FILES["data"]["name"]) )
{
   $reg_num1=$_POST['rno1'];
   $name1=$_POST['fname1'];
   $pno1=$_POST['phonenum1'];
   $mail1=$_POST['gmail1'];

   $reg_num2=$_POST['rno2'];
   $name2=$_POST['fname2'];
   $pno2=$_POST['phonenum2'];
   $mail2=$_POST['gmail2'];

   $reg_num3=$_POST['rno3'];
   $name3=$_POST['fname3'];
   $pno3=$_POST['phonenum3'];
   $mail3=$_POST['gmail3'];

   $pTitle=$_POST['p_title'];
   $pAbs=$_POST['p_abstract'];
   $pFunc=$_POST['p_func'];
   $pReq=$_POST['res_req'];

   $targetDir="pic/";
   $fileName=basename($_FILES["data"]["name"]);
   $targetFilePath=$targetDir.$fileName;
   $fileType=strtolower(pathinfo($targetFilePath,PATHINFO_EXTENSION));

   
   $allowTypes=array('jpg','png','jpeg','gif');

   if(in_array($fileType,$allowTypes)){
                         
    //upload file to server
    if(move_uploaded_file($_FILES['data']['tmp_name'],$targetFilePath)){

                   //insert file into database
          $insert="insert into member1 (Registration_Number, Name, Phone_Number, Gmail, Project_Title)
                              value ('$reg_num1','$name1','$pno1','$mail1','$pTitle'); ";
          $insert.="insert into member2 (Registration_Number, Name, Phone_Number, Gmail, Project_Title)
                              value ('$reg_num2','$name2','$pno2','$mail2','$pTitle'); ";
          $insert.="insert into member3 (Registration_Number, Name, Phone_Number, Gmail, Project_Title)
                              value ('$reg_num3','$name3','$pno3','$mail3','$pTitle'); ";
         $insert.="insert into project_details (Project_Title, Project_Abstract,	Project_Function, Project_Requirement,Data_Model)
                              value ('$pTitle','$pAbs','$pFunc','$pReq','$fileName')";

                 $query=mysqli_multi_query($conn,$insert);
                 if($query){
                    ?>
                    <script>
                    alert("The form has been submitted successfully.");
                          window.location.href='stud_reg.html';
                          </script>
                    <?php

                 }
                
    }
     else{
      ?>
      <script>
      alert('SORRY, There was an error submitting the form.!!!');
            window.location.href='stud_reg.html';
            </script>
      <?php
     } 
}
else{
  ?>
  <script>
  alert('SORRY, only JPG, JPEG, PNG, GIF are allowed to upload!!!');
        window.location.href='stud_reg.html';
        </script>
  <?php
}

}



?>