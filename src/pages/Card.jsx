import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

const Card = ({ name }) => {

    const { store, dispatch } = useGlobalReducer()

    const { uid } = useParams();
    console.log("Params:", uid);


    useEffect(() => {
        getCharacter()
    }, [uid])

    async function getCharacter() {
        try {
            const response = await fetch(`https://www.swapi.tech/api/people/${uid}`)
            if (!response.ok) {
                throw new Error("Todo salió mal")
            }
            const data = await response.json()
            console.log("async fetch Characters", data);
            dispatch({ type: 'get_people', payload: data.result.properties })
            console.log("Log after dispatch Characters", data.result.properties);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="card mb-3" style={{ width: '540px' }}>
            <div className="row g-0" key={uid}>
                <div className="col-md-4">
                    <img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${uid}.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div >            
        </div>
    )
}

export default Card;