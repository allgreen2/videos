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


function register() {
    full_name = document.getElementById('full_name').value
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
    if (validate_field(full_name) == false) {
        alert('One or More Extra Fields is Outta Line!!')
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var database_ref = database.ref()

            var user_data = {
                email: email,
                full_name: full_name
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
            window.location.assign('login.html')
        })
        .catch(function (error) {
            var error_message = error.message

            alert(error_message)
        })
}