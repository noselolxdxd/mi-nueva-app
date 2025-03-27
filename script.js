document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM completamente cargado y parseado.");

    // Datos de las recetas
    const recetas = [
        {
            nombre: "Ensalada de Quinoa",
            ingredientes: [
                "1 taza de quinoa",
                "1 pepino",
                "Tomates cherry",
                "Aceite de oliva",
                "Jugo de limón",
                "Sal y pimienta"
            ],
            instrucciones: "Cocina la quinoa según las instrucciones del paquete. Deja enfriar y mezcla con los vegetales picados. Agrega aceite de oliva, jugo de limón, sal y pimienta al gusto."
        },
        {
            nombre: "Batido Verde",
            ingredientes: [
                "1 taza de espinacas",
                "1 plátano",
                "1/2 taza de leche de almendra",
                "1 cucharada de miel"
            ],
            instrucciones: "Licúa todos los ingredientes hasta obtener una mezcla suave. Sirve y disfruta."
        },
        {
            nombre: "Tacos de Pescado",
            ingredientes: [
                "Pescado a la parrilla",
                "Tortillas de maíz",
                "Repollo rallado",
                "Salsa de aguacate"
            ],
            instrucciones: "Coloca el pescado en las tortillas, agrega el repollo y la salsa de aguacate. Sirve con una rodaja de limón."
        }
    ];

    // Verificando que el contenedor de recetas esté presente
    const listaRecetas = document.getElementById('recetas');
    if (!listaRecetas) {
        console.error("¡No se encontró el contenedor de recetas!");
        return;
    }

    // Agregando recetas a la lista
    recetas.forEach((receta, index) => {
        const li = document.createElement('li');
        li.textContent = receta.nombre;
        li.addEventListener('click', () => mostrarDetallesReceta(index));
        listaRecetas.appendChild(li);
    });

    console.log("Recetas cargadas correctamente.");

    // Función para mostrar los detalles de la receta
    function mostrarDetallesReceta(index) {
        const receta = recetas[index];
        const detalleDiv = document.getElementById('detalle');
        
        // Verificando si el div de detalles existe
        if (!detalleDiv) {
            console.error("¡No se encontró el contenedor de detalles!");
            return;
        }

        // Generando ingredientes
        const ingredientesHTML = receta.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('');

        // Asegurándonos de que los detalles se muestren correctamente
        detalleDiv.innerHTML = `
            <h3>${receta.nombre}</h3>
            <h4>Ingredientes:</h4>
            <ul>
                ${ingredientesHTML}
            </ul>
            <h4>Instrucciones:</h4>
            <p>${receta.instrucciones}</p>
        `;
        
        console.log("Detalles de la receta mostrados correctamente.");
    }
});

