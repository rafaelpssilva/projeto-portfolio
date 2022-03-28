import './Sobre.css'

function Sobre() {
    return ( 
        <section className="sobre">
            <div className="conteudo">
                <h2>Eu sou Rafael Pereira</h2>
                <p className="descricao">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora accusantium facere minus, ullam officiis harum quas quo possimus dolores soluta. Sapiente dolorem, aperiam doloribus quam perferendis non ratione nulla. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ad molestias fugiat! Nesciunt, ex soluta. Alias facilis sunt nulla ipsam maxime! Explicabo laudantium eius, aut officia autem nihil reiciendis tempore. 
                </p>
                <h3>Tecnologias</h3>
                <ul className="tecnologias-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Python</li>
                </ul>
                <h3>Cursos</h3>
                <ul className="cursos-list">
                    <li>Curso em vídeo</li>
                    <li>Udemy</li>
                    <li>Rocketseat</li>
                    <li>Origamid</li>
                </ul>
            </div>
        </section>
    )
}

export default Sobre