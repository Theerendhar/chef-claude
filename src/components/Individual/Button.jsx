
function Button(props) {

    return (
        <>
            <button  
                type={props.buttonType}
                onClick={props.onClick}
            >
                {props.buttonText}
            </button>
        </>

    )
}

export default Button
