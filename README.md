# SalgadoApp — GitHub Pages

App estático para calcular encomendas de salgados.

## Compatibilidade

O projeto pode ser publicado diretamente no GitHub Pages porque usa somente HTML, CSS e JavaScript no navegador.

Esta versão mantém as funções existentes:
- adicionar salgados ao pedido;
- calcular subtotal proporcional ao preço do cento;
- remover itens;
- calcular o total;
- copiar o resumo para o WhatsApp/área de transferência;
- funcionar como PWA;
- funcionar offline após o primeiro carregamento.

## Importante sobre o ícone

Este pacote é um **PATCH** porque o arquivo original recebido para análise era um relatório em texto e não continha os bytes do `icon.png`.

Ao aplicar os arquivos deste pacote no seu repositório, **mantenha o `icon.png` original na raiz**.

## Publicar no GitHub Pages

Estrutura esperada na raiz do repositório:

```text
/
├── .nojekyll
├── index.html
├── manifest.json
├── sw.js
├── icon.png
├── README.md
└── LICENSE   (se já existir)
```

No GitHub:

1. Abra **Settings** do repositório.
2. Acesse **Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch principal (normalmente `main`) e a pasta `/ (root)`.
5. Salve.
6. Quando disponível, mantenha HTTPS habilitado.

Os caminhos desta versão são relativos (`./`), portanto funcionam tanto em:
- `https://usuario.github.io/`
- `https://usuario.github.io/nome-do-repositorio/`
- domínio próprio configurado no GitHub Pages.

## Atualizações do PWA

O cache foi alterado para `salgados-cache-v2`. Ao publicar novas alterações no futuro, é recomendável alterar novamente o nome do cache (`v3`, `v4`, etc.) quando houver mudanças importantes nos arquivos offline.
