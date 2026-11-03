function addRemoveClass()  {
    if (window.matchMedia("(min-width: 1250px)").matches) {
        document.getElementById("gear-3-div").classList.add("alternate");
        document.getElementById("gear-3-h3").classList.add("article-title-alternate");
        document.getElementById("gear-3-p").classList.add("article-subhead-alternate");
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        document.getElementById("gear-1-div").classList.add("alternate");
        document.getElementById("gear-1-h3").classList.add("article-title-alternate");
        document.getElementById("gear-1-p").classList.add("article-subhead-alternate");

        document.getElementById("gear-2-div").classList.remove("alternate");
        document.getElementById("gear-2-h3").classList.remove("article-title-alternate");
        document.getElementById("gear-2-p").classList.remove("article-subhead-alternate");
    } else if (window.matchMedia("(min-width: 420px)").matches) {
        document.getElementById("gear-1-div").classList.remove("alternate");
        document.getElementById("gear-1-h3").classList.remove("article-title-alternate");
        document.getElementById("gear-1-p").classList.remove("article-subhead-alternate");

        document.getElementById("gear-2-div").classList.add("alternate");
        document.getElementById("gear-2-h3").classList.add("article-title-alternate");
        document.getElementById("gear-2-p").classList.add("article-subhead-alternate");
    }
}

window.onload = addRemoveClass;
window.onresize = addRemoveClass;
