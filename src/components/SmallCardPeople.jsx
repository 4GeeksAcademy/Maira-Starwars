import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";


const SmallCardPeople = ({ name, uid, image, index }) => {

    const navigate = useNavigate()

    const { store, dispatch } = useGlobalReducer()


    const [heart, setHeart] = useState('white');
    const [isLike, setIsLike] = useState(false)
    const lista = store.favorite

    const handleClickHeart = () => {
        const exists = lista.some((item) => item.uid === uid)
        // if (heart === 'white') {
        //     setHeart('red')
        //     if (exists === false) {
        //         dispatch({ type: 'favorite_element', payload: name })
        //     } else {
        //         alert("It's already your favorite!")
        //     }
        //     setIsLike(true)
        //     console.log("primera condición", isLike);
        // } else {
        //     setHeart('white')
        //     if (exists === true) {
        //         dispatch({ type: 'eliminar_favs', payload: index })
        //     }
        //     setIsLike(false)
        //     console.log("segunda condición", isLike);
        // }
        if(!exists) {
            dispatch({ type: 'favorite_element', payload: {name, uid} })
        } else {
            if( heart === 'red') {
            dispatch({ type: 'eliminar_favs', payload: uid })
            }
        }
    };

    const handleClick = () => {
        navigate(`/people/${uid}`)
    }

    return (
        <div className="card" style={{ width: '15rem', height: '25rem' }}>
            <img src={image} className="card-img" alt="..." onError={(e) => (e.target.src = 'https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg')} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <button className="btn btn-outline-primary position-absolute bottom-0" onClick={handleClick}>Learn more</button>

                <button className="btn btn-outline-primary position-absolute bottom-0 end-0 me-2 " style={{ background: heart }} onClick={() => handleClickHeart(uid)}><i className={` fa-regular fa-heart ? 'red' : 'white' `}></i></button>

            </div>
        </div>
    )
}

export default SmallCardPeople;