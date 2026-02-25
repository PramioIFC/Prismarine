import prismarineLogo from './public/prismarineLogo.png'

function App() {
  return (
    <div className="layout">
      <header className="header">
        <span className="header-logo">Prismarine</span>
        <nav className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#objetivos">Objetivos</a>
          <a href="#servicos">Serviços</a>
          <a href="#equipe">Equipe</a>
          <a href="#sobre">Sobre Nós</a>
        </nav>
      </header>

      <main className="app">
        <div id="inicio" className="section hero">
          <img id="prismarineLogo" src={prismarineLogo} alt="Prismarine" />
          <h1 id="prismarineTitle">Prismarine</h1>
          <h2>Início</h2>
        </div>

        <div id="objetivos" className="section objetivos">
          <h2>Objetivos</h2>
        </div>

        <div id="servicos" className="section servicos">
          <h2>Serviços</h2>
        </div>

        <div id="equipe" className="section equipe">
          <h2>Equipe</h2>
        </div>

        <div id="sobre" className="section sobre">
          <h2>Sobre Nós</h2>
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Prismarine. Juntos pelo prismarino</p>
      </footer>
    </div>
  )
}

export default App
