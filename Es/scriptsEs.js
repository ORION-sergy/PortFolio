document.addEventListener("DOMContentLoaded", function(){
    /* TOGGLE ICON BAR */
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');
    
        menuIcon.onclick = ()=>{
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        }    
    /* SCROLL SECTION ACTIVE LINKS */
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');
    
        window.onscroll = () =>{
            sections.forEach(sec=>{
                let top = window.scrollY;
                let offset  = sec.offsetTop -150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
    
                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
                }
            });
        };
    
    /* STICKY NAVBAR */
    
        let header = document.querySelector('header');
    
        header.classList.toggle('sticky', window.scrollY > 100);
        /* remove toggle icon and navbar when click navbar link (scrol) */
        /* menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active'); */
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });
    
        /* SCROLLREVEAL */
        ScrollReveal({
            //reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });
    
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    
        /* "TYPED JS" */
        const typed = new Typed('.multiple-text', {
            strings: ['Frontend Developer','Freelancer ...','& TeamWork Dev'],
            typeSpeed: 100,
            backSpeed: 150,
            backDelay: 2000,
            loop: true
        })
    /* --CAMBIO DE IDIOMA-- */
        var check = document.querySelector(".check");
        check.addEventListener('click',idioma);
        function idioma(){
            let id = check.checked;
            if(id == true){
                location.href = "indexEs.html";
            }else{
                location.href = "../index.html";
            }
        }
        /* CAMBIO DE COLOR EN CUANTO AL IDIOMA */
        const sp = document.getElementById('sp');
        var lang = document.documentElement.lang;

        // Verificar si el valor es "en" (inglés)
        if (lang === "es") {
            // El idioma es inglés
            sp.style.color = '#00abf0';
        }
        /* EXPANSION DE TARJETAS */
        const expandTail = document.getElementById('expandTail');
        const expandJs = document.getElementById('expandJs');
        const expandGithub = document.getElementById('expandGithub');
        botonTailwind.addEventListener("click",()=>{
            event.preventDefault();
            if (expandTail.style.display === 'none') {
                expandTail.style.display = 'block';
                botonTailwind.textContent = 'Show Less';
            } else {
                expandTail.style.display = 'none';
                botonTailwind.textContent = 'Show More';
            }
        })
        botonJs.addEventListener("click",()=>{
            event.preventDefault();
            if (expandJs.style.display === 'none') {
                expandJs.style.display = 'block';
                botonJs.textContent = 'Show Less';
            } else {
                expandJs.style.display = 'none';
                botonJs.textContent = 'Show More';
            }
        })
        botonGithub.addEventListener("click",()=>{
            event.preventDefault();
            if (expandGithub.style.display === 'none') {
                expandGithub.style.display = 'block';
                botonGithub.textContent = 'Show Less';
            } else {
                expandGithub.style.display = 'none';
                botonGithub.textContent = 'Show More';
            }
        })
    /*  */
    /* const $form = document.querySelector('#form');

    $form.addEventListener('submit', handleSubmit);
    
    function handleSubmit(event) {
      event.preventDefault();
      const form = new FormData(this);
    
      const nombre = form.get('nombre');
      const email = form.get('email');
      const asunto = form.get('asunto');
      const numero = form.get('numero');
      const mensaje = encodeURIComponent(form.get('message'));
    
      const enlaceMailto = `mailto:ramos_sergio20@hotmail.com?subject=${asunto} - ${nombre} - ${email} - ${numero}&body=${mensaje}`;
      window.location.href = enlaceMailto;
    } */
    
    });
    