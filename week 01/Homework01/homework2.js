// indexOf
function checkEmail(email) {
    if (email.indexOf('@') < 0) {
        console.log("이메일이 아닙니다.")
    } else {
        console.log("이메일이 맞습니다.")
    }
}

checkEmail('gunhee21@gmail.com') // 이메일이 맞습니다.
checkEmail('gunhee21$gmail.com') // 이메일이 아닙니다.