import './Pages.css'

function Sobre() {
    return ( 
        <section className="sobre">
            <div className="conteudo">
                <h2>Sobre mim</h2>
                <p className="descricao">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora accusantium facere minus, ullam officiis harum quas quo possimus dolores soluta. Sapiente dolorem, aperiam doloribus quam perferendis non ratione nulla. 
                </p>
                <p className="descricao">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ad molestias fugiat! Nesciunt, ex soluta. Alias facilis sunt nulla ipsam maxime! Explicabo laudantium eius, aut officia autem nihil reiciendis tempore.
                </p>
                <h3>Tecnologias</h3>
                <ul className="tecnologias-list">
                    <li><span className="seta">ᐅ</span> HTML</li>
                    <li><span className="seta">ᐅ</span> CSS</li>
                    <li><span className="seta">ᐅ</span> JavaScript</li>
                    <li><span className="seta">ᐅ</span> React</li>
                    <li><span className="seta">ᐅ</span> Node</li>
                    <li><span className="seta">ᐅ</span> Python</li>
                </ul>
                <h3>Cursos</h3>
                <ul className="cursos-list">
                    <li><span className="seta">ᐅ</span> Curso em vídeo</li>
                    <li><span className="seta">ᐅ</span> Udemy</li>
                    <li><span className="seta">ᐅ</span> Rocketseat</li>
                    <li><span className="seta">ᐅ</span> Origamid</li>
                </ul>
            </div>
        </section>
    )
}

export default Sobre