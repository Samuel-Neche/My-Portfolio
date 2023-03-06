gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach(link =>{  
    link.addEventListener('click', () =>{
        //Turn navs blue
        gsap.to(links, {color:"#658ec6"});
    if(document.activeElement === link){
        gsap.to(link, {color:"#385ae0"});
    }

        //Wanna move the line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
    duration: 1.25 ,
    absolute: true,
    ease:"elastic.out(1,0.5)",
    });
});    
});