<?php
if($_POST["message"]) {
    mail("toms.firstdesign@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>

<?php

if($_POST["submit"]) {
    $recipient="toms.firstdesign@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>