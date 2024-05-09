import NavListItem from "./header/NavListItem"

function Header (){
    return(
        <div>
            {/* ainda preciso decidir qual formato certo da header */}
            {/* tera animacao? sera um design simples? tera hovers especiais? */}
            <h1>Vanessa Trajano</h1>
            <nav>
                <ul>
                     {/* fazer links para todos com href e ids */}
                    <NavListItem texto = "Sobre mim"/>
                    <NavListItem texto = "Habilidades"/>
                    <NavListItem texto = "Projetos"/>
                </ul>
            </nav>
        </div>
    )
}

export default Header