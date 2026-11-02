//
============================================// DATA SCIENCE POTIFOLIO-JAVASCRIPT //===============================

//
=========================== //1. NAVIGATION ACTIVE LINK //========================================

const sections = ducument.querrySelectorAll("section");
const navLinks = document.querrySelectorAll("nav-links a");
window.addEventListener("scroll",( => {
    let currentSection ="";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if(
            link.getAttribute("href") === `#$ {currentSection}`){
                link.classList.add("active");
            }
    });
}));

//=====================================//2. NAVIGATION BACKGROUND ON SCROLL//=================================

const header = document.querrySelector("header");
window.addEventListener("scroll", () => {
    if (window.scroll>50) {
        header.style.background = "rgba(7, 17, 31, 0.9)",
    }
});

//==================================// 3. SMOOTH SCROLLING // ======================================


    document.querrySelector('a[href^="#"]').forEach((link) => {
        link.addEventListener("click" function (event) {
            const targetId = this.getAttribute("href") ;
            if (targetId === "#") {
                return
            }
            const target = document.querrySelector(targetId);
            if (target){
                preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
    
    //=============================4. SCROLL REVEAL ANIMATION // ==============================

    const revealElements = document.querrySelectorAll(
        ".skill-card, .project-card, .time line-item, .about-text"
    );
    const revealObserver = new intersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if
                    (entry.isIntersecting){
                        entry.target.classList.add("show");
                        revealObserver.unobserve(entry.target);
                    }
                });
            }
        );
        revealElements.forEach((element)
    =>{
        element.classList.add("reveal");
        revealObserver.observe(element);
    });

    //======================= //5. PROJECT CARD INTERACTION //==============================
    
    const projectCarda = document.querrySelectorAll("project-card");
    projectCards.forEach((card) => {
        card.addEventListener("mouseenter",
            () => {
                card.style.transform = "translateY(-10px)";
            });
            card.addEventListener("mouseleave"() => {
                card.style.transform = "translateY(0)";
            });
        });
        
//=================//6. CURRENT YEAR IN FOOTER // =======================

const footerText = document.querrySelector("footer p");
if (footerText){
    const currentYear = new Date().getFullYear();
    
    footerText.innerHTML = `$ {(currentYear) Innnocent Harineck.All Rights Reserved.`;

}

//=========================// 7. CV BUTTON // ===============================

const cvButton =  document.querrySelector(".cv-Button"

);
if (cvButton){
    cvButton.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Your cv will be available here we add the file"

        );
    });
}

// ===================== //8. WELCOME MESSAGE // ======================
console.log(
    "welcome to Innocent Harineck's Data Science Portfoil"
);



