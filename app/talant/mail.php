<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);

if (isset($_POST['param'])) {
  $post = json_decode($_POST['param']);

	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	// От кого
	$mail->setFrom('zickrail@gmail.com', 'Письмо с сайта');
	// Кому 
	$mail->addAddress('zickrail@gmail.com');
	// Тема письма
	$mail->Subject = 'Письмо с сайта amt124.ru';

	// Тело письма
	$body = '<p><strong>Имя:</strong> '.$post->name.'</p><hr>';
	$body .= '<p><strong>Email:</strong> '.$post->email.'</p><hr>';
	$body .= '<p><strong>Телефон:</strong> '.$post->phone.'</p><hr>';
	$body .= '<p><strong>Желаемая должность: </strong> '.$post->post.'</p><hr>';
	$body .= '<p><strong>Желаемый район:</strong> '.$post->place.'</p><hr>';
	$body .= '<p><strong>Сфера деятельности:</strong> '.$post->activity.'</p>';

	$mail->Body = $body;

	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
}