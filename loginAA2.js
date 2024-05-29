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
            logintime = new Date().getTime()
            localStorage.setItem('email', email)
            localStorage.setItem('logintime', logintime)
            window.location.assign('index.html')
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