import Button from '../form/Button'
import './Home.css'

function Home() {
    return (
        <section className="home">
            <div className="conteudo">
                <span className='apresentacao'>Olá, meu nome é</span>
                <h1>Rafael Pereira</h1>
                <span className="subtitulo">Desenvolvedor front-end</span>
                <p className="sobre">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus voluptatum ratione dolorum excepturi similique eligendi, ea a. Doloremque eius reprehenderit illum nesciunt nulla ullam similique tenetur dolorum veniam delectus.
                </p>
                <Button text="Venha me conhecer mais" to="/"/>
                
            </div>
        </section>
    )
}

export default Home
