import express from "express";
import autenticar from "./seguranca/autenticar";

const porta = 3000;
const localhost = "0.0.0.0";

const app = express();

//quando pediu o endpoint dinheiro, estava preparado para responder R$100,00
//TODO APP WEB ESTA PREPARADO PARA MANIPULAR REQUISIÇÕES E DEVOLVER RESPOSTAS
//app.get("/dinheiro", (req, resp) => {
    //resp.send("R$100,00");
//});

//o HTTP é um protocolo stateless (sem estabelecimento de sessão)
//o servidor recebe uma requisição, processa a requisição e envia uma resposta
//sem se preocupar com os atores envolvidos

//prepara o servidor para disponibilizar recursos estáticos
//erro:http://localhost:300/publico/index.html
//certo: http://localhost:3000/index.html
app.use(express.static("./publico"));

//disponibilizando os arquivos da pasta privada com autenticação
//a funcao autenticar se comporta como um middleware, ou seja, camada do meio
app.use(autenticar, express.static("./privado"));

app.listen(porta, localhost, () => {
    console.log(`Servidor rodando em http://${localhost}:${porta}`);
});
