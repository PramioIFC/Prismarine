import prismarinelogo from './public/prismaraine.png'
import pramioImg from './public/equipe/pramio.png'
import brunoImg from './public/equipe/bruno.png'
import lucasImg from './public/equipe/lucas.png'
import joaoImg from './public/equipe/joao.png'
import nataliaImg from './public/equipe/natalia.png'
import { portfolios } from './portfolios'
import { useRef, useState } from 'react'

function App() {
  const carouselRef = useRef(null)
  const [selectedMember, setSelectedMember] = useState(null)

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

  const teamMembers = [
    { name: 'João Pramio', role: 'Líder', photo: pramioImg },
    { name: 'Bruno Gelain', role: 'Desenvolvedor', photo: brunoImg },
    { name: 'Lucas Weber', role: 'Desenvolvedor', photo: lucasImg },
    { name: 'João Pedro', role: 'Desenvolvedor', photo: joaoImg },
    { name: 'Natália Martins', role: 'Desenvolvedor', photo: nataliaImg }
  ]

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
            <span className="hero-frase-light">Seja Livre</span>
            <br />
            <span className="hero-frase-light">como o</span>
            <br />
            <span className="hero-frase-mar">Mar</span>
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
          <div className="equipe-content">
            <h2>Equipe</h2>
            <p className="equipe-descricao">
              Conheça quem está por trás da Prismarine. Clique em um integrante para ver o portfólio.
            </p>

            <div className="equipe-grid">
              {teamMembers.map((member, index) => (
                <button
                  key={index}
                  type="button"
                  className="equipe-card"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="equipe-avatar">
                    <img src={member.photo} alt={member.name} loading="lazy" />
                  </div>
                  <div className="equipe-info">
                    <p className="equipe-nome">{member.name}</p>
                    <p className="equipe-cargo">{member.role}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div id="sobre" className="section sobre">
          <h2>Sobre Nós</h2>
        </div>

        {selectedMember && (
          <div
            className="portfolio-modal-backdrop"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="portfolio-modal"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-title"
            >
              <button
                type="button"
                className="portfolio-close"
                onClick={() => setSelectedMember(null)}
                aria-label="Fechar portfólio"
              >
                ×
              </button>

              <div className="portfolio-header">
                <div className="portfolio-header-avatar">
                  <img src={selectedMember.photo} alt={selectedMember.name} />
                </div>
                <div>
                  <h2 id="portfolio-title" className="portfolio-header-nome">
                    {selectedMember.name}
                  </h2>
                  <p className="portfolio-header-cargo">
                    {selectedMember.role}
                  </p>
                </div>
              </div>

              <div className="portfolio-body">
                {(() => {
                  const PortfolioComponent = portfolios[selectedMember.name]
                  return PortfolioComponent ? (
                    <PortfolioComponent />
                  ) : (
                    <p>Portfólio em construção.</p>
                  )
                })()}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Prismarine. Juntos pelo prismarino</p>
      </footer>
    </div>
  )
}

export default App
