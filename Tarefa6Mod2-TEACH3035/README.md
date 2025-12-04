# Pokédex - Tarefa 6 Módulo 2

Aplicação React + TypeScript que consome a [PokéAPI](https://pokeapi.co/) e exibe uma lista de Pokémon em formato de cards responsivos.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **PokéAPI** - API RESTful de Pokémon

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── Header.tsx
│   ├── PokemonCard.tsx
│   ├── PokemonGrid.tsx
│   └── LoadMoreButton.tsx
├── services/            # Serviços de comunicação com APIs
│   └── pokemonService.ts
├── types/              # Definições de tipos TypeScript
│   └── pokemon.ts
├── utils/              # Funções auxiliares
│   └── helpers.ts
├── constants/          # Constantes da aplicação
│   └── api.ts
├── styles/             # Arquivos de estilo
│   └── global.css
├── App.tsx             # Componente principal
└── index.tsx           # Ponto de entrada da aplicação
```

## 🎯 Funcionalidades

- ✅ Listagem de Pokémon da PokéAPI
- ✅ Cards responsivos com imagens e informações
- ✅ Exibição de tipos dos Pokémon com cores
- ✅ Sistema de paginação (carregar mais)
- ✅ Estados de loading e erro
- ✅ Design responsivo para mobile, tablet e desktop
- ✅ Código totalmente tipado com TypeScript

## 🎨 Estrutura de Código

O projeto segue as melhores práticas recomendadas:

- **Código em inglês** para melhor padronização
- **Separação de responsabilidades** (components, services, types, utils)
- **Componentização** adequada para reutilização
- **Tipos TypeScript** bem definidos
- **Serviços separados** para chamadas à API
- **Funções auxiliares** organizadas em utils
- **Constantes centralizadas** para configuração

## 🔧 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm start
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📦 Build para Produção

```bash
npm run build
```

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido seguindo o feedback do módulo anterior:
- Código padronizado em inglês
- Estrutura organizada com pastas específicas
- Arquivos separados por responsabilidade
- Uso de tecnologias modernas (React + TypeScript + Tailwind)

---

**Desenvolvido por Wellington** - TEACH3035 Módulo 2
