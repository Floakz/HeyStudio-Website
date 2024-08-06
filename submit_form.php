<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Sanitize and validate input
    $name = filter_input(INPUT_GET, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_GET, 'email', FILTER_SANITIZE_EMAIL);
    $business_name = filter_input(INPUT_GET, 'Nome-Neg-cio', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_GET, 'Mensagem', FILTER_SANITIZE_STRING);

    // Validate required fields
    if (empty($name) || empty($email) || empty($business_name)) {
        http_response_code(400);
        echo "Error: All fields except 'Mensagem' are required.";
        exit;
    }

    // Process the data (e.g., save to database, send an email)
    $to = "sergioamoreira@sapo.pt";
    $subject = "Novo contactos de formulário";
    $body = "Nome: $name\nEmail: $email\nNome do Negócio: $business_name\nMensagem: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Success: Email sent.";
        exit;
    } else {
        http_response_code(500);
        echo "Error: Unable to send email.";
    }
}
?>
