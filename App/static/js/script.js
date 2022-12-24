/*------------------------------------
 # FULL VALIDATION FORM
 ------------------------------------*/
//1) input mask(phone)

$(document).ready(function () {
    $(".phone").inputmask("(99) 99999-99999", {
        "onincomplete": function () {
            $(".phone").val("");
            swal("Opsss !", "incomplete phone.Please review !", "info");
            return false;
        }});
});

//2) INPUT VALIDATION
//a) front end form
function validateEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function validateForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const file = document.getElementById("file").value;

    if (name == "") {
        document.getElementById("bg-spinner").style.display="none";
        swal("Opsss !", "Name field cannot be empty.", "error");
        return false;
    }
    else if (name == name.toUpperCase()) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById('name').value = '';
        swal("Opsss !", "name field cannot be UPPERCASE.", "info");
        return false;
    }
    
    else if (age == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "age field cannot be empty.", "error");
        return false;
    }
    else if ((age < 21) || (age > 70)) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById('age').value = '';
        swal("Opsss !", "age only between 21 and 70 years old.", "error");
        return false;
    }
    else if (email == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "email field cannot be empty.", "error");
        return false;
    }
    else if (!(validateEmail(email))) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById('email').value = '';
        swal("Opsss !", "write valid email id.", "error");
        return false;
    }
    else if (phone == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "phone field cannot be empty.", "error");
        return false;
    }
    else if (address == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "address field cannot be empty.", "error");
        return false;
    }
    else if (skills == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "skills field cannot be empty.", "error");
        return false;
    }
    else if (experience == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "experience field cannot be empty.", "error");
        return false;
    }
    else if (file == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "file field cannot be empty.", "error");
        return false;
    }
    else {
        return true;
    }
}

//b) back end form
function validateEmail2(email2) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email2);
}
function validateForm2() {
    const name2 = document.getElementById("name2").value;
    const age2 = document.getElementById("age2").value;
    const email2 = document.getElementById("email2").value;
    const phone2 = document.getElementById("phone2").value;
    const address2 = document.getElementById("address2").value;
    const skills2 = document.getElementById("skills2").value;
    const experience2 = document.getElementById("experience2").value;
    const file2 = document.getElementById("file2").value;

    if (name2 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "Name field cannot be empty.", "error");
        return false;
    }
    else if (name2 == name2.toUpperCase()) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById('name2').value = '';
        swal("Opsss !", "name field cannot be UPPERCASE.", "info");
        return false;
    }
    
    else if (age2 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "age field cannot be empty.", "error");
        return false;
    }
    else if ((age2 < 21) || (age2 > 70)) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById('age2').value = '';
        swal("Opsss !", "age only between 21 and 70 years old.", "error");
        return false;
    }
    else if (email2 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "email field cannot be empty.", "error");
        return false;
    }
    else if (!(validateEmail2(email2))) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById('email2').value = '';
        swal("Opsss !", "write valid email id.", "error");
        return false;
    }
    else if (phone2 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "phone field cannot be empty.", "error");
        return false;
    }
    else if (address2 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "address field cannot be empty.", "error");
        return false;
    }
    else if (skills2 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "skills field cannot be empty.", "error");
        return false;
    }
    else if (experience2 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "experience field cannot be empty.", "error");
        return false;
    }
    else if (file2 == "") {
        document.getElementById("bg-spinner").style.display = "none";]
        swal("Opsss !", "file field cannot be empty.", "error");
        return false;
    }
    else {
        return true;
    }
}

//c) full stack form
function validateEmail3(email3) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email3);
}
function validateForm3() {
    const name3 = document.getElementById("name3").value;
    const age3 = document.getElementById("age3").value;
    const email3 = document.getElementById("email3").value;
    const phone3 = document.getElementById("phone3").value;
    const address3 = document.getElementById("address3").value;
    const skills3 = document.getElementById("skills3").value;
    const experience3 = document.getElementById("experience3").value;
    const file3 = document.getElementById("file3").value;

    if (name3 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "Name field cannot be empty.", "error");
        return false;
    }
    else if (name3 == name3.toUpperCase()) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById('name3').value = '';
        swal("Opsss !", "name field cannot be UPPERCASE.", "info");
        return false;
    }
    
    else if (age3 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "age field cannot be empty.", "error");
        return false;
    }
    else if ((age3 < 21) || (age3 > 70)) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById('age3').value = '';
        swal("Opsss !", "age only between 21 and 70 years old.", "error");
        return false;
    }
    else if (email3 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "email field cannot be empty.", "error");
        return false;
    }
    else if (!(validateEmail3(email3))) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById('email3').value = '';
        swal("Opsss !", "write valid email id.", "error");
        return false;
    }
    
    else if (phone3 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "phone field cannot be empty.", "error");
        return false;
    }
    else if (address3 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "address field cannot be empty.", "error");
        return false;
    }
    else if (skills3 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "skills field cannot be empty.", "error");
        return false;
    }
    else if (experience3 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "experience field cannot be empty.", "error");
        return false;
    }
    else if (file3 == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss !", "file field cannot be empty.", "error");
        return false;
    }
    else {
        return true;
    }
}

//3) Maximum upload file size is
$(document).ready(function () {
    $("#file,#file2,#file3").bind('change', function () {
        var a = (this.files[0].size);
        if (a > 2 * 1048576) {
            swal("Attention !", "Maximum allowed file size is only 2MB", "info");
            this.value = "";
        };
    });
});

//4) Allow only letters in Name
$(".name").keyup(function () {
    if (!/^[a-zA-Z_]*$/.test(this.value)) {
        this.value = this.value.split(/[^a-zA-Z_]/).join('');
    }
});
//5) prevent more thna 1 white space in NAME
//6) prevent starting white space in all inputs(including text area)
$("input[type='text'], textarea").on("keypress", function(e) {
    if(e.which === 32 && ! this.value.length)
        e.preventDefault();
});
// 7) allow only numbers in Age filed
$(".age").keyup(function () {
    if (!/^[0-9]*s/.test(this.value)) {
        this.value = this.value.split(/[^0-9]/).join('');
    }
});
// 8) if age is greater than 70 auto clear
$(".age").keyup(function () {
    if ((this.value) > 70) {
        this.value = '';
    }
});
// 9) prevent starting zero in the age filed
$(".age").on("input", function () {
    if (/^0/.test(this.value)) {
        this.value = this.value.replace(/^0/, "")
    }
});
//10) email address always in lower case letters
$(document).ready(function () {
    $(".email").keyup(function () {
        this.value = this.value.toLowerCase();
    });
});
