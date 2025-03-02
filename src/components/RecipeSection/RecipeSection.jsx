import './RecipeSection.css'
import ReactMarkdown from 'react-markdown'

function RecipeSection(props) {

    return (
        <section className='recipe-section' aria-live="polite">
            <h2>Chef Hugging Face Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}

export default RecipeSection
