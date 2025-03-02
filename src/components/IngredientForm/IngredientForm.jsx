import Button from '../Individual/Button';
import InputField from '../Individual/InputField';
import './IngredientForm.css';

function IngredientForm(props) {

    return (
        <>
            <form action={props.onSubmit} className='ingrident-form'>
                <InputField />
                <Button
                    buttonText='Add ingredient'
                    buttonType='submit'
                />
            </form>
        </>
    )
}

export default IngredientForm
