# SalgadoApp — GitHub Pages

App estático/PWA para calcular encomendas de salgados.

## Funcionalidades

- adicionar salgados ao pedido;
- calcular o subtotal proporcional ao preço do cento;
- remover itens;
- calcular o total geral;
- copiar o resumo do pedido para a área de transferência;
- abrir o WhatsApp com a mensagem pronta e escolher o contato;
- tema escuro como padrão;
- alternar entre tema escuro e claro;
- salvar a preferência de tema no aparelho;
- instalação como PWA;
- funcionamento offline após o primeiro carregamento.

## Arquivos

Mantenha na raiz do repositório:

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

## Atualização

Esta versão utiliza o cache `salgados-cache-v3`.

O arquivo `icon.png` não está incluído neste patch. Mantenha o ícone que já existe no seu repositório.

## GitHub Pages

Os caminhos continuam relativos (`./`), portanto o projeto permanece compatível com publicação em:

- `https://usuario.github.io/`
- `https://usuario.github.io/nome-do-repositorio/`
- domínio próprio configurado no GitHub Pages.
