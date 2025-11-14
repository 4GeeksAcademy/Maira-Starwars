import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

const CardStarships = () => {

    const { store, dispatch } = useGlobalReducer()

    const { uid } = useParams();
    console.log("Params:", uid);

    const inferiorStyle = {
        color: "red"
    }

    useEffect(() => {
        getStarships()
    }, [uid])

    async function getStarships() {
        try {
            const response = await fetch(`https://www.swapi.tech/api/starships/${uid}`)
            if (!response.ok) {
                throw new Error("Todo salió mal")
            }
            const data = await response.json()
            console.log("async fetch Starships", data);
            dispatch({ type: 'learn_more_starships', payload: data.result })            
            console.log("Log after learn more starships", data.result);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="card mb-3" key={uid}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={` https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${uid}.jpg`} className="img-fluid rounded-start" alt="..." onError={(e) => (e.target.src = 'https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg')}  />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{store.learnMoreStarships?.properties?.name}</h5>
                        <p className="card-text">{store.learnMoreStarships?.description}</p>
                    </div>
                </div>
            </div>
            <hr style={inferiorStyle}/>
            <div className="row text-center" style={inferiorStyle}>
                <div className="col-md-2 col-4"><u>Name</u></div>
                <div className="col-md-2 col-4"><u>Consumables</u></div>
                <div className="col-md-2 col-4"><u>Cargo Capacity</u></div>
                <div className="col-md-2 col-4"><u>Max Atmosphering Speed</u></div>
                <div className="col-md-2 col-4"><u>Crew</u></div>
                <div className="col-md-2 col-4"><u>Model</u></div>
            </div>
            <div className="row text-center" style={inferiorStyle}>
                <div className="col-md-2 col-4">{store.learnMoreStarships?.properties?.name}</div>
                <div className="col-md-2 col-4">{store.learnMoreStarships?.properties?.consumables}</div>
                <div className="col-md-2 col-4">{store.learnMoreStarships?.properties?.cargo_capacity}</div>
                <div className="col-md-2 col-4">{store.learnMoreStarships?.properties?.max_atmosphering_speed}</div>
                <div className="col-md-2 col-4">{store.learnMoreStarships?.properties?.crew}</div>
                <div className="col-md-2 col-4">{store.learnMoreStarships?.properties?.model}</div>
            </div>              
        </div>
    )
}

export default CardStarships;