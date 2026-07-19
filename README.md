# 🎯 Sistema de Reservas de Salas - Frontend

Frontend desenvolvido em **React 19** utilizando uma arquitetura moderna baseada em componentes, tipagem estática com TypeScript e gerenciamento eficiente de estado e requisições.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM
- Axios
- TanStack Query (React Query)
- React Hook Form
- Zod
- Lucide React
- Context API

---

## 📁 Estrutura do Projeto

```
src
├── assets/
├── components/
├── contexts/
├── hooks/
├── lib/
├── pages/
├── routes/
├── services/
├── types/
├── utils/
├── App.tsx
├── main.tsx
└── index.css
```

---

## 📦 Instalação

Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Entre na pasta

```bash
cd nome-do-projeto
```

Instale as dependências

```bash
npm install
```

---

## ▶️ Executando o projeto

Modo de desenvolvimento

```bash
npm run dev
```

Gerar build

```bash
npm run build
```

Visualizar a build

```bash
npm run preview
```

---

## 🛠️ Scripts

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Executa o projeto em desenvolvimento |
| `npm run build`   | Gera a versão de produção            |
| `npm run preview` | Executa a build localmente           |
| `npm run lint`    | Analisa o código com ESLint          |

---

## 🎨 Arquitetura

O projeto foi organizado visando escalabilidade, reutilização de componentes e separação de responsabilidades.

- **components** → Componentes reutilizáveis
- **pages** → Páginas da aplicação
- **routes** → Configuração das rotas
- **services** → Comunicação com a API
- **contexts** → Gerenciamento de estado global
- **hooks** → Hooks customizados
- **lib** → Configurações compartilhadas (Axios, React Query etc.)
- **types** → Tipagens TypeScript
- **utils** → Funções utilitárias
- **assets** → Imagens, ícones e arquivos estáticos

---

## 📋 Funcionalidades

- Autenticação de usuários
- Cadastro de salas
- Gerenciamento de reservas
- Controle de disponibilidade
- Consumo de API REST
- Validação de formulários
- Tratamento de erros
- Interface responsiva

---

## 📌 Padrões utilizados

- Componentização
- Clean Code
- Type Safety
- Separação de responsabilidades
- Organização por funcionalidades
- Requisições centralizadas
- Validação utilizando Zod
- Gerenciamento de estado servidor com React Query

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e demonstração.
