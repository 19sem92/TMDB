import $ from "jquery";
import movieCard from "../movie-card";
import moviesService from '../../movies-service'
import modal from '../modal'

let moviesList = []
const moviesWrapper = $('.movies-list')

const findMovieById = (movies, id) => movies.find(movie => movie.id === parseInt(id))

moviesWrapper.on('click', e => {
  const movieCardId = $(e.target).closest('.movie-card').attr('data-id')
  modal.open(findMovieById(moviesList, movieCardId))
})

const drawToDom = element => {
  moviesWrapper.html('')
  moviesWrapper.append(element)
}

const generateMoviesList = data => data.map(data => movieCard(data))

const init = async () => {
  moviesService.getLocalMovies()
      .then(data => {
          moviesList = data
          drawToDom(generateMoviesList(moviesList))
      })
}

export default {
  init
}