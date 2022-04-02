
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home.'
import Sobre from './components/pages/Sobre'
import Projetos from './components/pages/Projetos'
import LineMidias from './components/layout/LineMidias'
import RepositoriosGit from './components/pages/RepositoriosGit'



function App() {
  return ( 
    <>
    <Header />
    <LineMidias />
    <Home />
    <Sobre />
    <Projetos />
    <RepositoriosGit />
    <Footer />
    </>
  )
}

export default App;