import React from "react";
import { Link } from "react-router-dom";

const SmallCard = () => {

    return (
        <div className="card">
            <img src="..." className="card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    
                    <Link to={'/card'}>
                        <button className="btn btn-primary">Learn more</button>
                    </Link>

                </div>
        </div>
    )
}

export default SmallCard;