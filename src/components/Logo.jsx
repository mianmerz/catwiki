import { CatWikiLogo } from '../assets/CatwikiLogo'

export const Logo = ({ href = "/", color = "black", width = 128, height = 43,}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <CatWikiLogo fill={color} width={width} height={height} />
        </a>
    )
}
