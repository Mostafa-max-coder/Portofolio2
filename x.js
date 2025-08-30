 // Script 1
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if(window.scrollY > 20){
                    header.classList.add("scrolled");
                }
                else{
                    header.classList.remove("scrolled")
                }
            })

            // Script 2
            const h = document.querySelector('.hamburger');
            const n = document.querySelector('.nav-links');
            h.addEventListener('click',()=>{
                n.classList.toggle('active');
            })

            // Script 3
            window.addEventListener('load', () => {
            const header = document.querySelector('header');
            header.classList.add('show');
});