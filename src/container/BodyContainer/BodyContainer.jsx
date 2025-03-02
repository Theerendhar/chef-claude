import { useState } from 'react';

import IngredientForm from '../../components/IngredientForm/IngredientForm';
import IngridentList from '../../components/IngredientList/IngredientList';
import GenerateRecipe from '../../components/GenerateRecipe/GenerateRecipe';
import RecipeSection from '../../components/RecipeSection/RecipeSection';

import { getRecipeFromMistral } from '../../huggingFace';
import './BodyContainer.css';

function BodyContainer() {

    const [ingridentArray, setIngridentArray] = useState([]);
    const [recipe, setRecipe] = useState('');

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

    async function getRecipe() {
        
        const response = await getRecipeFromMistral(ingridentArray);
        console.log('AI Response: ', response)
        
        setRecipe(response);
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
                {recipe && <RecipeSection recipe={recipe} />}
            </main>
        </>
    )
}

export default BodyContainer
