<?php
require_once 'PHPMailer-master/src/PHPMailer.php';
require_once 'PHPMailer-master/src/SMTP.php';
require_once 'PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'arturxakeryt@yandex.ru';
    $mail->Password = 'ktfigxqicowywhaq';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->setFrom('arturxakeryt@yandex.ru', 'Test');
    $mail->addAddress('arturxakeryt@yandex.ru');
    $mail->Subject = 'Тест SMTP';
    $mail->Body = 'Это тестовое письмо.';
    $mail->send();
    echo "Письмо успешно отправлено";
} catch (Exception $e) {
    echo "Ошибка: " . $mail->ErrorInfo;
}
?>