<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

try {
    if(!isset($_GET['id'])){
        throw new Exception("A comment id must be provided");
    }

    $comment = $db->query('SELECT * FROM comments WHERE id = :id', [
        'id' => $_GET['id']
    ])->find();

    if (!$comment) {
        throw new Exception("Unable to find the comment with id {$_GET['id']}");
    }

    http_response_code(200);

    $result = [
        "comment" => $comment,
        "message" => 'Successfully fetched the comment'
    ];
} catch (Exception $e) {
    http_response_code(404);

    $result = [
        "comment" => null,
        "message" => $e->getMessage()
    ];
} finally {
    echo json_encode($result);
}