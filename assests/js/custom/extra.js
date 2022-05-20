    window.addEventListener("DOMContentLoaded",event=>{
    var navbarScrollFunct=function(){
        const NavbarScroll=document.body.querySelector("#mainNavbar");
        if(!NavbarScroll){return;}
        if(window.scrollY===0){
            NavbarScroll.classList.remove("navbar-scroll");
        }else{
            NavbarScroll.classList.add("navbar-scroll");
        }
    }
    navbarScrollFunct();
    document.addEventListener("scroll",navbarScrollFunct);
    const Mynavbar=document.body.querySelector("#mainNavbar");
    if(Mynavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset:74
        });
    }
});

//Form Validate
(function(){
    'use strict'
    var formValidation=document.querySelector(".needs-validation");
    var name = document.querySelector("#name");
    var mail = document.querySelector("#mail");
    var phoneNumber = document.querySelector("#phone-number");
    var message = document.querySelector("#message");
    var btnContact=document.querySelector("#btn-contact");
    if(message.value.length===0){
        btnContact.disabled=true;
    }
    message.addEventListener("keyup",function(){
        document.getElementById("message-count").textContent=message.value.length;
        if(message.value.length===0){
            btnContact.disabled=true;
        }
        else if(message.value.length>10){
            btnContact.disabled=false;
        }
    });

    name.addEventListener("blur",nameCheck);
    mail.addEventListener("blur",mailCheck);
    phoneNumber.addEventListener("blur",numberCheck);
    message.addEventListener("blur",messageCheck);
    
    const spacePattern=/^\S*$/;
    const numericPattern =/^([^0-9]*)$/;          //Rakam içermeyenleri getir
    const mailPattern=/^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const onlyNumberPattern=/^[0-9]*$/;
    var errName=document.querySelector("#err-name");
    var errNumber=document.querySelector("#err-number");
    var errMail=document.querySelector("#err-mail");
    var errMessage=document.querySelector("#err-message");

    function nameCheck(){
        var errName=document.querySelector("#err-name");
        if(name.value.length===0){
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            errName.textContent="İsim Alanı Boş Bırakılamaz";
            return false;
        }
        else if(name.value.length < 3){
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            errName.textContent="İsim alanı 3 karakterden az olamaz";
            alert(name.value);
            return false;
        }
        else if(name.value.length > 30){
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            errName.textContent="İsim alanı 30 karakterden fazla olamaz";
            return false;
            
        }
        else if(!numericPattern.test(name.value)){
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            errName.textContent="İsminizde sayı olamaz";
            return false;
        }
        else{
            name.classList.remove("is-invalid");
            name.classList.add("is-valid");
            return true;
        }
    }
    function mailCheck(){
        if(mail.value.length===0){
            mail.classList.remove("is-valid");
            mail.classList.add("is-invalid");
            errMail.textContent="E-posta Alanı Boş Bırakılamaz";
            return false;
        }
        else if(!mailPattern.test(mail.value)|| mail.value.length < 3){
            mail.classList.remove("is-valid");
            mail.classList.add("is-invalid");
            errMail.textContent="Geçerli Bir E-posta Adresi Giriniz";
            return false;
        }
        else if(!spacePattern.test(mail.value)){
            mail.classList.remove("is-valid");
            mail.classList.add("is-invalid");
            errMail.textContent="E-posta Adresinizde Boşluk Bırakmayınız";
            return false;
        }
        else if(mail.value.length > 40){
            mail.classList.remove("is-valid");
            mail.classList.add("is-invalid");
            errMail.textContent="E-posta Adresinizde Boşluk Bırakmayınız";
            return false;
        }
        else{
            mail.classList.remove("is-invalid");
            mail.classList.add("is-valid");
            return true;
        }
    }
    function numberCheck(){
        if(phoneNumber.value.length===0){
            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");
            errNumber.textContent="İsim Alanı Boş Bırakılamaz";
            return false;
        }
        else if(!spacePattern.test(phoneNumber.value)){
            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");
            errNumber.textContent="Telefon Numaranızda Boşluk Bırakmayınız";
            return false;
        }
        else if(!onlyNumberPattern.test(phoneNumber.value)){
            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");
            errNumber.textContent="Telefon Numaranız sadece Rakamlardan Oluşmalıdır";
            return false;
        }
        else if(phoneNumber.value.length < 3|| phoneNumber.value.length>20){
            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");
            errNumber.textContent="Geçerli Bir Telefon Numarası Giriniz";
            return false;
        }
        else{
            phoneNumber.classList.remove("is-invalid");
            phoneNumber.classList.add("is-valid");
            return true;
        }
    }
    function messageCheck(){
        if(message.value.length===0){
            message.classList.remove("is-valid");
            message.classList.add("is-invalid");
            errMessage.textContent="Mesaj Alanı Boş Bırakılamaz";
            return false;
        }
        else if(message.value.length<10){
            message.classList.remove("is-valid");
            message.classList.add("is-invalid");
            errMessage.textContent="Mesajınız 10 Karakterden Az Olamaz";
            return false;
        }
        else if(message.value.length>300){
            message.classList.remove("is-valid");
            message.classList.add("is-invalid");
            errMessage.textContent="Mesajınız 300 Karakterden Fazla Olamaz";
            return false;
        }
        else{
            message.classList.remove("is-invalid");
            message.classList.add("is-valid");
            return true;
        }
    }
    
    formValidation.addEventListener("submit",function(e){
        if(!formValidation.checkValidity() || !nameCheck() || !mailCheck() || !numberCheck() || !messageCheck()){
            e.preventDefault();     //Submit is stop
            e.stopPropagation();
        }
    },false);
})();



