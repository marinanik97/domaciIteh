<?php

class DBConnection
{
public $mysql_server;
public $mysql_user;
public $mysql_password;
public $mysql_db;
public $mysqli;

    public function __construct() {
        $this->mysql_server = "localhost";
        $this->mysql_user = "root";
        $this->mysql_password="";
        $this->mysql_db = "itehdb";
        $this->mysqli = new mysqli($this->mysql_server, $this->mysql_user, $this->mysql_password,$this->mysql_db);
    }

    public function  getConnection() {
        return $this->mysqli;
    }

}