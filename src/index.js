// Import css for webpack to bundle it in dist index.html
import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js"
import { aboutPage } from "./about.js"


const main = ( function() {
    
    const contents = document.querySelector('#content');
    
    function renderContents(node) {
        contents.appendChild(node);
    }
    
    function clearContents() {
        while (contents.firstChild) {
            contents.removeChild(contents.firstChild);
          }
    }

    const renders = {
        home() {
            clearContents();
            renderContents(homePage.createContentDiv());
        },

        menu() {
            clearContents();
            renderContents(menuPage.createContentDiv());
        },

        about() {
            clearContents();
            renderContents(aboutPage.createContentDiv());
        },
    };

    // Tab button references
    const tabs = document.querySelectorAll(".tabBtn");
    tabs.forEach( tab => {
        tab.addEventListener("click", renders[tab.dataset.value]);
    });

    renders.home();
} )();
