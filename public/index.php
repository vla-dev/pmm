<?php

const BASE_PATH = __DIR__ . '/../';

require BASE_PATH . 'Core/functions.php';

spl_autoload_register(function ($class){
    $class = str_replace("\\", DIRECTORY_SEPARATOR, $class);
    require BASE_PATH . "{$class}.php";
});

/** ------ INITIALIZE THE APP WITH PRE-CONFIGIURED CONTAINER ------  */
require BASE_PATH . "bootstrap.php";

/** ------ ROUTER SETUP ------  */
$router = new \Core\Router();
require BASE_PATH . 'routes.php';

try {
    $uri = parse_url($_SERVER['REQUEST_URI'])['path'];
    $router->route($uri, $_SERVER['REQUEST_METHOD']);
} catch (Exception $exception) {
    die();
}