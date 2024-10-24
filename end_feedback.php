<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $feedback = $_POST['feedback'];

    $to = 'emmanuelnkossi@outlook.com';
    $subject = 'Feedback from Website';
    $message = "You have received feedback:\n\n" . $feedback;
    $headers = 'From: noreply@yourdomain.com' . "\r\n" .
               'Reply-To: noreply@yourdomain.com';

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo 'Feedback sent successfully!';
    } else {
        echo 'Failed to send feedback.';
    }
}
?>
