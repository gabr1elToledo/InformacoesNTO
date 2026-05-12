# 🍥 NTO Ultimate Wiki e Infos

> O portal definitivo de informações sobre **Naruto Ultimate**.

O **NTO Ultimate Hub** foi criado com um objetivo simples: reunir **TUDO** que um jogador de Naruto TO Ultimate precisa em um único lugar.

De builds avançadas até guias completos, hunts, itens, cartas, PvP, PvE, eventos e sistemas do jogo — este projeto nasce para se tornar a principal referência da comunidade.

---

## 🚀 Visão do Projeto

O NTO Ultimate Wiki e Infos não é apenas uma wiki.

A proposta é construir uma plataforma completa para jogadores iniciantes, intermediários e veteranos, com foco em:

- 📚 **Wiki completa de personagens**
- ⚔️ **Builds PvE e PvP**
- 🏹 **Comparação entre estilos de combate**
  - Luvas
  - Espada
  - Distância
- 🎯 **Tier Lists atualizadas**
- 🗺️ **Guias de hunts e farm**
- 🎴 **Database de cartas**
- 🧰 **Ferramentas utilitárias**
- 🤖 **Macros e automações**
- 📰 **Eventos atuais do jogo**
- 👹 **Bosses e invasões**
- 🦊 **Sistema de Bijuus**
- 🏰 **Guilds e sistemas sociais**
- 💬 **Integração com comunidade**
- 📈 **Meta analysis e recomendações**

Tudo isso com uma interface moderna, rápida e intuitiva.

---

## 🛠️ Stack Tecnológica

Projeto desenvolvido com tecnologias modernas:

- **Angular 20**
- **Angular SSR**
- **TypeScript**
- **SCSS**
- **Angular Router**
- **Standalone Components**
- **Node.js**

Arquitetura pensada para escalabilidade e crescimento contínuo.

---

## 🧠 Arquitetura

A aplicação foi construída para permitir expansão modular.

Cada personagem possui sua própria estrutura de dados independente:

```text
src/app/data/characters/
```

Exemplo:

```text
naruto.data.ts
sasuke.data.ts
madara.data.ts
itachi.data.ts
```

Cada arquivo contém:

- informações do personagem
- builds
- PvE guide
- PvP guide
- itens
- cartas
- macros

Isso permite manutenção simples e evolução rápida.

---

## ✨ Funcionalidades Atuais

Atualmente o projeto já conta com:

✅ Home premium  
✅ Sidebar interativa colapsável  
✅ Navbar moderna  
✅ Wiki de personagens  
✅ Busca por personagem  
✅ Filtros avançados  
✅ Ordenação:
- Nome A-Z
- Nome Z-A
- Melhor PvE
- Melhor PvP

✅ Filtros multi-select:
- Tier PvE
- Tier PvP
- Dificuldade
- Tipo de build

✅ Página premium individual por personagem  
✅ Build selector dinâmico  
✅ Persistência de layout via LocalStorage  
✅ Integração com Discord oficial da comunidade  

---

## 🔥 Roadmap

Próximas funcionalidades planejadas:

- [ ] Busca global autocomplete
- [ ] Sistema de hunts
- [ ] Database completa de itens
- [ ] Database de cartas
- [ ] Sistema de quests
- [ ] Eventos em tempo real
- [ ] Battle Pass guide
- [ ] PvP matchup analyzer
- [ ] Build calculator
- [ ] Meta dashboard
- [ ] Fórum interno
- [ ] Painel administrativo
- [ ] Sistema de autenticação
- [ ] Integração com APIs externas

---

## 💻 Como rodar o projeto

### Instalar dependências

```bash
npm install
```

### Rodar ambiente local

```bash
ng serve
```

Acesse:

```bash
http://localhost:4200
```

---

## 🔄 Gerar registry automático de personagens

Sempre que adicionar novos personagens:

```bash
npm run sync:characters
```

Isso gera automaticamente:

```text
src/app/data/characters/registry.ts
```

---

## 🌐 Comunidade Oficial

Discord oficial do Naruto Ultimate:

https://discord.com/invite/JqQkMteB?utm_source=Discord%20Widget&utm_medium=Connect

---


## 👨‍💻 Desenvolvimento

Projeto em desenvolvimento ativo com foco em performance, UX premium e escalabilidade.

---

# Believe it. 🍥