import prismarinelogo from './public/prismaraine.png'
import pramioImg from './public/equipe/pramio.png'
import brunoImg from './public/equipe/bruno.png'
import lucasImg from './public/equipe/lucas.png'
import joaoImg from './public/equipe/joao.png'
import nataliaImg from './public/equipe/natalia.png'
import consultoriaIcon from './public/equipe/servicosicon/Consultoria Web.png'
import designIcon from './public/equipe/servicosicon/Design.png'
import desenvolviIcon from './public/equipe/servicosicon/Desenvolvimento.png'
import mobileIcon from './public/equipe/servicosicon/Aplicativos Mobile.png'
import segurancaIcon from './public/equipe/servicosicon/Segurança.png'
import analyticsIcon from './public/equipe/servicosicon/Analytics.png'
import marketingIcon from './public/equipe/servicosicon/Marketing Digital.png'
import suporteIcon from './public/equipe/servicosicon/Suporte 247.png'
import { portfolios } from './portfolios'
import { useState } from 'react'

function App() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { icon: consultoriaIcon, title: 'Consultoria Web', desc: 'Soluções personalizadas para sua presença digital' },
    { icon: designIcon, title: 'Design', desc: 'Interfaces modernas e intuitivas' },
    { icon: desenvolviIcon, title: 'Desenvolvimento', desc: 'Código limpo e eficiente' },
    { icon: mobileIcon, title: 'Responsividade', desc: 'Apps responsivos e rápidos' },
    { icon: segurancaIcon, title: 'Segurança', desc: 'Proteção de dados garantida' },
    { icon: analyticsIcon, title: 'Analytics', desc: 'Dados para decisões melhores' },
    { icon: marketingIcon, title: 'Marketing Digital', desc: 'Campanhas eficazes e SEO' },
    { icon: suporteIcon, title: 'Suporte', desc: 'Atendimento para sua empresa' }
  ]

  const teamMembers = [
    { name: 'João Pramio', role: 'Gerente', photo: pramioImg },
    { name: 'Bruno Gelain', role: 'Desenvolvedor', photo: brunoImg },
    { name: 'Lucas Weber', role: 'Desenvolvedor', photo: lucasImg },
    { name: 'João Pedro', role: 'Desenvolvedor', photo: joaoImg },
    { name: 'Natália Martins', role: 'Desenvolvedor', photo: nataliaImg }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validação básica
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      // Aqui você pode adicionar lógica real de envio de e-mail
      console.log('Formulário enviado:', formData)
      setIsSubmitted(true)
    }
  }

  const handleNewMessage = () => {
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitted(false)
  }

  return (
    <div className="layout">
      <header className="header" role="banner">
        <img id="header-logo" src={prismarinelogo} alt="Logo Prismarine" />

        <button
          className="header-toggle"
          aria-label={mobileNavOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((v) => !v)}
          type="button"
        >
          <span aria-hidden="true" className="header-toggle-icon">{mobileNavOpen ? '✕' : '☰'}</span>
        </button>

        <nav className={`header-nav ${mobileNavOpen ? 'open' : ''}`} role="navigation" aria-label="Navegação principal">
          <a href="#inicio" onClick={() => setMobileNavOpen(false)}>Início</a>
          <a href="#objetivos" onClick={() => setMobileNavOpen(false)}>Objetivos</a>
          <a href="#servicos" onClick={() => setMobileNavOpen(false)}>Serviços</a>
          <a href="#flux" onClick={() => setMobileNavOpen(false)}>Flux</a>
          <a href="#equipe" onClick={() => setMobileNavOpen(false)}>Equipe</a>
          <a href="#sobre" onClick={() => setMobileNavOpen(false)}>Sobre Nós</a>
          <a href="#contato" onClick={() => setMobileNavOpen(false)}>Contato</a>
        </nav>
      </header>

      <main className="app">
        <div id="inicio" className="section hero">
          {/* <img id="prismarineLogo" src={prismarineLogo} alt="Prismarine" /> */}
          <h1 id="prismarineFrase">
            <span className="hero-frase-light">Siga o</span>
            <br />
            <span className="hero-frase-light">seu próprio</span>
            <br />
            <span className="hero-frase-mar">Fluxo</span>
          </h1>
        </div>

        <div id="objetivos" className="section objetivos">
          <div className="objetivos-content" style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2.4rem' }}>
              Objetivos
            </h2>
            <span
              className="section-subtitle"
              style={{ textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.95rem' }}
            >
              ONDE QUEREMOS CHEGAR COMO EMPRESA
            </span>

            <p
              className="objetivos-intro"
              style={{
                fontSize: '1.1rem',
                maxWidth: '720px',
                margin: '1.5rem auto 2rem'
              }}
            >
              Nosso objetivo é ser referência em tecnologia para música: unindo um aplicativo próprio de
              streaming, uma loja de produtos de áudio e serviços especializados para quem vive de som.
            </p>

            <div
              className="objetivos-grid servicos-grid"
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                gap: '1.75rem'
              }}
            >
              <div className="objetivo-card servico-card">
                <div
                  className="objetivo-etiqueta"
                  style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}
                >
                  FOCO NA EXPERIÊNCIA
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>Navagação simples e intuitiva</h3>
                <p style={{ fontSize: '1rem' }}>
                  Criar uma experiência leve e agradável para descobrir músicas, montar playlists e encontrar
                  equipamentos de áudio.
                </p>
              </div>

              <div className="objetivo-card servico-card">
                <div
                  className="objetivo-etiqueta"
                  style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}
                >
                  RESULTADO PARA O CLIENTE
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>Valor em cada solução</h3>
                <p style={{ fontSize: '1rem' }}>
                  Entregar soluções que realmente façam diferença no dia a dia: software de streaming, venda de
                  caixas de som e equipamentos de áudio, além de serviços a parte.
                </p>
              </div>

              <div className="objetivo-card servico-card">
                <div
                  className="objetivo-etiqueta"
                  style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}
                >
                  CONFIANÇA E PARCERIA
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>Relacionamento de longo prazo</h3>
                <p style={{ fontSize: '1rem' }}>
                  Construir uma relação sólida, transparente e próxima, acompanhando a evolução de artistas,
                  produtores, instituições e empresas que confiam na Prismarine.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="flux" className="section flux-showcase" role="region" aria-labelledby="flux-title">
          {/* Background decorativo com ondas sonoras */}
          <div className="flux-bg-decoration" aria-hidden="true">
            <svg className="sound-waves" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M0,200 Q250,100 500,200 T1000,200" stroke="url(#waveGradient)" strokeWidth="2" fill="none" />
              <path d="M0,240 Q250,140 500,240 T1000,240" stroke="url(#waveGradient)" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M0,160 Q250,60 500,160 T1000,160" stroke="url(#waveGradient)" strokeWidth="2" fill="none" opacity="0.5" />
            </svg>
          </div>

          <div className="flux-container">
            {/* Header Section */}
            <div className="flux-header">
              <h2 id="flux-title" className="flux-title">
                <span className="flux-name-primary">Flux</span>
                <span className="flux-subtitle">Revolucione sua experiência com áudio</span>
              </h2>
              <p className="flux-description">
                A plataforma definitiva para quem vive de som. Streaming inteligente, descoberta 
                personalizada e integração perfeita com seus dispositivos.
              </p>
            </div>

            {/* Bento Box Grid */}
            <div className="flux-grid">
              {/* Main Feature Card - Large */}
              <div className="flux-card flux-card-large glass-effect">
                <div className="flux-card-glow"></div>
                <div className="flux-card-content">
                  <div className="feature-icon music-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18V5l12-2v13M9 9h12M6 18h.01" />
                    </svg>
                  </div>
                  <h3>Música Sob Demanda</h3>
                  <p>Milhares de faixas, retiradas por api</p>
                </div>
              </div>

              {/* Feature Cards - Medium */}
              <div className="flux-card flux-card-medium glass-effect">
                <div className="flux-card-glow"></div>
                <div className="flux-card-content">
                  <div className="feature-icon podcast-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1" />
                    </svg>
                  </div>
                  <h3>Podcasts</h3>
                  <p>Conteúdo de qualidade</p>
                </div>
              </div>

              <div className="flux-card flux-card-medium glass-effect">
                <div className="flux-card-glow"></div>
                <div className="flux-card-content">
                  <div className="feature-icon personalization-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                  </div>
                  <h3>Recomendações personalizadas</h3>
                  <p>Descoberta personalizada em tempo real</p>
                </div>
              </div>

              {/* Feature Cards - Small */}
              <div className="flux-card flux-card-small glass-effect">
                <div className="flux-card-glow"></div>
                <div className="feature-icon offline-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>
                <h3>Modo Offline</h3>
              </div>

              <div className="flux-card flux-card-small glass-effect">
                <div className="flux-card-glow"></div>
                <div className="feature-icon sync-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 1 1-2-8.83" />
                  </svg>
                </div>
                <h3>Sincronização</h3>
              </div>

              <div className="flux-card flux-card-small glass-effect">
                <div className="flux-card-glow"></div>
                <div className="feature-icon devices-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>Responsividade</h3>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flux-cta-section">
              <a href="/flux" className="flux-cta-button" title="Ir para a página do Flux">
                <span className="button-text">Explorar Flux</span>
                <span className="button-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div id="servicos" className="section servicos" role="region" aria-labelledby="servicos-title">
          <h2 id="servicos-title">Serviços</h2>
          <p className="servicos-intro">
            Oferecemos uma gama completa de serviços digitais para conectar você ao futuro.
          </p>
          <div className="servicos-grid">
            {services.map((card, index) => (
              <div key={index} className="servico-card">
                <div className="servico-icon"><img src={card.icon} alt={card.title} /></div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
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
          <div className="sobre-content" style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2.4rem' }}>
              Sobre Nós
            </h2>
            <span
              className="section-subtitle"
              style={{ textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.95rem' }}
            >
              A ESSÊNCIA POR TRÁS DA PRISMARINE
            </span>

            <div className="sobre-text-block">
              <div
                className="sobre-destaques"
                style={{ display: 'grid', gap: '1.75rem', marginTop: '2rem' }}
              >
                <div className="sobre-destaque-card servico-card">
                  <div
                    className="sobre-destaque-etiqueta"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}
                  >
                    QUEM SOMOS
                  </div>
                  <h3 style={{ fontSize: '1.25rem' }}>Equipe multidisciplinar</h3>
                  <p style={{ fontSize: '1.02rem' }}>
                    Unimos especialistas em <strong>design</strong>, <strong>desenvolvimento</strong>,
                    <strong> usabilidade</strong> e <strong>estratégia digital</strong> para criar soluções
                    focadas no universo da música: do aplicativo de streaming à loja de equipamentos de áudio e
                    à oferta de serviços técnicos.
                  </p>
                </div>

                <div className="sobre-destaque-card servico-card">
                  <div
                    className="sobre-destaque-etiqueta"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}
                  >
                    COMO TRABALHAMOS
                  </div>
                  <h3 style={{ fontSize: '1.25rem' }}>Processo transparente</h3>
                  <p style={{ fontSize: '1.02rem' }}>
                    Acompanhamos cada etapa ao lado do cliente, com comunicação clara, prazos bem definidos e
                    decisões baseadas em dados: seja para evoluir o app de música, estruturar a vitrine de
                    produtos de áudio ou desenhar serviços como segurança de rede e análise de uso.
                  </p>
                </div>

                <div className="sobre-destaque-card servico-card">
                  <div
                    className="sobre-destaque-etiqueta"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem' }}
                  >
                    O QUE ENTREGAMOS
                  </div>
                  <h3 style={{ fontSize: '1.25rem' }}>Parceria de longo prazo</h3>
                  <p style={{ fontSize: '1.02rem' }}>
                    Mais do que projetos pontuais, entregamos uma plataforma completa: ouvir música, consumir
                    conteúdo, adquirir equipamentos de áudio e contar com serviços profissionais que sustentem
                    esse ecossistema com segurança e desempenho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contato" className="section contato" role="region" aria-labelledby="contato-title">
          <div className="contato-wrapper">
            <div className="contato-left">
              <h2 id="contato-title">Contato</h2>
              <p className="contato-intro">
                Entre em contato para parcerias, dúvidas ou demonstrações do Flux. Estamos disponíveis para ouvir você.
              </p>
            </div>

            <div className="contato-right">
              {!isSubmitted ? (
                <form className="contato-card" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Sua mensagem aqui..."
                      required
                      aria-required="true"
                    />
                  </div>

                  <button type="submit" className="contato-button">
                    Enviar Mensagem
                  </button>
                </form>
              ) : (
                <div className="contato-success-card">
                  <div className="success-icon">✓</div>
                  <h3>Mensagem enviada com sucesso!</h3>
                  <p>Obrigado por entrar em contato. Retornaremos em breve.</p>
                  <button type="button" className="contato-button" onClick={handleNewMessage}>
                    Enviar Outra Mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
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
        <p>© {new Date().getFullYear()} Prismarine Software e Sistemas LTDA. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
