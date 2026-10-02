# SalgadoApp — GitHub Pages

Aplicativo estático/PWA para montar e compartilhar encomendas de salgados.

Acesse: <https://mestreudk.github.io/SalgadoApp/>

## Funcionalidades

- tema escuro como padrão;
- alternância entre tema escuro e claro;
- preferência de tema salva no aparelho;
- adicionar e remover itens;
- editar um item já adicionado;
- cálculo automático de subtotal e total;
- nome do cliente opcional;
- observações opcionais;
- rascunho salvo automaticamente no aparelho;
- botão para limpar o pedido atual;
- histórico local de pedidos;
- reabrir e editar pedidos já salvos;
- copiar pedidos do histórico;
- enviar pedidos do histórico pelo WhatsApp;
- copiar o pedido atual para a área de transferência;
- abrir o WhatsApp com a mensagem pronta;
- instalação como PWA;
- funcionamento offline após o primeiro carregamento.

## Como funciona o salvamento

### Rascunho automático

O pedido atual é salvo automaticamente no navegador. Se o usuário fechar a página ou o PWA e abrir novamente, o pedido em andamento é restaurado.

### Histórico

O histórico é salvo somente no aparelho, usando o armazenamento local do navegador.

Para evitar duplicatas:

- um pedido novo usa **Salvar no histórico**;
- ao reabrir um pedido já salvo, o botão muda para **Atualizar histórico**;
- salvar novamente atualiza o mesmo pedido.

Não há conta, login, servidor ou banco de dados.

## Arquivos

Raiz do repositório:

```text
/
├── .nojekyll
├── index.html
├── manifest.json
├── sw.js
├── icon.png
├── README.md
└── LICENSE
```

## GitHub Pages

Os caminhos continuam relativos (`./`), portanto o projeto permanece compatível com GitHub Pages e domínio próprio.