window.sr=new ScrollReveal();
sr.reveal('.headline');
// sr.reveal('.reveal1',{
//     distance:"100px",
//     origin:"left",
//     scale:0.9
// });
sr.reveal(".btnReveal",{
    opacity:0,
    delay:1200,
    origin:"top",
    distance:"50px",
    duration:1000,
    easing: 'cubic-bezier(.17,.67,.85,.49)'
});
sr.reveal(".txtReveal",{
    // opacity:0,
    // delay:800,
    // origin:"top",
    // distance:"50px",
    rotate:{y:50},
    duration:1000,
    viewFactor: 0.5
});
ScrollReveal().reveal(".social-div #reveal-link",{
    easing: 'cubic-bezier(.17,.67,.85,.49)',
    delay:1700,
    duration:800,
    interval:1000
});
ScrollReveal().reveal(".social-div #reveal-link .instagram",{
    delay:1600,
    duration:800
});
ScrollReveal().reveal("hr",{
    delay:1200,
    duration:800
});
sr.reveal("#social-h5",{
    opacity:0,
    delay:800,
    origin:"top",
    distance:"50px"
});
sr.reveal(".css-h5",{
    opacity:0,
    delay:800,
    origin:"top",
    distance:"50px"
});
sr.reveal(".about-content",{
    opacity:0,
    delay:1000,
    origin:"top",
    distance:"50px"
});

sr.reveal(".about-content .about-content-title",{
    opacity:0,
    delay:1200,
    origin:"top",
    distance:"50px",
    interval:500
});

sr.reveal(".about-content .about-content-description",{
    opacity:0,
    delay:2000,
    origin:"top",
    distance:"50px",
    interval:500
});
sr.reveal(".edu-card",{
    opacity:0,
    delay:1000,
    origin:"top",
    distance:"50px",
    interval:800
});
sr.reveal(".edu-card .row .card-img-div img",{
    origin:"left",
    opacity:0,
    delay:800,
    distance:"50px",
    interval:500
});
sr.reveal(".edu-card .row .card-body-div .card-body .card-title h3",{
    origin:"top",
    opacity:0,
    delay:800,
    distance:"50px",
    interval:800
});
sr.reveal(".edu-card .row .card-body-div .card-body .card-title h5",{
    origin:"top",
    opacity:0,
    delay:800,
    distance:"50px",
    interval:800
});
sr.reveal(".edu-card .row .card-body-div .card-body .card-text p",{
    origin:"top",
    opacity:0,
    delay:800,
    distance:"50px",
    interval:900
});

sr.reveal(".skill-col-1 #skills-div",{
    origin:"top",
    opacity:0,
    distance:"50px",
    interval:200
});
sr.reveal(".skill-col-2 #skills-div",{
    origin:"top",
    opacity:0,
    distance:"50px",
    interval:200
});