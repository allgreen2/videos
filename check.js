const email = localStorage.getItem('email')
const loginTime = localStorage.getItem('logintime')

if (email == null) {
    window.location.assign('login.html')
}

now = new Date().getTime()

console.log('Last login Time ' + Number(loginTime))
console.log('Current Time ' + Number(now))
console.log('Auto logout ' + (Number(loginTime) + 100000000))

if (Number.isNaN(loginTime) || now > (Number(loginTime) + 100000000)) {
    window.location.assign('login.html')
}