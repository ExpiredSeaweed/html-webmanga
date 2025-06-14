$(function() {
    var togbutt = false;

    var jumlahFoto = $('.lat-slide').length;
    var lebSlide = $('.lat-slide').width();
    var tingSlide = $('.lat-slide').height();
    var totLeb = lebSlide * jumlahFoto;

    $('#mangas-f').css({
        width: lebSlide,
        height: tingSlide,
        overflow: 'hidden'
    });

    $('#mangas-c').css({
        width: totLeb,
        marginLeft: -lebSlide,
        position: 'relative'
    });

    $('.lat-slide').css('float', 'left');

    function nextbtn() {
        $('#mangas-c').animate({
            left: -lebSlide
        }, 1000,
        () => {
            $('.lat-slide:first-child').appendTo('#mangas-c');
            $('#mangas-c').css('left', '0');
        });
    }

    function prevbtn() {
        $('#mangas-c').animate({
            left: +lebSlide
        }, 1000,
        () => {
            $('.lat-slide:first-last').prependTo('#mangas-c');
            $('#mangas-c').css('left', '0');
        });
    }

    $('#rb').click(nextbtn);
    $('#lb').click(prevbtn);

});

let emailTxt = document.getElementById("emailTxt")
let phoNumTxt = document.getElementById("phoNumTxt")
let passTxt = document.getElementById("passTxt")
let passConfTxt = document.getElementById("passConfTxt")
let termbox = document.getElementById("termbox")
let submit = document.getElementById("submit")

let email, phone, password, passwordConf, terms

function getData() {
    email = emailTxt.value
    phone = phoNumTxt.value
    password = passTxt.value
    passwordConf = passConfTxt.value
    terms = termbox.checked
}

function validate(event) {
    getData()
    if (email == "") {
        alert ("Email cannot be empty")
    }
    if (email.includes("@") == false) {
        alert ("Email must contains @")
        return
    }
    if (email.indexOf("@") != email.lastIndexOf("@")) {
        alert ("Email cannot have more than 1 @")
        return
    }
    if (email.startsWith("@") || email.endsWith("@")) {
        alert ("Email cannot starts or ends with @")
        return
    }
    if (phone.length < 9) {
        alert ("PhoneNumber must be more than 9 digits")
        return
    }
    if (password.length < 4 || password.length > 16 ) {
        alert ("Password is not valid")
        return
    }
    if (password != passwordConf) {
        alert ("Confirmation Password must be the same as Password")
        return
    }
    if (terms == false) {
        alert ("You must agree to our Terms and Conditions")
        return
    }

}

submit.addEventListener("click",
    event => validate(event)
)

