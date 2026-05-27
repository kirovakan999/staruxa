<?php
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'PHPMailer-master/src/PHPMailer.php';
require_once 'PHPMailer-master/src/SMTP.php';
require_once 'PHPMailer-master/src/Exception.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Метод не разрешен']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    echo json_encode(['success' => false, 'message' => 'Некорректные данные']);
    exit;
}

$name = trim(htmlspecialchars($input['name'] ?? ''));
$phone = trim(htmlspecialchars($input['phone'] ?? ''));
$message = trim(htmlspecialchars($input['message'] ?? ''));
$cart = $input['cart'] ?? [];

// Серверная валидация имени
if (empty($name) || strlen($name) < 2 || !preg_match('/^[a-zA-Zа-яА-ЯёЁ\s\-\.]+$/u', $name)) {
    echo json_encode(['success' => false, 'message' => 'Введите корректное имя (минимум 2 буквы)']);
    exit;
}

// Серверная валидация телефона (формат +7XXXXXXXXXX)
if (empty($phone) || !preg_match('/^\+7\d{10}$/', $phone)) {
    echo json_encode(['success' => false, 'message' => 'Введите корректный номер телефона в формате +7XXXXXXXXXX']);
    exit;
}

$cartHtml = "<h3>Состав корзины:</h3><ul>";
$totalSum = 0;
foreach ($cart as $item) {
    $itemTotal = $item['price'] * $item['quantity'];
    $totalSum += $itemTotal;
    $cartHtml .= "<li>{$item['name']} — {$item['quantity']} шт. x {$item['price']} ₽ = {$itemTotal} ₽</li>";
}
$cartHtml .= "</ul><p><strong>Общая сумма: {$totalSum} ₽</strong></p>";

$body = "
<html>
<head><title>Заявка с сайта PACARANA SOUND</title></head>
<body>
    <h2>Новая заявка</h2>
    <p><strong>Имя:</strong> $name</p>
    <p><strong>Телефон:</strong> $phone</p>
    <p><strong>Сообщение:</strong> $message</p>
    $cartHtml
</body>
</html>
";

$mail = new PHPMailer(true);
try {
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'arturxakeryt@yandex.ru';
    $mail->Password   = 'ktfigxqicowywhaq';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->setFrom('arturxakeryt@yandex.ru', 'PACARANA SOUND');
    $mail->addAddress('arturxakeryt@yandex.ru');
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = "Новая заявка от $name (тел: $phone)";
    $mail->Body    = $body;
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Заявка отправлена']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Ошибка отправки: ' . $mail->ErrorInfo]);
}
?>