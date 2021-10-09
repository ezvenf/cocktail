import { react } from "react";


const SideBySide = (title, para) => {
    return <div>
        <div className="row">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <h5>{title}:</h5>
                </li>
                <li className="list-inline-item">
                    <p>{para}</p>
                </li>
            </ul>
        </div>
    </div>
}

const Details = ({ Data }) => {
    // Ingredients
    const ingredients = () => {
        let ingredients = [];
        Object.keys(Data).forEach(key => {
            if (key.includes("strIngredient")) {
                if (Data[key] != null) {
                    ingredients.push(Data[key]);
                }
            }
        });
        return ingredients;
    }

    // Measurements
    const measurements = () => {
        let measurements = [];
        Object.keys(Data).forEach(key => {
            if (key.includes("strMeasure")) {
                if (Data[key] != null) {
                    measurements.push(Data[key]);
                }
            }
        });
        return measurements;
    }

    console.log(Data);
    return <div className="row">
        <div className="col-4">
            <img className="img-fluid shadow rounded" src={Data.strDrinkThumb} alt={Data.strDrink} />
        </div>
        <div className="col-8 text-left card">
            {/* Name and Type */}
            <div className="row">
                <div className="col-6"><h1>{Data.strDrink}</h1></div>
                <div className="col-6"><h3 className="card-text text-center"
                    style={Data.strAlcoholic === "Alcoholic" ? { color: "#F0A500" } : { color: "green" }}>{Data.strAlcoholic}</h3></div>
            </div>

            {/* Category */}
            <ul className="list-inline">
                <li className="list-inline-item">
                    <h5>Category:</h5>
                </li>
                <li className="list-inline-item">
                    <h6>{Data.strCategory}</h6>
                </li>
            </ul>

            {/* Ingredients */}

            {SideBySide("Ingredients", ingredients().join(", "))}

            {/* Measurements */}
            {SideBySide("Measurements", measurements().join(", "))}


            {/* Cocktail Glass */}
            {SideBySide("Glass", Data.strGlass)}


            {/* Instructions */}
            {SideBySide("Instructions", Data.strInstructions)}

        </div>
    </div>


};


export default Details;