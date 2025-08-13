import { useState } from 'react';
import '../styles/contactos.css';

function Contactos() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simular envio do formulário
        setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                mensagem: ''
            });
        }, 2000);
    };

    return (
        <div className="contactos-container">
            <header className="contactos-header">
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

            <main className="contactos-main">
                <section className="hero-section">
                    <h2>Contacte-nos</h2>
                    <p className="subtitle">Estamos aqui para ajudar o seu restaurante</p>
                </section>

                <section className="contact-section">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-info">
                                <h3>Informações de Contacto</h3>
                                <div className="info-item">
                                    <div className="info-icon">📧</div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@biteorder.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">📞</div>
                                    <div>
                                        <h4>Telefone</h4>
                                        <p>+244 123 456 789</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">📍</div>
                                    <div>
                                        <h4>Endereço</h4>
                                        <p>Luanda, Angola</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">🕒</div>
                                    <div>
                                        <h4>Horário</h4>
                                        <p>Segunda - Sexta: 8h - 18h</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form-container">
                                <h3>Envie-nos uma mensagem</h3>
                                {success ? (
                                    <div className="success-message">
                                        <div className="success-icon">✅</div>
                                        <h4>Mensagem enviada!</h4>
                                        <p>Obrigado pelo seu contacto. Responderemos em breve.</p>
                                        <button 
                                            onClick={() => setSuccess(false)}
                                            className="new-message-btn"
                                        >
                                            Enviar nova mensagem
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="contact-form">
                                        <div className="form-group">
                                            <label htmlFor="nome">Nome Completo *</label>
                                            <input
                                                type="text"
                                                id="nome"
                                                name="nome"
                                                value={formData.nome}
                                                onChange={handleChange}
                                                required
                                                placeholder="Seu nome completo"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="telefone">Telefone</label>
                                            <input
                                                type="tel"
                                                id="telefone"
                                                name="telefone"
                                                value={formData.telefone}
                                                onChange={handleChange}
                                                placeholder="+244 123 456 789"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mensagem">Mensagem *</label>
                                            <textarea
                                                id="mensagem"
                                                name="mensagem"
                                                value={formData.mensagem}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                                placeholder="Conte-nos como podemos ajudar o seu restaurante..."
                                            ></textarea>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="submit-btn"
                                            disabled={loading}
                                        >
                                            {loading ? 'A enviar...' : 'Enviar Mensagem'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="faq-section">
                    <div className="container">
                        <h3>Perguntas Frequentes</h3>
                        <div className="faq-grid">
                            <div className="faq-item">
                                <h4>Como funciona o sistema de pedidos?</h4>
                                <p>O BiteOrder utiliza dois tipos de filas: FIFO para pedidos comuns (ordem de chegada) e LIFO para pedidos expressos (prioridade).</p>
                            </div>
                            <div className="faq-item">
                                <h4>Preciso de equipamentos especiais?</h4>
                                <p>Não! O sistema funciona em qualquer dispositivo com navegador web: computador, tablet ou smartphone.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Como faço para começar?</h4>
                                <p>Basta registar-se, fazer login e começar a adicionar pedidos. O sistema é intuitivo e fácil de usar.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Os dados são seguros?</h4>
                                <p>Sim! Utilizamos Firebase com criptografia e autenticação segura para proteger todos os dados.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="contactos-footer">
                <div className="container">
                    <p>&copy; 2025 BiteOrder. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default Contactos; 