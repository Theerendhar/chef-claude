
import Hugging_Face_Icon from '/src/assets/Hugging-Face-Icon.png'
import './Header.css'

function Header() {

    return (
        <>
            <header className='header'>
                <img src={Hugging_Face_Icon} alt='Chef Logo' />
                <h1>Chef Hugging Face</h1>
            </header>
        </>
    )
}

export default Header
