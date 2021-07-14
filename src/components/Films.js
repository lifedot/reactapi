import React, {useState, useEffect} from 'react'
import FilmsCard from './FilmsCard'

const Films = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) => res.json())
        .then(res => setFilms(res))
        .catch((err) => setFilms("Did not work!"))
    })


return (
    <>
    {films.map(film => (<FilmsCard film={film} />))}
    </>
)
}

export default Films