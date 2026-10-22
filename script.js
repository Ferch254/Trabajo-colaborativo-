const colores = ["green", "blue", "red"];

function colorAleatorio() {//Math.random da un número entre 0 y 1; al multiplicarlo
    //por 3 y redondear hacia abajo con Math.floor obtienes 0,1,2
    const i = Math.floor(Math.random()*colores.length);
    return colores[i];
}

const titulos = document.querySelectorAll("h5");//agarra todos los h5 de la página, 
            // y cada uno se le agrega un evento click

//For each para recorrer a todos los elementos de la lista
titulos.forEach(function (h5) { h5.addEventListener("click", function () {
        h5.style.color = colorAleatorio();
    });
});