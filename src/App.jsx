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
          <a href="#equipe" onClick={() => setMobileNavOpen(false)}>Equipe</a>
          <a href="#sobre" onClick={() => setMobileNavOpen(false)}>Sobre Nós</a>
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

        <div id="flux" className="section produto" role="region" aria-labelledby="flux-title">
          <h2 id="flux-title"><span className="flux-name">Flux</span></h2>
          <p className="produto-intro">
            Flux é a nossa plataforma de áudio — um espaço para ouvir música, descobrir podcasts e montar
            playlists com recomendações personalizadas. Ideal para quem vive de som ou simplesmente ama ouvir.
          </p>
          <div className="produto-grid">
            <div className="produto-card">
              <h3>O que oferece</h3>
              <ul>
                <li>Música sob demanda e playlists</li>
                <li>Podcasts e programas exclusivos</li>
                <li>Recomendações personalizadas</li>
                <li>Modo offline e integração com dispositivos</li>
              </ul>
              <a className="flux-cta" href="/flux" title="Ir para a página do Flux">Ir para Flux</a>
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
          <div className="contato-content" style={{ textAlign: 'center' }}>
            <h2 id="contato-title">Contato</h2>
            <p className="contato-intro">
              Entre em contato para parcerias, dúvidas ou demonstrações do Flux. Estamos disponíveis por
              e-mail e redes sociais.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <a href="mailto:contato@prismarine.com">contato@prismarine.com</a> · <a href="tel:+551199999999">(11)
              99999-9999</a>
            </p>
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
