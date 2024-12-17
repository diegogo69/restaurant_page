// Dynamic menu page generator
import { menu as contents } from "./contents.js"

const menuPage = ( function() {

    // Create ul list of items
    function createUl(items) {
        const ul = document.createElement('ul');

        for (let item of items) {
            const li = document.createElement('li');

            for (let data in item) {
                const dataEl = document.createElement(`${data}`);
                dataEl.textContent = item[data]

                li.appendChild(dataEl)
            }

            ul.appendChild(li);
        }

        return ul;
    };

    // Create .menu node
    function createContentDiv() {
        const content = document.createElement('div');
        content.classList.add('menu');

        for (let section in contents) {
            const h2 = document.createElement('h2');
            h2.textContent = contents[section].h2;

            const ul = createUl(contents[section].items);

            content.appendChild(h2);
            content.appendChild(ul);
        }

        return content;
    }

    return { createContentDiv }

} )();

export { menuPage }