import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


const SmallCardStarships = ({ name, uid, image }) => {

    const navigate = useNavigate()

    const { store, dispatch } = useGlobalReducer()

    const lista = store.favorite

    const handleClickHeart = () => {
        const exists = lista.some((item) => item.uid === uid)
        if (!exists) {
            dispatch({ type: 'favorite_element', payload: { name, uid, category: 'starships' } })
        } else {
            dispatch({ type: 'eliminar_favs', payload: {uid, category: 'starships'} })
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

                <button className="btn btn-outline-warning position-absolute bottom-0" 
                onClick={handleClick}>Learn more</button>

                <button className="btn btn-outline-warning position-absolute bottom-0 end-0 me-2"
                    onClick={handleClickHeart}>
                        <i className={`fa-heart ${lista.some
                        (item => item.uid === uid && item.category === 'starships')
                             ? 'fa-solid text-danger' : 'fa-regular'} `}></i>
                </button>
            </div>
        </div>
    )
}

export default SmallCardStarships;