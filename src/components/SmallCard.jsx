import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";
import { useParams } from "react-router-dom";



const SmallCard = ({ name, uid }) => {

    const navigate = useNavigate()    

    const { store, dispatch } = useGlobalReducer()
    
    const handleClick = () => {
        navigate(`/people/${uid}`)        
    }

    // const name = e.target.name
    //     const birthYear = e.target.birth_year
    //     const gender = e.target.gender
    //     const height = e.target.height
    //     const skinColor = e.target.skin_color
    //     const eyeColor = e.target.eye_color

    

    return (
        <div className="card">
            <img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${uid}.jpg" className="card-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>


                <button className="btn btn-outline-primary" onClick={handleClick}>Learn more</button>

                <button className="btn btn-outline-primary position-absolute end-0 me-2"><i className="fa-regular fa-heart"></i></button>

            </div>
        </div>
    )
}

export default SmallCard;