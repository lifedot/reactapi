import React from 'react'

const FilmsCard = (props) => {


    return (
        <>
        <div className="card mx-5 my-2 shadow">
  <div className="card-header">
    <h2>{props.film.title}</h2>
  </div>
  <div className="card-body">
  
    <p className="card-text">{props.film.description}</p>
    <p>{props.film.release_date}</p>
    <a href={props.film.url} class="btn btn-primary">Go To API</a>
  </div>
</div>
        </>
    )

}


export default FilmsCard;