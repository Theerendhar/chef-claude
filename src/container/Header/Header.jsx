
import CHEF_CLAUDE_ICON from '/src/assets/Claude-Icon.png'
import './Header.css'

function Header() {

    return (
        <>
            <header className='header'>
                <img src={CHEF_CLAUDE_ICON} alt='Chef Logo' />
                <h1>Chef Claude</h1>
            </header>
        </>
    )
}

export default Header
