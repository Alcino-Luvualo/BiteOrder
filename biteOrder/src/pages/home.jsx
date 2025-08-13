import "../styles/home.css";

function Home(){
    return (
        <div className="home">
            <header className="header">
                <div className="logo">
                    <h1>BiteOrder</h1>
                </div>
                <nav className="nav">
                    <ul>        
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/contactos">Contactos</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/login" className="signup-btn">Login</a></li>
                    </ul>
                </nav>
            </header>

            <main className="main-content">
                <div className="hero-section">
                    <h2 className="hero-title">Peça, Organize e Monitore Seus Pedidos</h2>
                    <p className="hero-subtitle">Satisfaça os seus clientes com serviço de monitorização de pedidos e entrega rápida.</p>
                    <button className="iniciar-btn"><a href="/">Começar</a></button>
                </div>
                <div className="app-mockups">
                    <div className="phone-mockup phone-left">
                        <div className="phone-screen">
                            <div className="food-item">
                                <div className="food-image quinoa"></div>
                                <div className="food-info">
                                    <h4>BiteOrder Quinoa</h4>
                                    <p>240 g</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="phone-mockup phone-center">
                        <div className="phone-screen">
                            <div className="app-header">
                                <span className="time">9:41</span>
                                <h3>BiteOrder</h3>
                                <div className="cart-icon">
                                    <span className="cart-count">2</span>
                                </div>
                            </div>
                            <div className="search-bar">
                                <input type="text" placeholder="Pesquise algo saboroso..." />
                            </div>
                            <div className="quick-options">
                                <button>Repetir último pedido</button>
                                <button>Ajuda-me a escolher</button>
                                <button>Surpreende-me</button>
                            </div>
                            <div className="categories">
                                <h4>Categorias Principais</h4>
                                <div className="category-items">
                                    <div className="category">
                                        <div className="category-icon vegan"></div>
                                        <span>Vegano</span>
                                    </div>
                                    <div className="category">
                                        <div className="category-icon coffee"></div>
                                        <span>Café</span>
                                    </div>
                                    <div className="category">
                                        <div className="category-iBurguercon donut"></div>
                                        <span>Donuts</span>
                                    </div>
                                </div>
                                <a href="#" className="view-all">Ver tudo →</a>
                            </div>
                        </div>
                    </div>

                    <div className="phone-mockup phone-right">
                        <div className="phone-screen">
                            <div className="map-container">
                                <div className="map">
                                    <div className="delivery-route"></div>
                                    <div className="delivery-location"></div>
                                </div>
                                <div className="delivery-info">
                                    <p>Tempo estimado de entrega 4:32 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>BiteOrder</h3>
                        <p>Entregas rápidas e Organizadas.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Links Úteis</h4>
                        <ul>
                            <li><a href="#about">Sobre Nós</a></li>
                            <li><a href="#contact">Contactos</a></li>
                            <li><a href="#help">Ajuda</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contactos</h4>
                        <p>Email: info@biteorder.com</p>
                        <p>Telefone: +244 123 456 789</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 BiteOrder. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home;