
function IngridentList(props) {

    return (
        <section className="ingredient-list-section">
            <h2>Ingredients on hand:</h2>
            <ul id="ingredient-list" className="ingredient-list">
                {
                    props.ingridentList.map((ingredient) => {
                        return <li>{ingredient}</li>
                    })
                }
            </ul>
        </section>

    )
}

export default IngridentList
