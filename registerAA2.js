// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3dwICC7P3CRN86LyNh3uezy0vOFsBF8A",
    authDomain: "aa2-login.firebaseapp.com",
    databaseURL: "https://aa2-login-default-rtdb.firebaseio.com",
    projectId: "aa2-login",
    storageBucket: "aa2-login.appspot.com",
    messagingSenderId: "77094954317",
    appId: "1:77094954317:web:d7899979f369d185030304"
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
            window.location.assign('loginAA2.html')
        })
        .catch(function (error) {
            var error_message = error.message

            alert(error_message)
        })
}