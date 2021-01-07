<?php
// Receiving variables
@$pfw_ip= $_SERVER['REMOTE_ADDR'];
@$Name = addslashes($_POST['Name']);
@$Email = addslashes($_POST['Email']);
@$Subject = addslashes($_POST['Subject']);
@$Comment = addslashes($_POST['Comment']);

// Name validation
if (strlen($Name) == 0 ){
header("Location: contact-failed.html");
exit;
}
// Email validation
if (strlen($Email) == 0 ){
header("Location: contact-failed.html");
exit;
}
// Comment validation
if (strlen($Comment) == 0 ){
header("Location: contact-failed.html");
exit;
}

// Sending Email to form owner
$form_header = "From: $Name\n $Email\n"
 . "Reply-To: $Email\n";

// This is subject
$form_subject = "$Subject\n";

// Add receipt email
$form_emailto = "EMAIL@DOMAIN.COM"; //  < ====== add your email

 // Email content
$form_message = "Visitor's IP: $pfw_ip\n"
. "\n"
. "Name:\n"
. "$Name\n"
. "\n"
. "Email:\n"
. "$Email\n"
. "\n"
. "Comment:\n"
. "$Comment\n";

// Generate email
@mail($form_emailto, $form_subject ,$form_message ,$form_header ) ;

// Redirect to success page
header("Location: contact-success.html");
// end
?>
