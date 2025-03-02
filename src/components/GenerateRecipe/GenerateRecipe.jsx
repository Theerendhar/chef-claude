import Button from '../Individual/Button';
import './GenerateRecipe.css'

function GenerateRecipe(props) {

    return (
        <section className='generate-recipe'>
            <div className='generate-recipe-text'>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>    
            <Button 
            buttonText='Get a recipe'
            onClick={props.onClick}
            />
            
        </section>
    )
}

export default GenerateRecipe
