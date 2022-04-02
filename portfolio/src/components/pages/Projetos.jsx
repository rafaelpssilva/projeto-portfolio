import './Pages.css'

import ReactDOM from 'react-dom'


function projeto1() {
    ReactDOM.render(
        <div className='video blue'>

        </div>,
        document.getElementById('box-video')
    )
}

function projeto2() {
    ReactDOM.render(
        <div className='video red'>

        </div>,
        document.getElementById('box-video')
    )
}

function projeto3() {
    ReactDOM.render(
        <div className='video yellow'>

        </div>,
        document.getElementById('box-video')
    )
}

function Projetos() {

   

    return (
        <section className="projetos">
            <h2>Projetos</h2>
            <ul>
                <li onClick={projeto1}>E-commerce</li>
                <li onClick={projeto2}>Calculadora</li>
                <li onClick={projeto3}>Paralax</li>
                <li>Site Android</li>
            </ul>
            <div id="box-video">
                
            </div>
        </section>
    )

}

export default Projetos 