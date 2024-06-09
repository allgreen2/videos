var firebaseConfig = {
    apiKey: "AIzaSyBz1nN6PaeXoVci-D4dlu29tXp7EDyqKEs",
    authDomain: "aa1-login.firebaseapp.com",
    databaseURL: "https://aa1-login-default-rtdb.firebaseio.com",
    projectId: "aa1-login",
    storageBucket: "aa1-login.appspot.com",
    messagingSenderId: "980591383918",
    appId: "1:980591383918:web:28df91327b1ec055475d7f"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()


function login() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
    }

    var user_data = {

    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var database_ref = database.ref()

            database_ref.child('users/' + user.uid).update(user_data)
            logintimeAA1 = new Date().getTime()
            localStorage.setItem('email', email)
            localStorage.setItem('logintime', logintimeAA1)
            window.location.assign('videosAA1')
        })
        .catch(function (error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}


function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    } 
    else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}