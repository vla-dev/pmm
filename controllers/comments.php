<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

try {
    $comments = $db->query('SELECT * FROM comments')->get();

    http_response_code(200);

    $result = $comments;
} catch (Exception) {
    http_response_code(404);

    $result = [];
} finally {
    echo json_encode($result);
}