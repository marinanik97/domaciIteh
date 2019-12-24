<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cafe&Factory</title>
    <link rel="icon" href="img/icon.png">
    <link rel="stylesheet" type="text/css" media="screen" href="mystyle3.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
    <script src="kafe2.js"></script>
    <!-- STAVI DOLE SKRIPTE -->
</head>

<body class="img-background">

<div class="iteh_header">
    <div class="iteh_header_container">
        <div onclick="showModal('newUser')" class="iteh_button">Add new user</div>
        <div onclick="showModal('editUser')" class="iteh_button">Edit your account</div>
        <div onclick="showModal('newProduct')" class="iteh_button">Add new product</div>
      
        <div class="iteh_search_container">
            <input placeholder="Search" class="iteh_header_search"/>
        </div>
       
        <div onclick="logOut()" class="iteh_button so">Sign out</div>
    </div>
</div>

<!--<div class="container text-center">-->
<div class="iteh_home">
    <div class="iteh_product_table">
        <table id="product" class="table table-dark">
        <thead>   
            <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">price</th>
                <th scope="col">update</th>
                <th scope="col">delete</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>


<!-- Footer -->
<footer class="navbar navbar-fixed-bottom footer"><!-- TODO -->

    <div class="text-center footer-text">
        <span class="glyphicon glyphicon-home"></span> Maglajska 34
        11000 Belgrade
        Serbia
        <br>
        <span class="glyphicon glyphicon-phone-alt"></span> +381 11 3675 646
    </div>

</footer>
<!-- Footer -->

</body>

</html>