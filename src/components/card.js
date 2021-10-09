import { React } from "react";

const Card = ({ Data }) => {
    console.log(Data.idDrink);

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

    return <div className="card hover">

        <img className="card-img-top"
            src={Data.strDrinkThumb} alt={Data.strDrink} />

        <div className="container">
            <h4 className="card-title"><b>{Data.strDrink}</b></h4>
            <div className="drink-description">
                <p className="card-text" style={Data.strAlcoholic === "Alcoholic" ? { color: "#F0A500" } : { color: "green" }}>{Data.strAlcoholic}</p>
                <h5>Ingredients:</h5>
                <p>
                    {
                        ingredients().join(", ")
                    }
                </p>
            </div>
        </div>

    </div >;
}

export default Card;