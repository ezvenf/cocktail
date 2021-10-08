import { React } from "react";
import Card from "./card";


const Grid = ({ Data }) => {
    return <div className="container">
        <div className="row">
            {
                Data.map((drink) => {
                    return <div className="col-6 col-sm-4 col-lg-3" key={drink.idDrink}>
                        <a href="#" className="card-address">
                            <Card Data={drink} />
                        </a>

                    </div>
                })
            }

        </div>
    </div>
}

export default Grid;