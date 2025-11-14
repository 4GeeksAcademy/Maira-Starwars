import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

const CardPlanets = () => {

    const { store, dispatch } = useGlobalReducer()

    const { uid } = useParams();
    console.log("Params:", uid);

    const inferiorStyle = {
        color: "red"
    }

    useEffect(() => {
        getPlanets()
    }, [uid])

    async function getPlanets() {
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`)
            if (!response.ok) {
                throw new Error("Todo salió mal")
            }
            const data = await response.json()
            console.log("async fetch Planets", data);
            dispatch({ type: 'learn_more_planets', payload: data.result })            
            console.log("Log after learn more planets", data.result);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="card mb-3" key={uid}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${uid}.jpg`} className="img-fluid rounded-start" alt="..." onError={(e) => (e.target.src = 'https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg')}  />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{store.learnMorePlanets?.properties?.name}</h5>
                        <p className="card-text">{store.learnMorePlanets?.description}</p>
                    </div>
                </div>
            </div>
            <hr style={inferiorStyle}/>
            <div className="row text-center" style={inferiorStyle}>
                <div className="col-md-2 col-4"><u>Name</u></div>
                <div className="col-md-2 col-4"><u>Climate</u></div>
                <div className="col-md-2 col-4"><u>Surface Water</u></div>
                <div className="col-md-2 col-4"><u>Diameter</u></div>
                <div className="col-md-2 col-4"><u>Terrain</u></div>
                <div className="col-md-2 col-4"><u>Orbital Period</u></div>
            </div>
            <div className="row text-center" style={inferiorStyle}>
                <div className="col-md-2 col-4">{store.learnMorePlanets?.properties?.name}</div>
                <div className="col-md-2 col-4">{store.learnMorePlanets?.properties?.climate}</div>
                <div className="col-md-2 col-4">{store.learnMorePlanets?.properties?.surface_water}</div>
                <div className="col-md-2 col-4">{store.learnMorePlanets?.properties?.diameter}</div>
                <div className="col-md-2 col-4">{store.learnMorePlanets?.properties?.terrain}</div>
                <div className="col-md-2 col-4">{store.learnMorePlanets?.properties?.orbital_period}</div>
            </div>              
        </div>
    )
}

export default CardPlanets;