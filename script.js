let baseurl = "https://api.themoviedb.org/3/search/movie";
let apiKey = "c48e1378bf318426fb794697d2172364";

document.getElementById("searchButton").addEventListener("click", async () => {
  let valor = document.getElementById("searchInput").value;
  let data = await fetch(`${baseurl}?api_key=${apiKey}&query=${valor}&language=es-ES`);
  let response = await data.json();
  mostrarPelicula(response);
});

let mostrarPelicula = (response) =>{
    document.getElementById("results").innerHTML = ""; // Limpiar resultados anteriores
    if (response.results.length === 0) {
        document.getElementById("results").innerHTML = "<span>No se encontraron resultados.</span>";
        return;
    }

    let arrayPeliculas = response.results;
    arrayPeliculas.forEach(element => {
        let div = document.createElement("div");
        div.className = "pelicula";
        div.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}">
            <h3>${element.title}</h3>
            <p>Sinopsis: ${element.overview}</p>
            <p>Fecha de lanzamiento: ${element.release_date}</p>
            <p>Calificación: ${element.vote_average}</p>
        `;
        document.getElementById("results").appendChild(div);
    });
}
