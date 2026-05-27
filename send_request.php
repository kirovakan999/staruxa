<?php
header('Content-Type: application/json');

// Логирование ошибок
function logError($msg) {
    file_put_contents(__DIR__ . '/mail_error.log', date('Y-m-d H:i:s') . ' - ' . $msg . PHP_EOL, FILE_APPEND);
}

// Проверяем метод
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Метод не разрешен']);
    exit;
}

// Получаем данные
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    echo json_encode(['success' => false, 'message' => 'Некорректные данные']);
    exit;
}

$name = trim(htmlspecialchars($input['name'] ?? ''));
$phone = trim(htmlspecialchars($input['phone'] ?? ''));
$message = trim(htmlspecialchars($input['message'] ?? ''));
$cart = $input['cart'] ?? [];

if (empty($name) || empty($phone)) {
    echo json_encode(['success' => false, 'message' => 'Имя и телефон обязательны']);
    exit;
}

// Формируем тело письма
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
    <hr>
    <small>Письмо отправлено автоматически с сайта</small>
</body>
</html>
";

// ---------- Пытаемся отправить разными способами ----------
$mailSent = false;
$errorMsg = '';

// Способ 1: через PHPMailer (если он доступен и работает SMTP)
if (file_exists(__DIR__ . '/PHPMailer-master/src/PHPMailer.php')) {
    try {
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;
        
        require_once __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
        require_once __DIR__ . '/PHPMailer-master/src/SMTP.php';
        require_once __DIR__ . '/PHPMailer-master/src/Exception.php';
        
        $mail = new PHPMailer(true);
        // Отключаем строгую проверку SSL (для хостингов с кривыми сертификатами)
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
        $mail->Password   = 'ktfigxqicowywhaq'; // пароль приложения
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // TLS
        $mail->Port       = 587;
        $mail->setFrom('arturxakeryt@yandex.ru', 'PACARANA SOUND');
        $mail->addAddress('arturxakeryt@yandex.ru');
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = "Новая заявка от $name (телефон: $phone)";
        $mail->Body    = $body;
        
        $mail->send();
        $mailSent = true;
        logError("Письмо отправлено через SMTP");
    } catch (Exception $e) {
        $errorMsg = "SMTP ошибка: " . $mail->ErrorInfo;
        logError($errorMsg);
    }
}

// Способ 2: если PHPMailer не сработал, используем стандартную mail()
if (!$mailSent) {
    $to = 'arturxakeryt@yandex.ru';
    $subject = "=?UTF-8?B?".base64_encode("Новая заявка от $name")."?=";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: no-reply@pacaransound.ru\r\n";
    if (mail($to, $subject, $body, $headers)) {
        $mailSent = true;
        logError("Письмо отправлено через mail()");
    } else {
        $errorMsg = "Ошибка при отправке через mail()";
        logError($errorMsg);
    }
}

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Заявка отправлена']);
} else {
    echo json_encode(['success' => false, 'message' => 'Не удалось отправить письмо. Попробуйте позже или свяжитесь по телефону. Ошибка: ' . $errorMsg]);
}
?>