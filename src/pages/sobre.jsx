import { useState } from 'react';
import '../styles/sobre.css';

function Sobre() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="sobre-container">
            <header className="sobre-header">
                <div className="logo">
                    <h1>BiteOrder</h1>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="/" onClick={() => setMenuOpen(false)}>Inicio</a></li>
                        <li><a href="/contactos" onClick={() => setMenuOpen(false)}>Contactos</a></li>
                        <li><a href="/sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
                        <li><a href="/login" className="login-link" onClick={() => setMenuOpen(false)}>Login</a></li>
                    </ul>
                </nav>
            </header>

            <main className="sobre-main">
                <section className="hero-section">
                    <h2>Sobre o BiteOrder</h2>
                    <p className="subtitle">Sistema inteligente de gestão de pedidos para restaurantes</p>
                </section>

                <section className="features-section">
                    <div className="container">
                        <h3>Como Funciona</h3>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">📋</div>
                                <h4>Gestão FIFO</h4>
                                <p>Pedidos comuns são processados na ordem de chegada (First In, First Out), garantindo justiça e organização.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">⚡</div>
                                <h4>Pedidos Expressos</h4>
                                <p>Pedidos urgentes são priorizados (Last In, First Out) para situações que requerem atendimento imediato.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🔔</div>
                                <h4>Notificações</h4>
                                <p>Sistema de alertas sonoros para notificar a cozinha sobre novos pedidos em tempo real.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📊</div>
                                <h4>Contadores</h4>
                                <p>Acompanhe em tempo real o número de pedidos pendentes e em preparo.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🔄</div>
                                <h4>Status em Tempo Real</h4>
                                <p>Atualização automática do status dos pedidos: Pendente → Em Preparo → Servido.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📱</div>
                                <h4>Responsivo</h4>
                                <p>Interface adaptável para desktop, tablet e smartphone, permitindo uso em qualquer dispositivo.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="container">
                        <h3>Benefícios</h3>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <h4>🎯 Eficiência</h4>
                                <p>Reduza o tempo de espera e melhore a satisfação dos clientes com gestão inteligente de filas.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>📈 Produtividade</h4>
                                <p>Aumente a capacidade de atendimento com organização automática e notificações em tempo real.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>💰 Economia</h4>
                                <p>Reduza desperdícios e otimize recursos com controle preciso do fluxo de pedidos.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>👥 Equipe</h4>
                                <p>Facilite a comunicação entre garçons e cozinha com interface intuitiva e clara.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <h3>Pronto para começar?</h3>
                        <p>Transforme a gestão do seu restaurante com o BiteOrder</p>
                        <a href="/login" className="cta-btn">Começar Agora</a>
                    </div>
                </section>
            </main>

            <footer className="sobre-footer">
                <div className="container">
                    <p>&copy; 2025 BiteOrder. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default Sobre; 
