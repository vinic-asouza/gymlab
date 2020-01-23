# GymLab

Aplicação desenvolvida em Javascript utilizando Node + React.

O Gymlab um sistema para gerenciamento de academias ou centro de esportes. Conta com recursos para:
- Controle de Alunos e Instrutores;
- Controle de Planos e Pagamentos;
- Controle Modalidades e Fichas de Treino pra Acompanhamento.

# BACKEND

API desenvolvida em NodeJS.

**Dependências:**
- Servidor **EXPRESS**;
- Conexão com Banco de Dados **POSTGRES** utilizando **ORM SEQUELIZE**;
- Criptografia Hash com **BCRYPTJ**
- Autenticação com **JWT**

**Dependências de Desenvolvimento:**
- Nodemon
- Sucrase
- Prettier
- ESLint

# Intruções para inicialização do projeto (utilizando Docker com Postgres e Sequelize):

**Acessando Diretório**

    $ cd backend

**Baixando dependências**

    $ yarn install

**Criando base de dados com Container Docker: (obs: substituir "nome-database" e "senha-database" para nomes e senhas de sua escolha)**

    $ docker run --name "nome-database" -e POSTGRES_PASSWORD="senha-database" -p 5432:5432 -d postgres:11

Obs: Dentro da database é criado por padrão um bando com o nome "postgres", caso desejo outro nome, necessário alterar ou criar outro utilizando um gerenciador.

**Inicializando a base de dados:**

    $ docker start "nome-database"

**Definindo as variáveis de ambiente:**

Criar arquivo .env na raiz do projeto, seguindo o exemplo do arquivo .env.example, configurando de acordo com suas informações previamente criadas

**Rodando as migrations do projeto, para criação das tabelas (utilizando Sequelize):**

    $ yarn sequelize db:migrate


**Inicializando API:**

    $ yarn run dev

---

# FRONTEND

Desenvolvido em React + Redux.

# Tecnologias utilizadas:

- ReactJS
- Redux
- Redux-Saga
- React Router v4
- styled-components
- Axios
- History
- Polished
- React-Toastify
- React-Icons
- react-perfect-scrollbar
- Unform
- Yup
- date-fns
- VS Code with EditorConfig and ESLint

# Intruções para inicialização do projeto:

  Estar com a API do projeto em execução (seguir instruções do backend).

  Acessar diretório:

    $ cd frontend

  Instalar dependencias:

    $ yarn install

  Rodar:

    $ yarn start

# Imagens:


