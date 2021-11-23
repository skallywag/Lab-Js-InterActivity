const message = document.querySelector('#message')



const addMovie = (e) => {
    e.preventDefault()
    let inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('sp')
    movieTitle.textContent = inputField.value 
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    const movieList = document.querySelector('ul')
    movieList.appendChild(movie)
    inputField.value = ''
}

const form = document.querySelector('form')

form.addEventListener('submit', addMovie)

const deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = 'movie deleted'

}


const crossOffMovie = (e) => {
    e.target.classList.toggle('checked')
    if(e.target.classList.contains('checked')){
        message.textContent = 'movie watched!'
    }else {
        message.textContent = 'movie added back!'
    }
}












