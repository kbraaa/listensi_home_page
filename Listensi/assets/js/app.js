$('.owl-1').owlCarousel({
    loop:true,
    margin:2,
    nav:true,
    items:1,
    dots:false,
})

$('.owl-2').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    items:1,
    dots:true,
})


$('.owl-3').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    items:1,
    dots:true,
})

$('.owl-4').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}