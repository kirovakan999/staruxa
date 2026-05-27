<?php
require_once 'PHPMailer-master/src/PHPMailer.php';
require_once 'PHPMailer-master/src/SMTP.php';
require_once 'PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'arturxakeryt@yandex.ru';
    $mail->Password   = 'ktfigxqicowywhaq';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->setFrom('arturxakeryt@yandex.ru', 'PACARANA SOUND');
    $mail->addAddress('arturxakeryt@yandex.ru');
    $mail->Subject = 'Тест PHPMailer';
    $mail->Body    = 'Это тестовое письмо. SMTP работает!';
    $mail->send();
    echo "✅ Письмо отправлено!\n";
} catch (Exception $e) {
    echo "❌ Ошибка: " . $mail->ErrorInfo . "\n";
}
?>