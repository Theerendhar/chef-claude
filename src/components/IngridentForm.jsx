import Button from "./Button";
import InputField from "./InputField.JSX";

function IngredientForm(props) {

    return (
        <>
            <form action={props.onSubmit} className="ingrident-form">
                <InputField />
                <Button
                    buttonText="Add ingredient"
                    buttonType="submit"
                />
            </form>
        </>
    )
}

export default IngredientForm
