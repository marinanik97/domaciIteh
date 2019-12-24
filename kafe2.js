function checkSearch(search) {
    $('tbody').empty();
    if (search) {
        $.ajax({
            url: 'product.php',
            type: 'POST',
            data: {inputText: search},
            success: function (data) {
                let encodedData = JSON.parse(data)
                console.log("Connected");
                encodedData.forEach((obj) => {

                    $('tbody').append('<tr><td>' + obj['id'] + '</td><td>' + obj['name'] + '</td><td>' + obj['price'] + '</td><td><button onclick="handleModal(\'edit\', '+ obj['id'] + ')" class="iteh_button">Update</button></td><td><button onclick="handleModal(\'delete\',' + obj['id'] + ')" class="iteh_button">Delete</button></td></tr>')
                })
            }
        })
    } else {
        $.ajax({
            url: "product.php",
            type: "GET",
            success: function (data) {
                let encodedData = JSON.parse(data)
                console.log("Connected");
                encodedData.forEach((obj) => {

                    $('tbody').append('<tr><td>' + obj['id'] + '</td><td>' + obj['name'] + '</td><td>' + obj['price'] + '</td><td><button onclick="handleModal(\'edit\', '+ obj['id'] + ')" class="iteh_button">Update</button></td><td><button onclick="handleModal(\'delete\',' + obj['id'] + ')" class="iteh_button">Delete</button></td></tr>')
                })
            }
        })
    }
}

function getM() {
    $.ajax({
        url: "product.php",
        type: "GET",
        success: function (data) {
            let encodedData = JSON.parse(data)
            console.log("Connected");
            encodedData.forEach((obj) => {

                $('tbody').append('<tr><td>' + obj['id'] + '</td><td>' + obj['name'] + '</td><td>' + obj['price'] + '</td><td><button onclick="handleModal(\'edit\', '+ obj['id'] + ')">Update</button></td><td><button onclick="handleModal(\'delete\',' + obj['id'] + ')">Delete</button></td></tr>')
            })
        }
    })
}
function deleteProduct(id){
    console.log("obrisi");
    $.ajax({
        url: "product.php?id=" +id,
        type: 'DELETE',
        success: function (data) {
            console.log(data);
            window.location.reload();
        }
    })
}

function handleModal(param,id){
    console.log(id);
    if(param === 'edit'){
        showModal('editProduct',id);
    }else{
        showModal('deleteProduct', id);
    }
}
function hideModalDelete() {
    $('.iteh_modal_delete').remove();

}
function hideModal() {
    $('.iteh_modal').remove();
}

function logOut() {
    document.location.href = 'http://localhost/Final/kafice.php';
}

function formSubmitOnAddingUser(event) {
    var user = {};
    event.preventDefault();
    user['first_name'] = $('.first_name').val();
    user['last_name'] = $('.last_name').val();
    user['username'] = $('.username').val();
    user['password'] = $('.password').val();

    $.ajax({
        url: "user.php",
        type: 'POST',
        data: {user: user},
        success: function (result) {
            window.location.reload();
        }
    });
}

function formSubmitOnAddingProduct(event){
    var product = {};
    event.preventDefault();
    product['name'] = $('.name').val();
    product['price'] = $('.price').val();
    

    $.ajax({
        url: "product.php",
        type: 'POST',
        data: {product: product},
        success: function (result) {
            window.location.reload();
        }
    });
}

function formSubmitOnEditingProduct(event, id) {
    event.preventDefault();
    console.log("formSubmiting");
    var product = {};
    product['id'] = id;
    product['name'] = $('.name').val();
    product['price'] = $('.price').val();

    $.ajax({
        url: "product.php",
        type: 'PUT',
        data: JSON.stringify(product),
        success: function (result) {
            window.location.reload();
        }
    });
}

function formSubmitonEditingUser(event) {
    event.preventDefault();
    var user = {};
    user['first_name'] = $('.first_name').val();
    user['last_name'] = $('.last_name').val();
    user['username'] = $('.username').val();
    user['password'] = $('.password').val();


    $.ajax({
        url: "user.php",
        type: 'PUT',
        data: JSON.stringify(user),
        success: function (result) {
            window.location.reload();
        }
    });
}

