function validateForm(){
    var firstName = firstNameInput.value.trim();
    var lastName = lastNameInput.value.trim();
    var password = passwordInput.value.trim();
    var password2 = repasswordInput.value.trim();
    var email = emailInput.value.trim();

    var isValid = true;
    // Họ
    if (firstName === ''){
        firstNameErrorMessage.textContent = 'Vui lòng nhập họ của bạn.';
        firstNameInput.focus();
        isValid = false;
    }
    else {
        firstNameErrorMessage.textContent = '';
    }
    // Tên
    if (lastName === ''){
        lastNameErrorMessage.textContent = 'Vui lòng nhập tên của bạn.';
        lastNameInput.focus();
        isValid = false;
    }
    else {
        lastNameErrorMessage.textContent = '';
    }
    // Mật khẩu 1
    if (password === ''){
        passwordErrorMessage.textContent = 'Vui lòng nhập mật khẩu.';
        passwordInput.focus();
        isValid = false;
    }
    else if(password.length < 8){
        passwordErrorMessage.textContent = 'Mật khẩu phải lớn hơn 8 ký tự.';
        passwordInput.focus();
        isValid = false;
    }
    else {
        passwordErrorMessage.textContent = '';
    }
    // Mật khẩu 2
    if(password2 === ''){
        repasswordErrorMessage.textContent = 'Vui lòng nhập lại mật khẩu.';
        repasswordInput.focus();
        isValid = false;
    }
    else if(password2 != password){
        repasswordErrorMessage.textContent = 'Mật khẩu của bạn không trùng khớp.';
        repasswordInput.focus();
        isValid = false;
    }
    else{
        repasswordErrorMessage.textContent = '';
    }
    // Email
    if (!validateEmail(emailInput.value)) {
        emailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
        emailInput.focus();
        isValid = false;
    } else {
        emailErrorMessage.textContent = '';
    }
        


    if(isValid){
        alert('Đăng ký thành công');
        location.href = 'index.html';
    }

    function validateEmail(email) {
        var emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }
}