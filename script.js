const searchForm = document.querySelector('form')
const movieContainer = document.querySelector('.movie-container')
const inputBox = document.querySelector('.inputBox')
// Function to fetch movie details using OMDB API
const getMovieInfo = async (movie) => {
  const myAPIKey = 'd0a35f38'
  const url = `http://www.omdbapi.com/?apikey=${myAPIKey}&t=${inputBox.value}`
  const response = await fetch(url)
  const data = await response.json()
  showMovieData(data)
  console.log(data)
}
const showMovieData = (data) => {
  movieContainer.innerHTML = ''
  // Use Destructureing
  const {
    Title,
    imdbRating,
    Genre,
    Released,
    Runtime,
    Actor,
    Plot,
    Poster,
  } = data
  const movieElement = document.createElement('div')
  movieElement.innerHTML = `<h2>${Title}</h2>
                         <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`
  const movieGenreElement = document.createElement('div')
  movieGenreElement.classList.add('movie-genre')
  Genre?.split(',').forEach((element) => {
    const p = document.createElement('p')
    p.innerText = element
    movieGenreElement.appendChild(p)
  })
  movieElement.appendChild(movieGenreElement)
  movieElement.innerHTML += `<p><strong>Released Date:</strong>${imdbRating}</p>
                          <p><strong>Duration: </strong>${Runtime}</p>
                          <p><strong>Cast: </strong>${Actor}</p>
                          <p><strong>Plot: </strong>${Plot}</p>`

  movieContainer.appendChild(movieElement)
}
// Adding Eventlistener to search form
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const movieName = inputBox.Value
  if (movieName !== '') {
    getMovieInfo(movieName)
  }
})
