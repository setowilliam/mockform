/*
Sign Up
signup.js
William Seto
2018-1-25
*/
window.onload = function() {
    setRequired();
    validFirstName = false;
    validLastName = false;
    validPassword = false;
    validRePassword = false;
    validPhoneNumber = false;
    validEducationStatus = false;
    var fName = document.querySelector("#input_first_name");
    var lName = document.querySelector("#input_last_name");
    var pwd = document.querySelector("#input_password");
    var rePwd = document.querySelector("#input_retype_password");
    var phoneNum = document.querySelector("#input_phone_number");
    var eduStat1 = document.querySelector("#radio_education_status1");
    var eduStat2 = document.querySelector("#radio_education_status2");
    var eduStat3 = document.querySelector("#radio_education_status3");

    var allInput = document.querySelectorAll(".user_input");
    for (var i = 0; i < allInput.length; i++) {
        allInput[i].value = "";
    }

    eduStat1.checked = false;
    eduStat2.checked = false;
    eduStat3.checked = false;

    fName.addEventListener("input", validateFirstName);
    lName.addEventListener("input", validateLastName);
    pwd.addEventListener("input", validatePassword);
    rePwd.addEventListener("input", validateRePassword);
    phoneNum.addEventListener("input", validatePhoneNumber);
    eduStat1.addEventListener("click", validateEducationStatus);
    eduStat2.addEventListener("click", validateEducationStatus);
    eduStat3.addEventListener("click", validateEducationStatus);

    function setRequired() {
        var temp = document.querySelectorAll(":required");
        for (var i = 0; i < temp.length; i++) {
            var parent = temp[i].parentElement;
            var redStar = document.createElement("label");
            redStar.innerHTML = "*";
            redStar.style.color = "rgb(204, 37, 37)";
            parent.insertBefore(redStar, temp[i]);
        }
    }
}

var validFirstName;
var validLastName;
var validPassword;
var validRePassword;
var validPhoneNumber;
var validEducationStatus;

function validateForm() {
    validateEducationStatus();
    var validAll = validFirstName && validLastName && validPassword && validRePassword && validPhoneNumber && validEducationStatus;
    return validAll;
}

function validateFirstName() {
    var currentElement = document.querySelector("#div_first_name");
    var val = currentElement.querySelector("input").value.trim();
    var error = currentElement.querySelector(".error_container");
    var error_val = error.querySelector(".error");
    var validChar = true;
    var alpha = false;
    
    for (var i = 0; i < val.length && validChar == true; i++) {
        var char = val.charAt(i);
        if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && char != '\'' && char != '-') {
            validChar = false;
        }
        else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')){
            alpha = true;
        }
    }
    
    if (val == "") {
        error_val.innerHTML = "First name can't be empty!"
        error.style.display = "block";
        validFirstName = false;
    }
    else if (!alpha) {
        error_val.innerHTML = "First name must contain at least one alpha character";
        error.style.display = "block";
        validFirstName = false;
    }
    else if (!validChar) {
        error_val.innerHTML = "First name can only contain alpha characters, apostrophe, or hyphen";
        error.style.display = "block";
        validFirstName = false;
    }
    else {
        error_val.innerHTML = "";
        error.style.display = "none";
        validFirstName = true;
    }
}

function validateLastName() {
    var currentElement = document.querySelector("#div_last_name");
    var val = currentElement.querySelector("input").value.trim();
    var error = currentElement.querySelector(".error_container");
    var error_val = error.querySelector(".error");
    var validChar = true;
    var alpha = false;
    
    for (var i = 0; i < val.length && validChar == true; i++) {
        var char = val.charAt(i);
        if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && char != '\'' && char != '-') {
            validChar = false;
        }
        else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')){
            alpha = true;
        }
    }
    
    if (val == "") {
        error_val.innerHTML = "Last name can't be empty!"
        error.style.display = "block";
        validLastName = false;
    }
    else if (!alpha) {
        error_val.innerHTML = "Last name must contain at least one alpha character";
        error.style.display = "block";
        validLastName = false;
    }
    else if (!validChar) {
        error_val.innerHTML = "Last name can only contain alpha characters, apostrophe, or hyphen";
        error.style.display = "block";
        validLastName = false;
    }
    else {
        error_val.innerHTML = "";
        error.style.display = "none";
        validLastName = true;
    }
}

