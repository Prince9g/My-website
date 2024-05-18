const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
if ($(document.querySelector(".right").length == 1)) {
             
    var typed_strings = 
        $(".right").text();

    var typed = new Typed(".right", {
        strings: typed_strings.split(", "),
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
}