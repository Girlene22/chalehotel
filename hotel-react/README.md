# Chalé Hotel

Site institucional do **Chalé Hotel**, desenvolvido com React e implantado na Vercel. O projeto apresenta os quartos, pacotes, serviços e informações de contato do hotel, com navegação por rotas, carousel de imagens, integração com WhatsApp e mapa de localização.

**[Ver projeto online]([https://girlene22.github.io/chalehotel/](https://chalehotel-gamma.vercel.app))**

---

## Telas

| Página   | Descrição                                      |
| -------- | ---------------------------------------------- |
| Home     | Hero com carousel, pacotes, serviços e mapa    |
| Quartos  | Listagem dos quartos disponíveis               |
| Pacotes  | Casal, Família e Amigos com detalhes e reserva |
| História | Sobre o hotel                                  |
| Contato  | Formulário de contato                          |

---

## Tecnologias

- **React 19** — componentização, estado com `useState`, efeitos com `useEffect` e refs com `useRef`
- **React Router DOM v7** — roteamento client-side com `Routes`, `Route` e `Link`
- **Tailwind CSS v4** — estilização utilitária com design responsivo
- **Vite 8** — bundler e servidor de desenvolvimento
- **Lucide React** — ícones
- **React Icons** — ícones complementares
- **ESLint** — qualidade de código com regras para React Hooks e React Refresh

---

## Funcionalidades

- Carousel de imagens com autoplay, navegação por botões e suporte a drag (mouse)
- Roteamento por páginas sem recarregamento
- Cards com efeito flip (frente e verso)
- Integração com WhatsApp para reservas diretamente pelo site
- Mapa de localização via Google Maps embed
- Menu hamburguer responsivo para mobile
- Layout responsivo para mobile, tablet e desktop
- Componentes reutilizáveis: `Container`, `Button`, `Cards`, `CardGrid`, `Section`, `SectionTitle`, `Text`
- Dados centralizados em arquivos de dados separados da UI

---

## Estrutura do projeto

```
src/
├── assets/          # Imagens
├── components/      # Componentes reutilizáveis
├── data/            # Dados estáticos (pacotes, serviços)
├── pages/           # Páginas da aplicação
└── App.jsx          # Roteamento principal
```

---

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/hotel-react.git

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Deploy

O projeto está hospedado na **Vercel** com deploy contínuo a partir da branch principal.
