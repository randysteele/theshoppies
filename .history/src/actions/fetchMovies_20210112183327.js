export function fetchMovies(){
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bc20ec47")
    .then(response => response.json())
    

}