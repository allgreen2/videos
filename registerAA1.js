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


function register() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    check = document.getElementById('check').value

    if (validate_email(email) == false) {
        alert('Email is Outta Line!!')
        return
    }
    if(validate_password(password, check) == false) {
        alert('Password must be longer than 6 characters and match')
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var database_ref = database.ref()

            var user_data = {
                email: email,
            }

            database_ref.child('users/' + user.uid).set(user_data)
            send_email()
        })
        .catch(function (error) {
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

function validate_password(password, check) {
    if (password < 6) {
        return false
    } else if (password == check)
    {
        return true
    }
    else {
        return false
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

function send_email() {
    auth.currentUser.sendEmailVerification()
        .then(() => {
            alert('User Created, Proceed to login')
            window.location.assign('loginAA1')
        })
        .catch(function (error) {
            var error_message = error.message

            alert(error_message)
        })
}