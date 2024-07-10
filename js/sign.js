// Sign_up item 

var sign_username = document.getElementById(`sign_username`)
var sign_email = document.getElementById(`sign_email`)
var sign_password = document.getElementById(`sign_password`)

// Sign_up button 
var sign_btn2 = document.getElementById(`sign_btn2`)

// Condition
var sign_fill_condition = true

// Eye button
var eye_btn1 = document.getElementById(`btn1`)

// Sign up in function start
sign_btn2.addEventListener(`click`, function (event) {
    event.preventDefault()
    if (sign_fill_condition == true) {
        if (sign_username.value == ``) {
            Swal.fire("Pleas Enter Username 📝");
        }
        else if (sign_email.value == ``) {
            Swal.fire("Pleas Enter Email 📝");
        }
        else if (sign_password.value == ``) {
            Swal.fire("Pleas Enter Password 📝");
        }
        else if (!sign_email.value.includes('@gmail.com')) {
            Swal.fire("Pleas Enter a valid Email 📝");
        }
        else {
            Swal.fire({
                title: "Account Created Successfully 📝",
                confirmButtonText: "Ok",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'login.html';
                }
            });
            var sign_details = {
                username: sign_username.value,
                email: sign_email.value,
                password: sign_password.value,
            }
            localStorage.setItem(`${sign_email.value}`, JSON.stringify(sign_details))
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        }
    }
})

// Eye function start
eye_btn1.addEventListener(`click`, function (e) {
    if (e.target.parentElement.previousElementSibling.id == `log_password`) {
        var log_type = e.target.parentElement.previousElementSibling.type

        if (log_type == `password`) {
            btn1.innerHTML = `<i class="bi bi-eye-fill"></i>`
            log_password.setAttribute(`type`, `text`)
        }
        else {
            btn1.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`
            log_password.setAttribute(`type`, `password`)
        }
    }
    else if (e.target.parentElement.previousElementSibling.id == `sign_password`) {
        var sign_type = e.target.parentElement.previousElementSibling.type

        if (sign_type == `password`) {
            btn1.innerHTML = `<i class="bi bi-eye-fill"></i>`
            sign_password.setAttribute(`type`, `text`)
        }
        else {
            btn1.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`
            sign_password.setAttribute(`type`, `password`)
        }
    }
})
// Eye function end