import { CatWikiLogo } from '../assets/CatwikiLogo'

export const Logo = ({ href = "/", color = "black" }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <CatWikiLogo fill={color} />
        </a>
    )
}
