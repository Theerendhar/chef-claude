
function Button(props) {

    return (
        <>
            <button  type={props.buttonType}>
                {props.buttonText}
            </button>
        </>

    )
}

export default Button
