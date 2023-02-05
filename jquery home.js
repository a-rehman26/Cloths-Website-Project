// hide search navbar 

$(document).ready(function () {

    $("#navSearchright").click(function () {
        $("#hideSearchdiv").fadeIn(function () {
            $("#hideSearchdiv").css("display", "block");
        });
    });

    $("#hidesearchinputicon").click(function () {
        $("#hideSearchdiv").fadeOut(function () {
            $("#hideSearchdiv").css("display", "none");
        });
    });

    // hide navbar shopping cart
    $("#cartShoppingnav").click(function () {
        // $("#hideCartdiv").fadeIn(function () {
        $("#hideCartdiv").css("transform", "translateX(0)")
        // })
    })

    $("#cartCloseicon").click(function () {
        // $("#hideCartdiv").fadeOut(function () {
        $("#hideCartdiv").css("transform", "translateX(100%)")
        // })
    })



});



