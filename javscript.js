// wishlist alert navbar 

function wishNav() {
    alert("Nothing To Add in Wish Right Now")
}

// navbar responsive

function navRes() {
    let nav_mob = document.querySelector(".icons-hide-res-div");

    nav_mob.addEventListener("click", () => top_nav())

    let header_nav = document.querySelector(".navbar-main-div");

    top_nav = () => {
        header_nav.classList.toggle("activeNavbarRes")
    }


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
        userDiv.style.borderColor = "red"
        return false;
    }
    else {
        errorP.style.display = "none";
        userDiv.style.borderColor = "#222"

    }

    if (pass_inp === "") {
        errorPtwo.style.display = "block";
        passDiv.style.borderColor = "red"
        return false;
    }
    else {
        errorPtwo.style.display = "none";
        passDiv.style.borderColor = "#222"

        alert("Login Done")
    }



    // let user_Inp = "abdul11@gmail.com";
    // let user_Pass = "abdulR123";

    // if (user === user_Inp && pass === user_Pass) {
    //     alert("Login Done");
    // }


}
