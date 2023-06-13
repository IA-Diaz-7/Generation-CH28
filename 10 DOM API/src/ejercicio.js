const createDesc = (user) => {
    const user_name = document.createElement('h3');
    const descripcion = document.createElement('p');
    const age = document.createElement('p');
    const bands = document.createElement('ul');
    const img = document.createElement('img');


    user_name.textContent = user.user_name;
    descripcion.textContent = user.desc;
    age.textContent = user.age;
    img.src = IMAGE_URL;


    user.musica_fav.lista.forEach(bandName => {
        const band = document.createElement('li');
        band.textContent = bandName;
        bands.appendChild(band);
    });


    const container = document.createElement('div');
    container.appendChild(img);
    container.appendChild(user_name);
    container.appendChild(descripcion);
    container.appendChild(age);
    container.appendChild(bands);

    return container;
    };

    const containerDiv = document.getElementById('container');

    users.forEach(user => {
    const userDesc = createDesc(user);
    containerDiv.appendChild(userDesc);
    });

