// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDHqfWekaTA3zpHZlypD8akQwAqi7FGNW0",
    authDomain: "contact-form-73866.firebaseapp.com",
    databaseURL: "https://contact-form-73866-default-rtdb.firebaseio.com",
    projectId: "contact-form-73866",
    storageBucket: "contact-form-73866.appspot.com",
    messagingSenderId: "658678159726",
    appId: "1:658678159726:web:88fe2df4087c33f041c97f",
    measurementId: "G-2965MEQJD5"
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