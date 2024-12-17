// Dynamic home page generator
import { home as contents } from "./contents.js"

const homePage = ( function() {

    const createNode = {
        // div .home

        hero() {
            
            // div .hero-section
            const heroSection = document.createElement('div');
            heroSection.classList.add('hero-section');
            
            // h1: Arepita's corner
            const h1 = document.createElement('h1');
            h1.textContent = contents.hero.h1;
            
            // p: Lo mejor del sazón criollito
            const p = document.createElement('p');
            p.textContent = contents.hero.p;

            heroSection.appendChild(h1);
            heroSection.appendChild(p);

            return heroSection;
        },

        info() {
            // div .info-section
            const infoSection = document.createElement('div');
            infoSection.classList.add('info-section');

            for (let el of contents.info) {
                // div .info-el
                const infoEl = document.createElement('div');
                infoEl.classList.add('info-el');

                // svg
                const svgDiv = document.createElement('div');
                svgDiv.innerHTML = el.svg;
                
                // h2
                const h2 = document.createElement('h2');
                h2.textContent = el.h2;

                // p
                const p = document.createElement('p');
                p.textContent = el.p;

                infoEl.appendChild(svgDiv);
                infoEl.appendChild(h2);
                infoEl.appendChild(p);

                infoSection.appendChild(infoEl);
            }

            return infoSection;
        },
    };

    function createContentDiv() {
        const content = document.createElement('div');
        content.classList.add('home')

        const hero = createNode.hero();
        const info = createNode.info();

        content.appendChild(hero);
        content.appendChild(info);

        return content;
    }

    return { createContentDiv }
})();

export { homePage }