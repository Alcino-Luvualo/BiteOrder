import { Link } from 'react-router-dom';
import '../styles/notfound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-animation">
          <div className="plate">
            <div className="food-icon">🍽️</div>
          </div>
          <div className="floating-numbers">
            <span className="number-4">4</span>
            <span className="number-0">0</span>
            <span className="number-4-2">4</span>
          </div>
        </div>

        <div className="error-text">
          <h1>Oops! Página não encontrada</h1>
          <p>Parece que esta página saiu do cardápio...</p>
          <p className="subtitle">A página que você está procurando não existe ou foi movida.</p>
        </div>

        <div className="action-buttons">
          <Link to="/" className="home-btn">
            🏠 Voltar ao Início
          </Link>
          <Link to="/contactos" className="contact-btn">
            📞 Contactar Suporte
          </Link>
        </div>

        <div className="suggestions">
          <h3>Páginas populares:</h3>
          <div className="suggestion-links">
            <Link to="/" className="suggestion-link">
              <span className="suggestion-icon">🏠</span>
              <span>Página Inicial</span>
            </Link>
            <Link to="/sobre" className="suggestion-link">
              <span className="suggestion-icon">ℹ️</span>
              <span>Sobre Nós</span>
            </Link>
            <Link to="/login" className="suggestion-link">
              <span className="suggestion-icon">🔐</span>
              <span>Fazer Login</span>
            </Link>
            <Link to="/register" className="suggestion-link">
              <span className="suggestion-icon">📝</span>
              <span>Criar Conta</span>
            </Link>
          </div>
        </div>
      </div>

      <footer className="not-found-footer">
        <p>&copy; 2025 BiteOrder. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default NotFound;
