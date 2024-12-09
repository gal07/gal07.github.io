<?php

require 'vendor/autoload.php';
if(isset($_POST))
{
    $name = $_POST['name'];
    $course = $_POST['course'];
    $feedback = $_POST['feedback'];
    $feedback2 = $_POST['feedback2'];
    $feedback3 = $_POST['p-feedback3'];
    $workType = $_POST['workType'];
    $Time = $_POST['Time'];
    $numberRating = $_POST['numberRating'];
    $message = $_POST['message'];

    

    // send mail

    // Create the Transport
    $transport = (new Swift_SmtpTransport('yourserverlocation', 465, 'ssl'))
        // optional ->setUsername('serveremail@site.com')
        // optional ->setPassword('email password')

    ;
    
    // if attachment is uploaded
    // $message->attach(
    // Swift_Attachment::fromPath($_FILES['file']['tmp_name'])->setFilename($_FILES['file']['name'])
    // );

    $mailer = new Swift_Mailer($transport);

    //Creating message
    $message = (new Swift_Message('Subject'))
        ->setFrom([$mailFrom => $name])
        ->setTo(["youremail@gmail.com" => "reciever Name"])
        ->setBody("Msg Here")	
    ;

    $result = $mailer->send($message);
}
else
{
    echo "error";
}


ini_set("log_errors", 1);
ini_set("error_log", "/tmp/php-error.log");
error_log( "Hello, errors!" );
