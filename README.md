# Casa Araucá

Projeto conceitual de website para uma pousada boutique fictícia, desenvolvido
como peça de portfólio da **NORTE 34**.

> **Aviso:** a Casa Araucá não é uma empresa real. Este projeto foi criado
> exclusivamente para demonstrar capacidade de desenvolvimento de sites de
> alto padrão. Nenhuma avaliação, cliente, número ou resultado apresentado é
> real. O site está marcado como `noindex` para não ser indexado por
> mecanismos de busca.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- `next/font` (Google Fonts: Fraunces + Manrope, self-hospedadas no build)
- `next/image` para otimização automática das imagens

## Executando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servir o build de produção
npm run lint    # checagem de lint
```

## Estrutura

```
app/                 rotas do App Router (layout, page, metadata, robots)
components/          seções e componentes de UI
lib/images.ts         banco de imagens (Unsplash, uso demonstrativo)
```
