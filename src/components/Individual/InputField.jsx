
function InputField(props) {

    function inputHandler(){
        let inputElement = document.getElementById('ingredients');
        inputElement.classList.remove('input-error');
    }

    return (
        <>
            <input 
            type='text'
            id='ingredients' 
            name='ingredients' 
            className='ingredients'
            placeholder='e.g. oregano' 
            autoComplete='off'
            onInput={inputHandler}
            />
        </>

    )
}

export default InputField