function validatePassword() {
    var currentElement = document.querySelector("#div_password");
    var val = currentElement.querySelector("input").value;
    var error = currentElement.querySelector(".error_container");
    var error_val = error.querySelector(".error");
    var isLength = false;
    var isNumber = false;
    var isUpper = false;
    var isLower = false;
    
    if (val.length >= 8) {
        isLength = true;
        for (var i = 0; i < val.length; i++) {
            if (val.charAt(i) >= '0' && val.charAt(i) <= '1') {
                isNumber = true;
            }
            else if (val.charAt(i) >= 'a' && val.charAt(i) <= 'z') {
                isLower = true;
            }
            else if (val.charAt(i) >= 'A' && val.charAt(i) <= 'Z') {
                isUpper = true;
            }
        }
    }
    
    if (!isLength) {
        error_val.innerHTML = "Password must be at least 8 characters long";
        error.style.display = "block";
        validPassword = false;
    }
    else if (!isNumber || !isUpper || !isLower) {
        error_val.innerHTML = "Password must contain at least one number, one uppercase character, and one lowercase character";
        error.style.display = "block";
        validPassword = false;
    }
    else {
        error_val.innerHTML = "";
        error.style.display = "none";
        validPassword = true;
    }
}

function validateRePassword() {
    var currentElement = document.querySelector("#div_retype_password");
    var matchPassword = document.querySelector("#div_password").querySelector("input").value;
    var val = currentElement.querySelector("input").value;
    var error = currentElement.querySelector(".error_container");
    var error_val = error.querySelector(".error");
    var isLength = false;
    var isNumber = false;
    var isUpper = false;
    var isLower = false;
    
    if (val.length >= 8) {
        isLength = true;
        for (var i = 0; i < val.length; i++) {
            if (val.charAt(i) >= '0' && val.charAt(i) <= '1') {
                isNumber = true;
            }
            else if (val.charAt(i) >= 'a' && val.charAt(i) <= 'z') {
                isLower = true;
            }
            else if (val.charAt(i) >= 'A' && val.charAt(i) <= 'Z') {
                isUpper = true;
            }
        }
    }

    if (val != matchPassword) {
        error_val.innerHTML = "Passwords do not match";
        error.style.display = "block";
        validRePassword = false;
    }
    else if (!isLength) {
        error_val.innerHTML = "Password must be at least 8 characters long";
        error.style.display = "block";
        validRePassword = false;
    }
    else if (!isNumber || !isUpper || !isLower) {
        error_val.innerHTML = "Password must contain at least one number, one uppercase character, and one lowercase character";
        error.style.display = "block";
        validRePassword = false;
    }
    else {
        error_val.innerHTML = "";
        error.style.display = "none";
        validRePassword = true;
    }        

}

function validatePhoneNumber() {
    var currentElement = document.querySelector("#div_phone_number");
    var val = currentElement.querySelector("input").value;
    var error = currentElement.querySelector(".error_container");
    var error_val = error.querySelector(".error");

    var isDigit = true;

    for (var i = 0; i < val.length && isDigit == true; i++) {
        if (i != 3 && i != 7) {
            if (val.charAt(i) < '0' || val.charAt(i) > '9') {
                isDigit = false;
            }

        }
    }

    var areaCode = val.slice(0,3);
    var dash1 = val.charAt(3);
    var middle = val.slice(4, 7);
    var dash2 = val.charAt(7);
    var end = val.slice(8, 12);

    if (val.length != 12 || dash1 != '-' || dash2 != '-') {
        error_val.innerHTML = "Phone number must be in the format 999-999-9999";
        error.style.display = "block";
        validPhoneNumber = false;
    }
    else if (!isDigit) {
        error_val.innerHTML = "Phone number can only contain digits";
        error.style.display = "block";
        validPhoneNumber = false;
    }
    else if (areaCode == '000') {
        error_val.innerHTML = "Area code cannot be all zeroes";
        error.style.display = "block";
        validPhoneNumber = false;       
    }
    else {
        error_val.innerHTML = "";
        error.style.display = "none";
        validPhoneNumber = true;
    }
}

function validateEducationStatus() {
    var currentElement = document.querySelector("#div_education_status");
    var val1 = currentElement.querySelector("#radio_education_status1").checked;
    var val2 = currentElement.querySelector("#radio_education_status2").checked;
    var val3 = currentElement.querySelector("#radio_education_status3").checked;
    var error = currentElement.nextElementSibling;
    var error_val = error.querySelector(".error");

    if (val1 || val2 || val3) {
        error_val.innerHTML = "";
        error.style.display = "none";
        validEducationStatus = true;
    }
    else {
        error_val.innerHTML = "Something must be selected";
        error.style.display = "block";
        validEducationStatus = false;
    }
}