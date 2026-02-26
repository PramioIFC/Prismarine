import prismarinelogo from './public/prismaraine.png'
import { useRef } from 'react'

function App() {
  const carouselRef = useRef(null)

  const handleCarouselScroll = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const card = carousel.querySelector('.servicos-card')
    if (!card) return

    const cardWidth = card.offsetWidth
    const gap = 24
    const scrollAmount = (cardWidth + gap) * 3

    const currentScroll = carousel.scrollLeft
    const maxScroll = carousel.scrollWidth - carousel.clientWidth

    if (direction === 'next') {
      // Se chegou no final, volta para o inicio criando efeito infinito
      if (currentScroll + scrollAmount >= maxScroll - 10) {
        carousel.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      } else {
        carousel.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        })
      }
    } else {
      // Se está no inicio, volta para o final criando efeito infinito
      if (currentScroll <= scrollAmount + 10) {
        carousel.scrollTo({
          left: maxScroll,
          behavior: 'smooth'
        })
      } else {
        carousel.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        })
      }
    }
  }

  // Lista original de serviços
  const cards = [
    { icon: '💻', title: 'Consultoria Web', desc: 'Soluções personalizadas para sua presença digital' },
    { icon: '🎨', title: 'Design', desc: 'Interfaces modernas e intuitivas' },
    { icon: '⚙️', title: 'Desenvolvimento', desc: 'Código limpo e eficiente' },
    { icon: '📱', title: 'Aplicativos Mobile', desc: 'Apps responsivos e rápidos' },
    { icon: '🔒', title: 'Segurança', desc: 'Proteção de dados garantida' },
    { icon: '📊', title: 'Analytics', desc: 'Dados para decisões melhores' }
  ]

  // Duplica os cards para criar o loop infinito
  const duplicatedCards = [...cards, ...cards]

  return (
    <div className="layout">
      <header className="header" role="banner">
        <img id="header-logo" src={prismarinelogo} alt="Logo Prismarine" />
        <nav className="header-nav" role="navigation" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#objetivos">Objetivos</a>
          <a href="#servicos">Serviços</a>
          <a href="#equipe">Equipe</a>
          <a href="#sobre">Sobre Nós</a>
        </nav>
      </header>

      <main className="app">
        <div id="inicio" className="section hero">
          {/* <img id="prismarineLogo" src={prismarineLogo} alt="Prismarine" /> */}
          <h1 id="prismarineFrase">
            Seja Livre
            <br />
            como o
            <br />
            Mar
          </h1>
        </div>

        <div id="objetivos" className="section objetivos">
          <h2>Objetivos</h2>
        </div>

        <div id="servicos" className="section servicos">
          <h2>Serviços</h2>

          <div className="servicos-container">
            <div className="carousel">
              <button 
                className="carousel-btn carousel-btn-prev" 
                aria-label="Anterior"
                onClick={() => handleCarouselScroll('prev')}
              >
                ❮
              </button>
              
              <div className="carousel-track" ref={carouselRef}>
                {duplicatedCards.map((card, index) => (
                  <div key={index} className="servicos-card">
                    <div className="card-icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
              
              <button 
                className="carousel-btn carousel-btn-next" 
                aria-label="Próximo"
                onClick={() => handleCarouselScroll('next')}
              >
                ❯
              </button>
            </div>
          </div>
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
