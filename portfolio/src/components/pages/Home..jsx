import Button from '../form/Button'
import './Pages.css'

function Home() {
    return (
        <section className="home">
            <div className="conteudo-home">
                <span className='apresentacao'>Olá, meu nome é</span>
                <h1>Rafael Pereira</h1>
                <span className="subtitulo">Desenvolvedor front-end</span>
                <p className="resumo">
                    Im a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, Im focused on building accessible, human-centered products at Upstatement.
                </p>
                <Button text="Venha me conhecer mais!" to="/"/>
                
            </div>
        </section>
    )
}

export default Home
