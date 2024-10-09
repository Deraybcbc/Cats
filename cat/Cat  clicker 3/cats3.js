let data = {
    catActive: 0,
    gatos: [
        { name: "Garfield", imagen: "https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg", nclicks: 0 },
        { name: "Geronimo", imagen: "https://www.purina.es/sites/default/files/2021-12/Temperatura%20corporal%20de%20los%20gatos_teaser_0.jpg", nclicks: 0 },
        { name: "Gary", imagen: "https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg", nclicks: 0 },
        { name: "Coco", imagen: "https://media.es.wired.com/photos/657cb5b81e17b099f8f9e15c/16:9/w_3008,h_1692,c_limit/gatos%20172050389.jpg", nclicks: 0 },
        { name: "Paco", imagen: "https://www.clinicaolivar.es/wp-content/uploads/2023/02/Toxoplasmosis-en-gatos-en-qu%C3%A9-consiste-y-c%C3%B3mo-prevenir-su-contagio-para-Cl%C3%ADnica-El-Olivar.jpg", nclicks: 0 }
    ]
}

// Obtenemos el contenedor donde añadiremos la lista
const listContainer = document.getElementById('infoGatos');
const DetallContainer = document.getElementById('detalleGato');

function getGatos() {

    // Creamos un elemento de lista desordenada <ul>
    const ul = document.createElement('ul');

    for (let i = 0; i < data.gatos.length; i++) {
        //console.log(data.gatos[i].imagen);
        // Creamos un elemento <li> para cada gato
        const li = document.createElement('li');
        li.textContent = data.gatos[i].name;

        // Añadimos evento click a cada <li>
        li.addEventListener('click', function () {
            //data.catActive = i; // Actualizamos catActive
            mostrarDetalleGato(i); // Llamamos a la función para mostrar los detalles del gato
        });

        // Añadimos el <li> a la lista <ul>
        ul.appendChild(li);
    }
    // Agregamos la lista <ul> al contenedor
    listContainer.appendChild(ul);
    return data.gatos
}

function mostrarDetalleGato(indice) {

    // Limpiamos el contenido previo de DetallContainer
    DetallContainer.innerHTML = '';
    const gato = data.gatos[indice];

    const img = document.createElement('img');
    img.src = gato.imagen;
    img.alt = gato.name;

    const p = document.createElement('p');
    p.textContent = gato.name;

    const p2 = document.createElement('p');
    p2.textContent = gato.nclicks;

    img.addEventListener('click', function () {
        clickGato(indice, p2);
    });

    DetallContainer.appendChild(img);
    DetallContainer.appendChild(p);
    DetallContainer.appendChild(p2);

}

function clickGato(indice, p2) {
    data.gatos[indice].nclicks++
    p2.textContent = data.gatos[indice].nclicks;
    console.log("Gato: " + data.gatos[indice].name, "Click: " + data.gatos[indice].nclicks);
}

getGatos();