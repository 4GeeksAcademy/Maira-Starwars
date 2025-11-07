import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

const Card = () => {

    const { store, dispatch } = useGlobalReducer()

    const { uid } = useParams();
    console.log("Params:", uid);

    const inferiorStyle = {
        color: "red"
    }

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
            dispatch({ type: 'learn_more_people', payload: data.result })            
            console.log("Log after learn more people", data.result);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="card mb-3" key={uid}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{store.learnMorePeople?.properties?.name}</h5>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
            <hr style={inferiorStyle}/>
            <div className="row text-center" style={inferiorStyle}>
                <div className="col-md-2 col-4"><u>Name</u></div>
                <div className="col-md-2 col-4"><u>Birth Year</u></div>
                <div className="col-md-2 col-4"><u>Gender</u></div>
                <div className="col-md-2 col-4"><u>Height</u></div>
                <div className="col-md-2 col-4"><u>Skin Color</u></div>
                <div className="col-md-2 col-4"><u>Eye Color</u></div>
            </div>
            <div className="row text-center" style={inferiorStyle}>
                <div className="col-md-2 col-4">{store.learnMorePeople?.properties?.name}</div>
                <div className="col-md-2 col-4"></div>
                <div className="col-md-2 col-4"></div>
                <div className="col-md-2 col-4"></div>
                <div className="col-md-2 col-4"></div>
                <div className="col-md-2 col-4"></div>
            </div>              
        </div>
    )
}

export default Card;