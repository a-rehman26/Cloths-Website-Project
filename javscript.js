// wishlist alert navbar

function wishNav() {
    alert("Nothing To Add in Wish Right Now");
}

// navbar responsive

function navRes() {
    let nav_mob = document.querySelector(".icons-hide-res-div");

    nav_mob.addEventListener("click", () => top_nav());

    let header_nav = document.querySelector(".navbar-main-div");

    top_nav = () => {
        header_nav.classList.toggle("activeNavbarRes");
    };
}

// error login form inputs required

function formSubF() {
    let user = document.getElementById("userinpID").value;
    let pass = document.getElementById("userpassID").value;

    let errorP = document.getElementById("errorLoginFrm");
    let errorPtwo = document.getElementById("errorLoginFrm2");

    let userDiv = document.getElementById("user-div-error-bd-clr");
    let passDiv = document.getElementById("pass-div-error-bd-clr");

    let user_inp = document.forms["mloginFrm"]["userName"].value;
    let pass_inp = document.forms["mloginFrm"]["userPass"].value;

    if (user_inp === "") {
        errorP.style.display = "block";
        userDiv.style.borderColor = "red";
        return false;
    } else {
        errorP.style.display = "none";
        userDiv.style.borderColor = "#222";
    }

    if (pass_inp === "") {
        errorPtwo.style.display = "block";
        passDiv.style.borderColor = "red";
        return false;
    } else {
        errorPtwo.style.display = "none";
        passDiv.style.borderColor = "#222";

        alert("Login Done");
    }

    // let user_Inp = "abdul11@gmail.com";
    // let user_Pass = "abdulR123";

    // if (user === user_Inp && pass === user_Pass) {
    //     alert("Login Done");
    // }
}

// signup form required

function signUP() {
    let user_Signup_Name = document.forms["signUPfrm"]["signUPinpNamenm"].value;
    let user_Signup_Email = document.forms["signUPfrm"]["signUPinpNameem"].value;
    let user_Signup_Pass = document.forms["signUPfrm"]["signUPinpNameps"].value;
    let user_Signup_cPass = document.forms["signUPfrm"]["signUPinpNameCps"].value;


    let error_para_one = document.getElementById("errorsignUPFrm1");
    let error_para_two = document.getElementById("errorsignUPFrm2");
    let error_para_three = document.getElementById("errorsignUPFrm3");
    let error_para_four = document.getElementById("errorsignUPFrm4");

    let errorMatch_para = document.getElementById("errorsMatchignUPFrm3");

    let error_brd_clr_one = document.getElementById("name-error-brd-clr");
    let error_brd_clr_two = document.getElementById("email-error-brd-clr");
    let error_brd_clr_three = document.getElementById("pass-error-brd-clr");
    let error_brd_clr_four = document.getElementById("cPass-error-brd-clr");


    if (user_Signup_Name === "") {
        error_para_one.style.display = "block";
        error_brd_clr_one.style.borderColor = "red";

        return false;
    } else {
        error_para_one.style.display = "none";
        error_brd_clr_one.style.borderColor = "#222";
    }

    if (user_Signup_Email === "") {
        error_para_two.style.display = "block";
        error_brd_clr_two.style.borderColor = "red";

        return false;
    } else {
        error_para_two.style.display = "none";
        error_brd_clr_two.style.borderColor = "#222";
    }

    if (user_Signup_Pass === "") {
        error_para_three.style.display = "block";
        error_brd_clr_three.style.borderColor = "red";

        return false;
    } else {
        error_para_three.style.display = "none";
        error_brd_clr_three.style.borderColor = "#222";
    }

    if (user_Signup_cPass === "") {
        error_para_four.style.display = "block";
        error_brd_clr_four.style.borderColor = "red";

        return false;
    } else {
        error_para_four.style.display = "none";
        error_brd_clr_four.style.borderColor = "#222";
    }

    if (user_Signup_Pass != user_Signup_cPass) {
        errorMatch_para.style.display = "block";
        error_brd_clr_four.style.borderColor = "red";

        return false;
    } else {
        error_para_three.style.display = "none";
        error_brd_clr_three.style.borderColor = "#222";
    }
}

// password strength


function inp_str() {

    let error_brd_clr = document.getElementById("pass-error-brd-clr");
    let user_Signup_inp = document.getElementById("signUPinpidps");
    let pass_str_signup = document.getElementById("psStr");

    user_Signup_inp.addEventListener("input", () => {
        if (user_Signup_inp.value.length <= 4) {
            pass_str_signup.innerHTML = "Weak";
            error_brd_clr.style.borderColor = "red"
            pass_str_signup.style.color = "red"
        }
        else if (user_Signup_inp.value.length >= 5 && user_Signup_inp.value.length <= 8) {
            pass_str_signup.innerHTML = "Normal";
            error_brd_clr.style.borderColor = "gold"
            pass_str_signup.style.color = "gold"
        }
        else if (user_Signup_inp.value.length >= 9 && user_Signup_inp.value.length <= 25) {
            pass_str_signup.innerHTML = "Strong";
            error_brd_clr.style.borderColor = "darkgreen"
            pass_str_signup.style.color = "darkgreen"
        }
    });
}

// password login eye 

function eyeLogin() {

    let closeEye = document.getElementById("closeEye");
    let openEye = document.getElementById("openEye");

    let inp_login_pass = document.getElementById("userpassID");

    if (inp_login_pass.type === "password") {
        inp_login_pass.type = "text";
        openEye.style.display = "block";
        closeEye.style.display = "none";
    }
    else {
        inp_login_pass.type = "password";
        openEye.style.display = "none";
        closeEye.style.display = "block";
    }


}