import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <h1>BiteOrder</h1>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/contactos" onClick={() => setMenuOpen(false)}>
                Contactos
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={() => setMenuOpen(false)}>
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h2 className="hero-title">Peça, Organize e Monitore Seus Pedidos</h2>
          <p className="hero-subtitle">
            Satisfaça os seus clientes com serviço de monitorização de pedidos e
            entrega rápida.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="iniciar-btn">
              Login
            </Link>
            <Link to="/register" className="register-hero-btn">
              Criar Conta
            </Link>
          </div>
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
                <button className="view-all">Ver tudo →</button>
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
              <li>
                <Link to="/sobre">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contactos">Contactos</Link>
              </li>
              <li>
                <button>Ajuda</button>
              </li>
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
  );
}

export default Home;
