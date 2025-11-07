import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";

const SmallCard = ({ name, uid, img }) => {

    const navigate = useNavigate()    

    const { store, dispatch } = useGlobalReducer()

    const [like, setLike] = useState(false)
    
    const handleClick = () => {
        navigate(`/people/${uid}`)        
    }

    const handleLike = (e) => {
        console.log(e.target.value);        
        dispatch({type: 'favorite_element', payload: action})
    }

       
    return (
        <div className="card" style={{width: '15rem', height: '28rem'}}>
            <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${uid}.jpg`} className="card-img" alt="..." onError={(e) => (e.target.src = 'https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg')} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                
                <button className="btn btn-outline-primary" onClick={handleClick}>Learn more</button>

                <button className="btn btn-outline-primary position-absolute end-0 me-2"><i className="fa-regular fa-heart"></i></button>

            </div>
        </div>
    )
}

export default SmallCard;