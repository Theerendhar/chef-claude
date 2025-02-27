import { useState } from "react";
import IngredientForm from "./IngridentForm";
import IngridentList from "./IngridentList";
import GenerateRecipe from "./GenerateRecipe";

function BodyContainer() {

    const [ingridentArray, setIngridentArray] = useState([]);

    // function clickHandler() {
    //     let inputElement = document.getElementById("ingredients");
    //     let inputText = inputElement.value;

    //     if (inputText !== "") {

    //         setIngridentArray([...ingridentArray, inputText]);
    //         inputElement.value = "";
    //     }
    //     else {
    //         inputElement.classList.add("input-error");
    //     }
    // }

    // function onKeyDown(event) {
    //     if (event.key === "Enter") {
    //         event.preventDefault();
    //         clickHandler();
    //     }
    // }

    function addIngrident(formData){
        const ingrident = formData.get("ingredients");
        setIngridentArray((prevIngridentArray) => {
            return [...prevIngridentArray, ingrident];
        })

    }

    return (
        <>
            <main className="section-container">
                <IngredientForm
                    onSubmit={addIngrident}
                />
                {ingridentArray.length > 0 &&
                    <IngridentList
                        ingridentList={ingridentArray}
                    />
                }
                {ingridentArray.length > 3 && <GenerateRecipe />}
            </main>
        </>
    )
}

export default BodyContainer
