# 🏥 Sistema de Agendamento Online - Centro Médico Santa Cruz  

Este projeto foi desenvolvido para o **Centro Médico Santa Cruz** com o objetivo de otimizar o processo de marcação de consultas de forma **simples, rápida e eficiente**.  

---

## 🚀 Tecnologias Utilizadas  
- **Node.js** → Back-end robusto e escalável  
- **Next.js** → Framework React com SSR e ótima performance  
- **React** → Criação de interfaces dinâmicas e reativas  
- **Tailwind CSS** → Estilização moderna e responsiva  
- **Zod** → Validação de dados confiável e segura  
- **Next-Auth** → Autenticação e gerenciamento de sessão seguro  
- **Prisma ORM** → Camada de acesso ao banco de dados  
- **PostgreSQL** (Neon) → Banco de dados relacional hospedado na nuvem  

---

## ⚙️ Funcionalidades  
- ✔️ Cadastro e autenticação de usuários  
- ✔️ Marcação de consultas online de forma rápida  
- ✔️ Validação robusta de dados com **Zod**  
- ✔️ Painel intuitivo para pacientes e administradores  
- ✔️ Integração com **Prisma ORM** e banco **PostgreSQL (Neon)**  
- ✔️ Design moderno e responsivo para qualquer dispositivo  

---

## 📦 Instalação e Execução  

Clone o repositório e instale as dependências:  

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
```

---

## ⚙️ Configuração do Banco de Dados

Crie um arquivo **.env** na raiz do projeto e configure a variável de conexão com o banco **PostgreSQL (Neon):**

```env
DATABASE_URL="postgresql://usuario:senha@host-do-neon/neondb"
NEXTAUTH_SECRET="sua_chave_secreta"
NEXTAUTH_URL="http://localhost:3000"
```
### Rodando as migrations do Prisma

```bash
npx prisma migrate dev
```
---
## Rodando o Projeto

Execute no ambiente de desenvolvimento:

```bash
npm run dev
```
O projeto ficará disponível em: 👉 [http://localhost:3000](http://localhost:3000)

 ---
### 🎯 Objetivo

Oferecer uma experiência fluida tanto para pacientes quanto para administradores, tornando o processo de agendamento médico mais prático, seguro e acessível.

### 📸 Layout

A interface foi projetada com Tailwind CSS, garantindo uma navegação intuitiva e compatível com qualquer dispositivo (desktop, tablet e mobile).

### 👨‍💻 Autor

Desenvolvido por **Lucas Brito** como projeto freelancer.


