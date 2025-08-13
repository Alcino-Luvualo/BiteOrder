import { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, updateDoc, doc, query, orderBy } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import '../styles/dashboard.css';

function Dashboard() {
    const [pedidos, setPedidos] = useState([]);
    const [mesa, setMesa] = useState('');
    const [prato, setPrato] = useState('');
    const [tipo, setTipo] = useState('comum');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const navigate = useNavigate();

    // Contadores
    const pedidosPendentes = pedidos.filter(p => p.status === 'pendente').length;
    const pedidosEmPreparo = pedidos.filter(p => p.status === 'em_preparo').length;
    const pedidosComuns = pedidos.filter(p => p.prioridade === 'comum' && p.status !== 'servido').length;
    const pedidosExpressos = pedidos.filter(p => p.prioridade === 'expresso' && p.status !== 'servido').length;

    useEffect(() => {
        // Verificar se o usuário está autenticado
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login');
            } else {
                setUser(user);
            }
            setAuthLoading(false);
        });

        // Escutar mudanças nos pedidos em tempo real
        const q = query(collection(db, 'pedidos'), orderBy('timestamp', 'asc'));
        const unsubscribePedidos = onSnapshot(q, (snapshot) => {
            const pedidosData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPedidos(pedidosData);
        }, (error) => {
            console.error('Erro ao carregar pedidos:', error);
            // Se houver erro, tentar carregar sem orderBy
            const simpleQuery = collection(db, 'pedidos');
            onSnapshot(simpleQuery, (snapshot) => {
                const pedidosData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPedidos(pedidosData);
            });
        });

        return () => {
            unsubscribe();
            unsubscribePedidos();
        };
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    const adicionarPedido = async (e) => {
        e.preventDefault();
        if (!mesa || !prato) return;

        setLoading(true);
        try {
            const novoPedido = {
                mesa: mesa,
                prato: prato,
                prioridade: tipo,
                status: 'pendente',
                timestamp: new Date().toISOString(),
                userId: user?.uid || 'anonymous'
            };

            await addDoc(collection(db, 'pedidos'), novoPedido);
            
            // Tocar som de notificação
            playNotificationSound();
            
            // Limpar formulário
            setMesa('');
            setPrato('');
            setTipo('comum');
        } catch (error) {
            console.error('Erro ao adicionar pedido:', error);
            alert('Erro ao adicionar pedido: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const atualizarStatus = async (pedidoId, novoStatus) => {
        try {
            await updateDoc(doc(db, 'pedidos', pedidoId), {
                status: novoStatus
            });
        } catch (error) {
            console.error('Erro ao atualizar status:', error);
        }
    };

    const playNotificationSound = () => {
        const audio = new Audio('/notification.mp3');
        audio.play().catch(e => console.log('Erro ao tocar som:', e));
    };

    // FIFO: Primeiro a chegar, primeiro a ser servido (mais antigos por cima)
    const pedidosComunsList = pedidos
        .filter(p => p.prioridade === 'comum' && p.status !== 'servido')
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    // LIFO: Último a chegar, primeiro a ser servido (mais recentes por cima)
    const pedidosExpressosList = pedidos
        .filter(p => p.prioridade === 'expresso' && p.status !== 'servido')
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (authLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>A carregar...</p>
            </div>
        );
    }

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="dashboard-header">
                <div className="header-left">
                    <h1>BiteOrder</h1>
                    {user && (
                        <div className="user-info">
                            <span className="user-name">
                                Olá, {user.displayName || user.email?.split('@')[0] || 'Usuário'}
                            </span>
                        </div>
                    )}
                    <div className="counters">
                        <span className="counter-item">
                            <strong>{pedidosPendentes}</strong> Pendentes
                        </span>
                        <span className="counter-item">
                            <strong>{pedidosEmPreparo}</strong> Em Preparo
                        </span>
                    </div>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                    Sair
                </button>
            </header>



            {/* Formulário de Pedido */}
            <div className="order-form-container">
                <form onSubmit={adicionarPedido} className="order-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Mesa</label>
                            <input
                                type="text"
                                value={mesa}
                                onChange={(e) => setMesa(e.target.value)}
                                placeholder="Número da mesa"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Prato</label>
                            <input
                                type="text"
                                value={prato}
                                onChange={(e) => setPrato(e.target.value)}
                                placeholder="Nome do prato"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Tipo</label>
                            <select
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                            >
                                <option value="comum">Comum</option>
                                <option value="expresso">Expresso</option>
                            </select>
                        </div>
                        <button 
                            type="submit" 
                            className="add-order-btn"
                            disabled={loading}
                        >
                            {loading ? 'Adicionando...' : 'Adicionar Pedido'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Listas de Pedidos */}
            <div className="orders-container">
                {/* Pedidos Comuns (FIFO) - Primeiro a chegar, primeiro a ser servido */}
                <div className="orders-column fifo-column">
                    <div className="column-header">
                        <h2>Pedidos Comuns (FIFO)</h2>
                        <span className="order-count">{pedidosComuns}</span>
                    </div>
                    <div className="column-description">
                        <small>Mais antigos por cima → Primeiro a ser servido</small>
                    </div>
                    <div className="orders-list">
                        <AnimatePresence>
                            {pedidosComunsList.map((pedido) => (
                                <motion.div
                                    key={pedido.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className={`order-card ${pedido.status}`}
                                >
                                    <div className="order-info">
                                        <h3>Mesa {pedido.mesa}</h3>
                                        <p>{pedido.prato}</p>
                                        <span className="order-time">
                                            {new Date(pedido.timestamp).toLocaleTimeString()}
                                        </span>
                                    </div>
                                    <div className="order-actions">
                                        {pedido.status === 'pendente' && (
                                            <button
                                                onClick={() => atualizarStatus(pedido.id, 'em_preparo')}
                                                className="action-btn start-btn"
                                            >
                                                Começar
                                            </button>
                                        )}
                                        {pedido.status === 'em_preparo' && (
                                            <button
                                                onClick={() => atualizarStatus(pedido.id, 'servido')}
                                                className="action-btn serve-btn"
                                            >
                                                Servir
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pedidos Expressos (LIFO) - Último a chegar, primeiro a ser servido */}
                <div className="orders-column lifo-column">
                    <div className="column-header">
                        <h2>Pedidos Expressos (LIFO)</h2>
                        <span className="order-count">{pedidosExpressos}</span>
                    </div>
                    <div className="column-description">
                        <small>Mais recentes por cima → Prioridade máxima</small>
                    </div>
                    <div className="orders-list">
                        <AnimatePresence>
                            {pedidosExpressosList.map((pedido) => (
                                <motion.div
                                    key={pedido.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className={`order-card ${pedido.status} expresso`}
                                >
                                    <div className="order-info">
                                        <h3>Mesa {pedido.mesa}</h3>
                                        <p>{pedido.prato}</p>
                                        <span className="order-time">
                                            {new Date(pedido.timestamp).toLocaleTimeString()}
                                        </span>
                                    </div>
                                    <div className="order-actions">
                                        {pedido.status === 'pendente' && (
                                            <button
                                                onClick={() => atualizarStatus(pedido.id, 'em_preparo')}
                                                className="action-btn start-btn"
                                            >
                                                Começar
                                            </button>
                                        )}
                                        {pedido.status === 'em_preparo' && (
                                            <button
                                                onClick={() => atualizarStatus(pedido.id, 'servido')}
                                                className="action-btn serve-btn"
                                            >
                                                Servir
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard; 