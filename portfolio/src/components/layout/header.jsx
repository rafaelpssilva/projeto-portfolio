import './Header.css'

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <a className="logo" href="/">Logo</a>
                <ul className="ul-list">
                    <li>Home</li>
                    <li>Sobre mim</li>
                    <li>Projetos</li>
                    <li>Cursos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header 