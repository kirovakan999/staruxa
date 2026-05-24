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

$name = htmlspecialchars($input['name'] ?? '');
$phone = htmlspecialchars($input['phone'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');
$cart = $input['cart'] ?? [];

if (empty($name) || empty($phone)) {
    echo json_encode(['success' => false, 'message' => 'Имя и телефон обязательны']);
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
<head><title>Заявка с сайта</title></head>
<body>
    <h2>Новая заявка с сайта PACARANA SOUND</h2>
    <p><strong>Имя:</strong> $name</p>
    <p><strong>Телефон:</strong> $phone</p>
    <p><strong>Сообщение:</strong> $message</p>
    $cartHtml
</body>
</html>
";

$mail = new PHPMailer(true);
try {
    // Отключаем проверку SSL сертификата
    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ];
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'arturxakeryt@yandex.ru';
    $mail->Password   = 'ktfigxqicowywhaq';
    $mail->SMTPSecure = 'tls'; // или PHPMailer::ENCRYPTION_STARTTLS
    $mail->Port       = 587;
    $mail->setFrom('arturxakeryt@yandex.ru', 'PACARANA SOUND');
    $mail->addAddress('arturxakeryt@yandex.ru');
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = "Новая заявка на установку / заказ от $name";
    $mail->Body    = $body;
    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $mail->ErrorInfo]);
}
?>