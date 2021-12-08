const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    //Toggle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '' ;
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5 }s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
     });

}

navSlide();