import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";

const SmallCardStarships = ({ name, uid, image, index }) => {

    const navigate = useNavigate()
    
        const { store, dispatch } = useGlobalReducer()

        
        const [heart, setHeart] = useState('white');
        const [isLike, setIsLike] = useState(false)
    
        const handleClickHeart = (index) => {  
            if (heart === 'white') {           
                setHeart('red')
                setIsLike(true)
                dispatch({ type: 'favorite_element', payload: name })
                console.log("primera condición", isLike);                    
            } else {           
                setHeart('white')
                setIsLike(false)
                dispatch({ type: 'eliminar_favs', payload: index })
                console.log("segunda condición", isLike);            
            }
        };
    
        const handleClick = () => {          
            navigate(`/starships/${uid}`)
        }

    return (
        <div className="card" style={{ width: '15rem', height: '25rem' }}>
            <img src={image} className="card-img" alt="..." onError={(e) => (e.target.src = 'https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg')} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <button className="btn btn-outline-primary position-absolute bottom-0" onClick={handleClick}>Learn more</button>

                <button className="btn btn-outline-primary position-absolute bottom-0 end-0 me-2" style={{ background: heart }} onClick={()=>handleClickHeart(index)}><i className="fa-regular fa-heart"></i></button>

            </div>
        </div>
    )
}

export default SmallCardStarships;