function showModal(param, id) {
    console.log("showModal");
    var modal = '';
    switch (param) {
        case 'newUser':
            modal = '<div class="iteh_modal"><div class="iteh_modal_content"><div onclick="hideModal()" class="iteh_modal_content_close">&#10005;</div>' +
                '<div class="iteh_modal_container">' +
                '<form method="post">' +
                '<div class="iteh_modal_container_input"><div>First Name:</div> <input value="" name="first_name" class="iteh_login_input first_name"/></div>' +
                '<div class="iteh_modal_container_input"><div>Last Name:</div> <input class="iteh_login_input last_name"/></div>' +
                '<div class="iteh_modal_container_input"><div>Username: </div><input class="iteh_login_input username" type="text"/></div>' +
                '<div class="iteh_modal_container_input"><div>Password: </div><input class="iteh_login_input password" type="password"/></div>' +
                '<input class="iteh_login_button" type="submit" onclick="formSubmitOnAddingUser(event)" value="Submit"></form></div><div class="iteh_modal_helper"></div>' +
                '</div></div>';
            break;
        case 'editUser':
            modal = '<div class="iteh_modal"><div class="iteh_modal_content"><div onclick="hideModal()" class="iteh_modal_content_close">&#10005;</div>' +
                '<div class="iteh_modal_container">' +
                '<form method="post">' +
                '<div class="iteh_modal_container_input"><div>First Name:</div> <input value="" name="first_name" class="iteh_login_input first_name"/></div>' +
                '<div class="iteh_modal_container_input"><div>Last Name:</div> <input class="iteh_login_input last_name"/></div>' +
                '<div class="iteh_modal_container_input"><div>Username: </div><input class="iteh_login_input username" type="text"/></div>' +
                '<div class="iteh_modal_container_input"><div>Password: </div><input class="iteh_login_input password" type="password"/></div>' +
                '<input class="iteh_login_button" type="submit" onclick="formSubmitonEditingUser(event)" value="Submit"></form></div><div class="iteh_modal_helper"></div>' +
                '</div></div>';
            $.ajax({
                url: "user.php",
                type: 'GET',
                success: function (result) {
                    userInfo = JSON.parse(result);
                    $('.first_name').val(userInfo['first_name'])
                    $('.last_name').val(userInfo['last_name'])
                    $('.username').val(userInfo['username'])
                    $('.password').val(userInfo['password'])
                }
            });
            break;
        case 'newProduct':
                modal = '<div class="iteh_modal"><div class="iteh_modal_content"><div onclick="hideModal()" class="iteh_modal_content_close">&#10005;</div>' +
                '<div class="iteh_modal_container">' +
                '<form action="#" method="post">' +
                '<div class="iteh_modal_container_input"><div>Name:</div> <input value ="" name = "name" class="iteh_login_input name"/></div>' +
                '<div class="iteh_modal_container_input"><div>Price:</div> <input class="iteh_login_input price"/></div>' +

                '<input class="iteh_login_button" type="submit" onclick="formSubmitOnAddingProduct(event)" value="Submit"></form></div><div class="iteh_modal_helper"></div>' +
                '</div></div>';
            break;
       case 'editProduct':
            modal = '<div class="iteh_modal"><div class="iteh_modal_content"><div onclick="hideModal()" class="iteh_modal_content_close">&#10005;</div>' +
                '<div class="iteh_modal_container">' +
                '<form action="#" method="post">' +
                '<div class="iteh_modal_container_input"><div>Name:</div> <input value ="" name = "name" class="iteh_login_input name"/></div>' +
                '<div class="iteh_modal_container_input"><div>Price:</div> <input class="iteh_login_input price"/></div>' +

                '<input class="iteh_login_button" type="submit" onclick="formSubmitOnEditingProduct(event, '+ id + ' )" value="Submit"></form></div><div class="iteh_modal_helper"></div>' +
                '</div></div>';
            $.ajax({
                url: "product.php?id=" + id,
                type: 'GET',
                success: function (result) {
                    productInfo = JSON.parse(result);
                    $('.name').val(productInfo['name'])
                    $('.price').val(productInfo['price'])
                }
            });
            break;
        case 'deleteProduct':
            modal = '<div class="iteh_modal_delete">' +
                '<span class="iteh_label">Are you sure you want to delete this product ?</span>' +
                '<div class="iteh_button_toolbar"><div class="iteh_button submit_product" onclick="deleteProduct('+id+')">Yes</div><div class="iteh_button delete_product" onclick="hideModalDelete()">No</div></div></div>'
    }
    $('body').append(modal);
}

$('document').ready(function () {
    checkSearch();
    $('.iteh_header_search').keyup(function () {
            let inputText = $(this).val();
            if (inputText != '') {
                checkSearch(inputText);
            }else{
                checkSearch();
            }
        }
    )
})



