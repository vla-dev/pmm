<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);
$requestBody = json_decode(file_get_contents('php://input'), true);

try {
    $comment = $db->query('UPDATE comments SET body = :body WHERE id = :id', [
        'id' => $_GET['id'], 
        'body' => $requestBody['body']
    ]);

    http_response_code(200);

    $result = [
        "message" => 'Successfully updated the comment'
    ];

} catch (Exception) {
    http_response_code(400);
    
    $result = [
        "message" => 'Failed to update the comment'
    ];
} finally {
    echo json_encode($result);
}