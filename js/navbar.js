const nav = document.querySelector(".menu-bar");

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active',window.screenY > 0)
    });