// Dynamic home page generator
import { about as contents } from "./contents.js"

const aboutPage = ( function() {

    const createNode = {
        header() {
            const h1 = document.createElement('h1');
            h1.textContent = contents.header;

            return h1;
        },

        info() {

            // ul
            const ul = document.createElement('ul');

            for (let el of contents.info) {
                // li
                const li = document.createElement('li');

                // svg
                const svgDiv = document.createElement('div');
                svgDiv.innerHTML = el.svg;
                
                // text
                const p = document.createElement('p');
                p.textContent = el.p;

                li.appendChild(svgDiv);
                li.appendChild(p);

                ul.appendChild(li);
            }

            return ul;
        },

        form() {
            const form = document.createElement('form');

            for (let widget of contents.form) {
                const wrapper = document.createElement('div');
                wrapper.classList.add('inputWrapper');

                // Form control label
                const label = document.createElement('label');
                label.textContent = `${widget.label}:`;
                
                // Create form control el and add attributes
                const el = document.createElement(`${widget.el}`);
                for (let att in widget.atts) {
                    el.setAttribute(att, widget.atts[att])
                }

                wrapper.appendChild(label);
                wrapper.appendChild(el);

                form.appendChild(wrapper);
            }

            const submitBtn = document.createElement('button');
            submitBtn.textContent = "Enviar mensaje"

            form.appendChild(submitBtn);

            return form;
        },
    };

    function createContentDiv() {
        const about = document.createElement('div');
        about.classList.add('about');

        const header = createNode.header();
        const info = createNode.info();
        const form = createNode.form();

        about.append(header, info, form);

        return about;
    }

    return { createContentDiv };

} )();

export { aboutPage }

