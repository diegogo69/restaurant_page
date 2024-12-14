// Dynamic menu page generator

const menuPage = ( function() {

    // Page text contents
    const contents = {

        // Plates section
        plates: {
            h2: "Servicios",
            items: [
                {
                    h3: "Arepas",
                    p: "Full rellenas",
                    span: "1$",
                },
                
                {
                    h3: "Hallacas",
                    p: "Caraotas con carne",
                    span: "1$",
                },

                {
                    h3: "Empanadas",
                    p: "Queso, carne y pabellón",
                    span: "1$",
                },

                {
                    h3: "Tequeños",
                    p: "Tequeños full queso",
                    span: "1$",
                },

                {
                    h3: "Cachapas",
                    p: "Full queso de mano y jamón",
                    span: "1$",
                },

                {
                    h3: "Tajadas",
                    p: "Servicio de tajadas full queso",
                    span: "1$",
                },

                {
                    h3: "Patacón",
                    p: "Full relleno",
                    span: "1$",
                }
            ],
        },

        // Drinks section
        drinks: {
            h2: "Bebidas",
            items: [
                {
                    h3: "Malta",
                    p: "Maltín polar bien fría",
                    span: "1$",
                },
                
                {
                    h3: "Papelón",
                    p: "Jugo de papelón con limón",
                    span: "1$",
                },

                {
                    h3: "Parchita",
                    p: "Jugo de parchita",
                    span: "1$",
                },

                {
                    h3: "Guayaba",
                    p: "Jugo de guayaba",
                    span: "1$",
                },

                {
                    h3: "Refresco",
                    p: "Pepsi, coca-cola, chinotto, manzana, naranja o frescolita",
                    span: "1$",
                },

                {
                    h3: "Chicha",
                    p: "Chicha de arroz bien fría",
                    span: "1$",
                },
            ],
        },
    };


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