const USER_WINDOW_WIDTH = window.innerWidth;
// change sections
const sec_1 = document.getElementById("section-1");
const sec_2 = document.getElementById("section-2");
const sec_3 = document.getElementById("section-3");
const sec_4 = document.getElementById("section-4");
const aLinks = document.querySelectorAll("a");
const navList = document.querySelector("nav");
aLinks.forEach(elem => {
    elem.addEventListener("click", (e) => {
        navList.style.background = "transparent";
        navList.style.height = "120px";
        if(e.target.id === 'home') {
            sec_1.style.visibility = "visible";
            //aLinks[0].style.color = "#0dc535";
            aLinks[0].classList.remove("disabled-anchor");
            aLinks[1].classList.add("disabled-anchor");
            aLinks[2].classList.add("disabled-anchor");
            aLinks[3].classList.add("disabled-anchor");
            sec_2.style.visibility = "hidden";
            sec_3.style.visibility = "hidden";
            sec_4.style.visibility = "hidden";
        } else if (e.target.id === 'edu') {
            sec_1.style.visibility = "hidden";
            sec_2.style.visibility = "visible";
            aLinks[1].classList.remove("disabled-anchor");
            aLinks[0].classList.add("disabled-anchor");
            aLinks[2].classList.add("disabled-anchor");
            aLinks[3].classList.add("disabled-anchor");
            sec_3.style.visibility = "hidden";
            sec_4.style.visibility = "hidden";
        } else if (e.target.id === 'projects') {
            sec_1.style.visibility = "hidden";
            sec_2.style.visibility = "hidden";
            sec_3.style.visibility = "visible";
            aLinks[2].classList.remove("disabled-anchor");
            aLinks[0].classList.add("disabled-anchor");
            aLinks[1].classList.add("disabled-anchor");
            aLinks[3].classList.add("disabled-anchor");
            sec_4.style.visibility = "hidden";
        } else if (e.target.id === 'contact') {
            sec_1.style.visibility = "hidden";
            sec_2.style.visibility = "hidden";
            sec_3.style.visibility = "hidden";
            sec_4.style.visibility = "visible";
            aLinks[0].classList.add("disabled-anchor");
            aLinks[1].classList.add("disabled-anchor");
            aLinks[2].classList.add("disabled-anchor");
            aLinks[3].classList.remove("disabled-anchor");
        }
    })
})

// textarea 
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e => {
    let scHeight = e.target.scrollHeight;
    let txtLength = e.target.value.length;
    textarea.style.height = `${scHeight}px`;
})


/*
// responsive navbar hide/appear
const nav = document.querySelector("nav");
const checkbox = document.getElementsByClassName("checkbox");
if (USER_WINDOW_WIDTH <= 1100) {
    aLinks.forEach(elem => {
        elem.addEventListener("click", (e) => {
            if (e.target.id === 'home' || 'edu' || 'projects' || 'contact') {
                nav.style.visibility = "hidden";
            }
            else {
                nav.style.visibility = "visible";
            }
        })
    })
} 
*/