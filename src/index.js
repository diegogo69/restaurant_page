// Import css for webpack to bundle it in dist index.html
import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js"
import { aboutPage } from "./about.js"

const log = console.log;
log("hello world")


const main = document.querySelector('#content');

function renderMain(node) {
    main.appendChild(node);
}

function clearMain() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
}

// renderMain(homePage.createContentDiv());
// renderMain(menuPage.createContentDiv());
renderMain(aboutPage.createContentDiv());
