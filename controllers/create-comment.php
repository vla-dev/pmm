<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);
$requestBody = json_decode(file_get_contents('php://input'), true);

try {
    $comment = $db->query('INSERT INTO comments (name, email, body) VALUES (:name, :email, :body)', [
        'name' => $requestBody['name'],
        'email' => $requestBody['email'],
        'body' => $requestBody['body']
    ]);

    http_response_code(200);

    $result = [
        "message" => 'Successfully added the comment'
    ];

} catch (Exception) {
    http_response_code(400);

    $result = [
        "message" => 'Failed to add a new comment'
    ];
} finally {
    echo json_encode($result);
}