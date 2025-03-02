import { useState } from 'react';
import IngredientForm from '../../components/IngredientForm/IngredientForm';
import IngridentList from '../../components/IngredientList/IngredientList';
import GenerateRecipe from '../../components/GenerateRecipe/GenerateRecipe';
import './BodyContainer.css';

function BodyContainer() {

    const [ingridentArray, setIngridentArray] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);

    function addIngrident(formData) {
        const inputElemnt = document.getElementById('ingredients');
        const ingrident = formData.get('ingredients');

        if (ingrident !== "") {
            setIngridentArray((prevIngridentArray) => {
                return [...prevIngridentArray, ingrident];
            })
        }
        else{
            inputElemnt.classList.add('input-error');
        }

    }

    function getRecipe() {
        setRecipeShown(prevState => !prevState);
        console.log(recipeShown);
    }

    return (
        <>
            <main className='section-container'>
                <IngredientForm
                    onSubmit={addIngrident}
                />
                {ingridentArray.length > 0 &&
                    <IngridentList
                        ingridentList={ingridentArray}
                    />
                }
                {ingridentArray.length > 3 &&
                    <GenerateRecipe
                        onClick={getRecipe}
                    />
                }
                {recipeShown && <h1>Recipe Shown</h1>}
            </main>
        </>
    )
}

export default BodyContainer
