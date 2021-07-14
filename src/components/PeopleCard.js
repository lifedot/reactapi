import React from 'react'

const PeopleCard = (props) => {

    return (
        <div className="card">
            <div className="card-header">
                <h2>{props.person.name}</h2>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.person.age}</h5>
                <p className="card-text">{props.person.gender}</p>
                <a href={props.person.url} class="btn btn-primary">Go To API</a>
            </div>
        </div>
    )
}


export default PeopleCard;