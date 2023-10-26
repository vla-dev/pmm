<?php

$router->get('/comments', 'comments.php');
$router->get('/comment', 'comment.php');
$router->post('/comment/create', 'create-comment.php');
$router->put('/comment/edit', 'edit-comment.php');
$router->delete('/comment/delete', 'delete-comment.php');