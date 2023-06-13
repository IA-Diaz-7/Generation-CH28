const IMAGE_URL = 'https://placehold.co/200';

const IMAGE_CONTAINER = document.querySelector('.img-container');
const INFO_CONTAINER = document.querySelector('.info-container');

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const createDescription = user => {
    const user_name = document.createElement('h3');
    const description = document.createElement('p');
    const age = document.createElement('p');
    const bands = document.createElement('ul');
}


users.forEach(user => {
    console.log(user);
    // createDescription(user);
    // populateDescription(user);
    // renderDescription(user);
})

// Creamos imagen
const image = document.createElement('img');
image.src = IMAGE_URL;
image.alt = 'User Photo';



// Crear descripcion


// Iteramos en el array de bandas
// Por cada item, creamos una etiqueta ul
// Le agregamos el texto del item
const bandList = USER.fav_music.bands.map(e => {
    const item = document.createElement('ul');
    item.textContent = e;
    return item;
});


// Poblamos elementos
user_name.textContent = USER.user_name;
description.textContent = USER.description;
age.textContent = USER.age;
bands.textContent = USER.fav_music.bands;


// Renderizamos elementos
IMAGE_CONTAINER.appendChild(image);
INFO_CONTAINER.append(user_name, description, age, ...bandList);