<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

try {
    $comment = $db->query("SELECT * FROM comments WHERE id=:id", [
        'id' => $_GET['id']
    ])->find();

    if (!$comment) {
        throw new Exception("The comment does not exist");
    }

    $db->query('DELETE FROM comments WHERE id=:id', [
        'id' => $_GET['id'],
    ]);

    http_response_code(200);

    $result = [
        "message" => 'Successfully removed the comment'
    ];

} catch (Exception $e) {
    http_response_code(400);

    $result = [
        "message" => "Failed. {$e->getMessage()}"
    ];
} finally {
    echo json_encode($result);
}