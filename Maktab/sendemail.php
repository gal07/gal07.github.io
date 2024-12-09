<?php if(isset($_POST["fname"]))  
{
	// Read the form values
	$success = false;
	$fName = isset( $_POST['fname'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['fname'] ) : "";
	$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
	$message = isset( $_POST['contact_message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['contact_message'] ) : "";
	
	//Headers
	$to = "example@gmail.com";
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	
	//body message
	$message = "First Name: ". $fName . "<br> Email: ". $senderEmail . "<br> Message: " . $message . "";
	
	//Email Send Function
    $send_email = mail($to, $message, $headers);
      
    echo ($send_email) ? '<div class="success alert alert-success mb-0 mt-20">Email has been sent successfully.</div>' : 'Error: Email did not send.';
}
else
{
	echo '<div class="failed alert alert-danger mb-0 mt-20">Failed: Email not Sent.</div>';
}
?>