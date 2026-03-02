import prismarinelogo from './public/prismaraine.png'
import pramioImg from './public/equipe/pramio.png'
import brunoImg from './public/equipe/bruno.png'
import lucasImg from './public/equipe/lucas.png'
import joaoImg from './public/equipe/joao.png'
import nataliaImg from './public/equipe/natalia.png'
import { portfolios } from './portfolios'
import { useState } from 'react'

function App() {
  const [selectedMember, setSelectedMember] = useState(null)

  const services = [
    { icon: '💻', title: 'Consultoria Web', desc: 'Soluções personalizadas para sua presença digital' },
    { icon: '🎨', title: 'Design', desc: 'Interfaces modernas e intuitivas' },
    { icon: '⚙️', title: 'Desenvolvimento', desc: 'Código limpo e eficiente' },
    { icon: '📱', title: 'Aplicativos Mobile', desc: 'Apps responsivos e rápidos' },
    { icon: '🔒', title: 'Segurança', desc: 'Proteção de dados garantida' },
    { icon: '📊', title: 'Analytics', desc: 'Dados para decisões melhores' },
    { icon: '📈', title: 'Marketing Digital', desc: 'Campanhas eficazes e SEO' },
    { icon: '🛠️', title: 'Suporte 24/7', desc: 'Atendimento contínuo para sua empresa' }
  ]

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
              Nosso objetivo é ser referência em soluções digitais que aproximam pessoas, marcas e resultados,
              oferecendo uma experiência profissional, organizada e confiável em cada etapa da sua jornada
              conosco.
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
                <h3 style={{ fontSize: '1.25rem' }}>Jornada simples e intuitiva</h3>
                <p style={{ fontSize: '1rem' }}>
                  Criar uma navegação leve e agradável, com informações claras e organização visual que torne
                  cada escolha mais fácil e segura.
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
                  Entregar produtos e serviços digitais que realmente gerem impacto no dia a dia, ajudando
                  pessoas e empresas a crescerem com tecnologia.
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
                  Construir uma relação sólida, transparente e próxima, acompanhando sua evolução e estando
                  presente sempre que você precisar da Prismarine.
                </p>
              </div>
            </div>

            <p
              className="objetivos-texto"
              style={{
                fontSize: '1.05rem',
                maxWidth: '700px',
                margin: '2rem auto 0'
              }}
            >
              Em tudo o que fazemos, buscamos unir <strong>conveniência, confiança e qualidade</strong>, para
              que a Prismarine seja lembrada como a escolha certa quando o assunto é presença digital e
              inovação.
            </p>
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
                <div className="servico-icon">{card.icon}</div>
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
                    completas, com identidade forte e foco em resultado.
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
                    decisões tomadas sempre com base em dados e objetivos reais.
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
                    Mais do que projetos pontuais, buscamos relações duradouras, ajudando nossos clientes a
                    crescer, evoluir sua presença digital e explorar novas oportunidades com segurança.
                  </p>
                </div>
              </div>

              <p
                className="sobre-intro"
                style={{ fontSize: '1.1rem', maxWidth: '720px', margin: '2rem auto 0' }}
              >
                A Prismarine nasceu com o propósito de conectar tecnologia e pessoas de forma simples,
                elegante e eficiente. Somos uma equipe apaixonada por experiências digitais e comprometida em
                transformar ideias em soluções reais para o dia a dia de nossos clientes.
              </p>

              <p
                className="sobre-texto"
                style={{ fontSize: '1.05rem', maxWidth: '720px', margin: '1rem auto 0' }}
              >
                Nosso compromisso é estar sempre próximo, ouvindo, entendendo e construindo junto. É assim que
                a Prismarine se posiciona como um parceiro de confiança para quem quer dar o próximo passo no
                mundo digital com profissionalismo e consistência.
              </p>
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
        <p>© {new Date().getFullYear()} Prismarine. Juntos pelo prismarino</p>
      </footer>
    </div>
  )
}

export default App
