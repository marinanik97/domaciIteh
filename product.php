<?php
#include ('./server/DBConnection.php');
include('./server/controllers/Product.php');
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['id'])) {
            //$productid = $_SESSION['id'];
            Product::getMethodById($_GET['id']);

        } else {
            Product::get();
        }
        break;

    case 'POST':
        if (isset($_POST['inputText'])) {
            Product::search($_POST['inputText']);
        } else {
            $dbConnection = new DBConnection();
            $name = mysqli_real_escape_string($dbConnection->getConnection(), $_POST['product']['name']);
            $price = mysqli_real_escape_string($dbConnection->getConnection(), $_POST['product']['price']);

            Product::post($name, $price);
        }
        break;

    case 'PUT':
        $new_product_json = file_get_contents("php://input");
        $new_product = json_decode($new_product_json);
        Product::put($new_product);
        break;

    case 'DELETE':
        $productid = $_GET['id'];
        Product::delete($productid);
}

