<?php
include('./server/DBConnection.php');
session_start();
class Product
{
    public static function getMethodById($id = null){
        $sql = '';
        $connection = new DBConnection();
        $sql = "SELECT * FROM product WHERE id = '$id'";
        $result = $connection->getConnection()->query($sql);
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        echo json_encode($row);
        /*$data = array();
        while($row = mysqli_fetch_assoc($result)){
            array_push($data, $row);
        }
        echo json_encode($data);*/
    }


    public static function get(){
        $sql = '';
        $connection = new DBConnection();
        $sql = "SELECT * FROM product";
        $result = $connection->getConnection()->query($sql);

        $data = array();
        while($row = mysqli_fetch_assoc($result)){
            array_push($data, $row);
        }
        echo json_encode($data);
    }
    public static function put($product){
        if (isset($_SESSION['id'])) {
            $dbConnection = new DBConnection();
            $sql = "UPDATE product SET id = \"$product->id\", name = \"$product->name\", price = \"$product->price\" WHERE id= $product->id  ";
            $result = $dbConnection->getConnection()->query($sql);
            echo $sql;
        }
    }
    public static function post($name, $price){
        if(isset($_POST['product'])){
            $dbConnection = new DBConnection();
            $productid = $_SESSION['id'];
            $sql = "INSERT INTO product (name, price) VALUES (\"$name\", \"$price\")";
            $result = $dbConnection->getConnection()->query($sql);
            if ($result) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $result = $dbConnection->getConnection()->error;
            }
        }
    }
    public static function delete($id)
    {
        if (isset($_SESSION['id'])) {
            $dbConnection = new DBConnection();
            $sql = "DELETE FROM product WHERE id = $id";
            $result = $dbConnection->getConnection()->query($sql);
        }
    }
    public static function search($searchInput){
       
            $dbConnection = new DBConnection();
            $sql = "SELECT * FROM product where (name LIKE '%".$searchInput."%' OR price LIKE '%".$searchInput."%')";
            $result = $dbConnection->getConnection()->query($sql);
            $data = array();
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($data, $row);
            }
            echo json_encode($data);
        
    }
}