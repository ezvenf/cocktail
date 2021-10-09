import { React, useState } from "react";
import Card from "./card";
import Details from "./detail";


const Grid = ({ Data }) => {
    const [showDrink, setShowDrink] = useState('');
    return <div className="container">
        <div className="row">
            {showDrink ? <Details Data={showDrink} /> :
                Data.map((drink) => {
                    return <div className="col-6 col-sm-4 col-lg-3" key={drink.idDrink}>

                        <a href="#" className="card-address" onClick={() => setShowDrink(drink)}>
                            <Card Data={drink} />
                        </a>

                    </div>
                })
            }

        </div>
    </div>
}

export default Grid;