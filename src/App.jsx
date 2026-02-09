import prismarineLogo from './public/prismarineLogo.png'

function App() {
  return (
    <div className="layout">
      <header className="header">
        <span className="header-logo">Prismarine</span>
        <nav className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#contato">Contato? nao sei</a>
        </nav>
      </header>

      <main className="app">
        <img id="prismarineLogo" src={prismarineLogo} alt="Prismarine" />
        <h1 id="prismarineTitle">Prismarine</h1>
        <p>*isso aqui é o <code>src/App.jsx</code></p>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Prismarine. Juntos pelo prismarino</p>
      </footer>
    </div>
  )
}

export default App
