import logo from '../assets/CatwikiLogo.svg'

export const Logo = ({ href = "/", color = "black" }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <img src={logo} className="logo" alt="Catwiki logo" />
        </a>
    )
}
