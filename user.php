<?php
include('./server/controllers/User.php');

switch ($_SERVER['REQUEST_METHOD']){
    case 'GET':
            $userid = $_SESSION['id'];
            User::get($userid);
        break;
    case 'PUT':
        $new_user_json = file_get_contents("php://input");
        $new_user = json_decode($new_user_json);
        User::put($new_user);
        break;
    case 'DELETE':
        case 'POST':
            $dbConnection = new DBConnection();
            $firstname = mysqli_real_escape_string($dbConnection->getConnection(), $_POST['user']['first_name']);
            $lastname = mysqli_real_escape_string($dbConnection->getConnection(), $_POST['user']['last_name']);
            $username = mysqli_real_escape_string($dbConnection->getConnection(), $_POST['user']['username']);
            $password = mysqli_real_escape_string($dbConnection->getConnection(), $_POST['user']['password']);
            
            User::post($firstname, $lastname, $username, $password);
                
        break; 
}
