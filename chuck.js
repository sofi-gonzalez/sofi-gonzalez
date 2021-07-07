window.onload = function() {
    fetch("https://api.chucknorris.io/jokes/random")

    .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(informacion) {

            var nuevaLinea = informacion.value.replace("Chuck Norris", "Emilio");
            console.log(nuevaLinea)
            document.querySelector(".contenido").innerHTML += "<p>" + nuevaLinea + "</p>";

        })

}