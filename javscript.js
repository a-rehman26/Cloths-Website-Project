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

// filter in product home cards

