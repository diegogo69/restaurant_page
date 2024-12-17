// Dynamic home page generator

const aboutPage = ( function() {

    const contents = {
        // header
        header: "Contáctanos",

        // Info
        info: [
            {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker-outline</title><path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" /></svg>',
                p: 'Más allá de más acá donde doña Juana',
            },

            {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone-outline</title><path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" /></svg>',
                p: '+58 416 555 5555',
            },

            {
                svg: '<svg xmlns="http:}//www.w3.org/2000/svg" viewBox="0 0 24 24"><title>store-clock-outline</title><path d="M18 4H2V2H18V4M17.5 13H16V18L19.61 20.16L20.36 18.94L17.5 17.25V13M24 17C24 20.87 20.87 24 17 24C13.47 24 10.57 21.39 10.08 18H2V12H1V10L2 5H18L19 10V10.29C21.89 11.16 24 13.83 24 17M3.04 10H16.96L16.36 7H3.64L3.04 10M4 16H10V12H4V16M22 17C22 14.24 19.76 12 17 12S12 14.24 12 17 14.24 22 17 22 22 19.76 22 17Z" /></svg>',
                p: 'Lunes a sábado de 6:00am a 4:00pm',
            },
        ],

        form: [
            {
                label: "Nombre",
                el: "input",
                atts: {
                    type: "text",
                    name: "name",
                    id: "name",
                },
            },

            {
                label: "Correo",
                el: "input",
                atts: {
                    type: "email",
                    name: "email",
                    id: "email",
                },
            },

            {
                label: "Mensaje",
                el: "textarea", 
                atts: {
                    name: "msg",
                    id: "msg",
                },
            }
        ],

    };

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

