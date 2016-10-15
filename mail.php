<?php
//$headers = "CC: abc@mail.com";
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Content-Type');
$to  = "parmarpriyank94@gmail.com";
$name = $_GET['name'];
$email = $_GET['email'];
$mobile = $_GET['mobile'];
$msg = $_GET['message'];
$subject = $_GET['subject'];
$txt = "Dear Admin,"."\r\n\n".
       "Please check the following details : "."\r\n\n".
       "Name: ".$name."\r\n\n".
       "Email: ".$email."\r\n\n".
       "Mobile no: ".$mobile."\r\n\n".
       "Message: ".$msg."\r\n\n";
$check = mail($to,$subject,$txt);

	if($check)
	{
		$arr = [];
		$arr["value"]=true;
		$arr["message"] = "Email sent successfully.";
		echo json_encode($arr);
	}
	else
	{
		$arr = [];
		$arr["value"]=false;
		$arr["message"] = "Email sending error.";
		echo json_encode($arr);
	}
?>

