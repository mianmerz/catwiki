import logo from '../assets/CatwikiLogo.svg'

export const Header = () => {
    return (
        <header>
            <div className="container-fluid px-5 py-3">
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={logo} className="logo" alt="Catwiki logo" />
                </a>
            </div>
        </header>
    )
}
