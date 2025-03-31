# 🚀 Rei do Codigo - Site & API

Este repositório contém o código-fonte do site da **Rei do Codigo**, desenvolvido com **HTML, CSS e JavaScript**, e uma **API em Node.js** responsável por gerar um token para envio de e-mails via formulário.

## 📌 Tecnologias Utilizadas

### 🌐 Frontend (Site)

- **HTML5**
- **CSS3**
- **JavaScript**

### 🖥️ Backend (API)

- **Node.js**
- **Express.js**
- **dotenv** (para variáveis de ambiente)
- **jsonwebtoken** (para geração do token)

## 📂 Estrutura do Projeto

```
/ 📁 reidocodigo
  ├── 📁 frontend  # Código do site
  │   ├── index.html
  │   ├── styles.css
  │   ├── script.js
  │
  ├── 📁 backend   # Código da API
  │   ├── server.js
  │   ├── .env
  │   ├── package.json
  │
  ├── README.md
```

## 🚀 Como Executar o Projeto

### 🖥️ Rodando o Site (Frontend)

1. Clone o repositório:
   ```sh
   git clone https://github.com/antoni0jsneto/reidocodigo.git
   ```
2. Abra o arquivo `index.html` no navegador.

### 🖥️ Criando o serviço de e-mail

1. Crie uma conta no serviço de Email **[EmailJS](https://dashboard.emailjs.com/sign-up)**

2. Navegue até **Account** -> **General** -> **API Keys**, copie a **Public Key** e guarde em uma variavel do seu arquivo `.env`

3. Navegue até **Email Services**, adicione um novo serviço e conect o serviço ao seu provedor de e-mail. Em seguida, copie o **Service ID** e cole na linha 52 do arquivo `script.js` substituindo o conteudoi da variável correspondente.

4. Navegue até **Email Templates**, adicione um novo template e em seguida, copie o **Template ID** e cole na linha 52 do arquivo `script.js` substituindo o conteudo da variável correspondente.

5. Pronto! O seu serviço de e-mail já está ativo e basta seguir com a configuração do **backend** para usá-lo no projeto.

### 🖥️ Rodando a API (Backend)

1. Acesse a pasta **secure-backend**:
   ```sh
   cd secure-backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Crie um arquivo `.env` e adicione:
   ```env
   PORT=5000
   EMAILJS_PUBLIC_KEY=sua_chave_do_emailjs
   ACCESS_TOKEN=sua_chave_secreta
   ```
4. Inicie o servidor:
   ```sh
   node server.js
   ```
5. A API rodará em: `http://localhost:5000`

## 🛠️ Endpoints da API

### 🔑 Gerar Token

- **Rota:** `GET /get-key`
- **Exemplo de Requisição:**
  ```json
  {
    "Authorization": "Bearer sua_chave_secreta"
  }
  ```
- **Resposta:**
  ```json
  {
    "apiKey": "sua_chave_do_emailjs"
  }
  ```

## 📜 Licença

Este projeto está licenciado sob a **MIT License**.

---

💡 **Desenvolvido por [Rei do Codigo](https://reidocodigo.com.br)**
