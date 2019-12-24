<?php
include('./server/DBConnection.php');

class Logs
{
    public static function Login($username, $password)
    {
            $sql = "SELECT id FROM users WHERE username = '$username' and password = '$password'";
            $dbConnection = new DBConnection();
            $result = $dbConnection->getConnection()->query($sql);
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
            $count = mysqli_num_rows($result);
            if ($count == 1) {
                $_SESSION['id'] = $row['id'];
                header("location: menikafa.php");
                echo "connected";
                exit();
            } else {
                $error = "User doesn't exists";
                echo $error;
        }
    }

    public static function Logout(){
        session_start();
        session_destroy();
    }
}