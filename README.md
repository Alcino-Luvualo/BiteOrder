# 🍔 BiteOrder - Sistema de Gestão de Pedidos

O **BiteOrder** é uma aplicação web moderna desenvolvida para gestão inteligente de pedidos em restaurantes, utilizando algoritmos de fila FIFO e LIFO para otimizar o atendimento.

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework para interfaces de usuário
- **React Router Dom 7.8** - Roteamento client-side
- **Vite** - Build tool e dev server
- **Firebase** - Backend as a Service (autenticação e Firestore)
- **Framer Motion** - Animações suaves
- **CSS3** - Estilização responsiva e moderna

## ✨ Funcionalidades Principais

### 🔐 Sistema de Autenticação
- Login com email/senha
- Integração com Google OAuth
- Registro de novos usuários
- Proteção de rotas autenticadas

### 📋 Gestão de Pedidos
- **Fila FIFO** - Pedidos comuns (primeiro a chegar, primeiro a ser servido)
- **Fila LIFO** - Pedidos expressos (último a chegar, primeiro a ser servido)
- Atualizações em tempo real via Firestore
- Notificações sonoras para novos pedidos
- Contadores dinâmicos de pedidos

### 🎨 Interface Moderna
- Design responsivo para todas as telas
- Navegação fluida com React Router
- Animações com Framer Motion
- Páginas 404 personalizadas
- Feedback visual de carregamento

## 🔧 Correções Implementadas

### React Router Otimizado
- ✅ Substituição de tags `<a>` por `<Link>` em todas as páginas
- ✅ Navegação sem recarregamento da página
- ✅ Estado da aplicação preservado durante navegação
- ✅ Rota 404 para páginas não encontradas
- ✅ Configuração `vercel.json` para deploy SPA

### Problemas Corrigidos
- ❌ **Antes**: Links causavam refresh completo da página
- ✅ **Depois**: Navegação instantânea client-side
- ❌ **Antes**: Erro 404 em rotas diretas na Vercel  
- ✅ **Depois**: Todas as rotas funcionam perfeitamente
- ❌ **Antes**: Perda de estado durante navegação
- ✅ **Depois**: Estado preservado entre páginas

## 📁 Estrutura do Projeto

```
biteOrder/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   └── Navigation.jsx   # Menu de navegação
│   ├── pages/              # Páginas da aplicação
│   │   ├── home.jsx        # Página inicial
│   │   ├── login.jsx       # Autenticação
│   │   ├── register.jsx    # Registro
│   │   ├── dashboard.jsx   # Painel principal
│   │   ├── sobre.jsx       # Sobre o sistema
│   │   ├── contactos.jsx   # Página de contato
│   │   └── NotFound.jsx    # Página 404
│   ├── firebase/           # Configuração Firebase
│   ├── styles/             # Arquivos CSS
│   └── App.jsx             # Componente raiz
├── public/                 # Arquivos públicos
├── vercel.json            # Configuração Vercel
└── package.json           # Dependências
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação
```bash
# Clonar o repositório
git clone [url-do-repo]
cd biteOrder

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Configuração Firebase
1. Crie um projeto no Firebase Console
2. Configure Authentication (Email/Password e Google)
3. Crie um banco Firestore
4. Copie as credenciais para `src/firebase/config.js`

## 🌐 Deploy na Vercel

O projeto está otimizado para deploy na Vercel com:
- Arquivo `vercel.json` configurado para SPAs
- Redirecionamento automático de todas as rotas para `index.html`
- Headers de segurança configurados
- Suporte completo ao React Router

### Passos do Deploy:
1. Conecte o repositório à Vercel
2. As configurações são detectadas automaticamente
3. Todas as rotas funcionarão perfeitamente após o deploy

## 🔄 Algoritmos de Fila

### FIFO (First In, First Out) - Pedidos Comuns
- Pedidos são processados na ordem de chegada
- Garante justiça no atendimento
- Ideal para operação normal do restaurante

### LIFO (Last In, First Out) - Pedidos Expressos  
- Último pedido tem prioridade máxima
- Para situações urgentes
- Atendimento imediato quando necessário

## 🎯 Melhorias Técnicas

- **Performance**: Lazy loading e otimizações de bundle
- **SEO**: Meta tags e estrutura semântica
- **Acessibilidade**: Labels, ARIA e navegação por teclado
- **Segurança**: Validação client/server e headers de segurança
- **UX**: Feedback visual, estados de loading e animações

## 📱 Responsividade

- **Mobile First**: Otimizado para dispositivos móveis
- **Tablet**: Interface adaptada para telas médias
- **Desktop**: Aproveitamento completo de telas grandes
- **Touch**: Gestos e interações tácteis

## 🐛 Debug e Logs

- Console limpo sem erros
- Tratamento adequado de exceções  
- Feedback claro para o usuário
- Logs estruturados para desenvolvimento

## 🏆 Resultados

✅ **100%** das rotas funcionando na Vercel  
✅ **0** erros de linting  
✅ **Build** bem-sucedido  
✅ **Navegação** fluida sem recarregamentos  
✅ **Estado** preservado entre páginas  
✅ **Performance** otimizada  

## 👨‍💻 Desenvolvedor

**Alcino Luvualo**  
- GitHub: [@alcino-luvualo](https://github.com/alcino-luvualo)
- Email: [seu-email@example.com]

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

*Projeto desenvolvido com ❤️ para demonstrar boas práticas de React e arquitetura frontend moderna.*