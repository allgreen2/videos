const email = localStorage.getItem('email')
const loginTime = localStorage.getItem('logintimeAA1')

if (email == null) {
    window.location.assign('loginAA1')
}

now = new Date().getTime()

console.log('Last login Time ' + Number(loginTime))
console.log('Current Time ' + Number(now))
console.log('Auto logout ' + (Number(loginTime) + 2628000000))

if (Number.isNaN(loginTime) || now > (Number(loginTime) + 2628000000)) {
    window.location.assign('loginAA1')
}