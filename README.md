# Portfólio de Guilherme Azevedo

Um portfólio moderno e responsivo desenvolvido com **HTML, CSS e JavaScript puro**, sem dependências externas.

## 🎨 Design

- **Tema**: Minimalismo Técnico com Acentos Neon
- **Cores**: Preto profundo (#0a0a0a) com acentos ciano neon (#00d9ff)
- **Tipografia**: Poppins (títulos), Inter (corpo), Fira Code (técnico)
- **Animações**: Suaves e elegantes, sem distrações

## 📁 Estrutura do Projeto

```
portfolio-html/
├── index.html          # Arquivo HTML principal
├── css/
│   └── styles.css      # Estilos e animações
├── js/
│   └── script.js       # Interatividade e efeitos
└── images/             # Pasta para imagens (opcional)
```

## 🚀 Como Usar

1. **Extraia o arquivo ZIP**
   ```bash
   unzip portfolio-guilherme-azevedo.zip
   cd portfolio-html
   ```

2. **Abra no navegador**
   - Clique duplo em `index.html` ou
   - Use um servidor local:
     ```bash
     python -m http.server 8000
     # ou
     npx http-server
     ```

3. **Customize o conteúdo**
   - Edite `index.html` para adicionar seus projetos
   - Modifique links de contato (email, LinkedIn, GitHub)
   - Atualize descrições e tecnologias

## ✨ Funcionalidades

- ✅ Navegação suave com scroll automático
- ✅ Animações ao scroll com Intersection Observer
- ✅ Efeitos hover nos cards
- ✅ Navbar responsiva com efeito de blur ao scroll
- ✅ Design totalmente responsivo (mobile, tablet, desktop)
- ✅ Sem dependências externas
- ✅ Sem frameworks (HTML, CSS, JavaScript puro)

## 📝 Seções

1. **Hero** - Apresentação principal com CTA
2. **Sobre** - Informações pessoais e especialização
3. **Skills** - Tecnologias e competências
4. **Projetos** - Portfólio com 2 projetos preenchidos e 2 vazios
5. **Contato** - Links para redes sociais

## 🎯 Próximos Passos

1. Adicione suas imagens na pasta `images/`
2. Preencha os cards vazios de projetos com seus trabalhos
3. Atualize os links de contato (email, LinkedIn, GitHub)
4. Customize as cores em `css/styles.css` se desejar
5. Hospede em um servidor (GitHub Pages, Netlify, Vercel, etc.)

## 💡 Dicas de Customização

### Mudar Cores
Edite as variáveis CSS em `css/styles.css`:
```css
:root {
    --primary: #00d9ff;      /* Cor principal neon */
    --background: #0a0a0a;   /* Cor de fundo */
    --foreground: #e8e8e8;   /* Cor do texto */
    /* ... outras cores */
}
```

### Adicionar Projetos
Duplique um card de projeto em `index.html`:
```html
<div class="project-card">
    <div class="project-icon">🚀</div>
    <h3>Seu Projeto</h3>
    <p>Descrição do projeto...</p>
    <div class="project-tags">
        <span class="tag">Tecnologia 1</span>
        <span class="tag">Tecnologia 2</span>
    </div>
</div>
```

### Adicionar Links de Contato
Atualize os links em `index.html`:
```html
<a href="mailto:seu-email@example.com" class="btn btn-primary">Email</a>
<a href="https://linkedin.com/in/seu-perfil" target="_blank" class="btn btn-secondary">LinkedIn</a>
<a href="https://github.com/seu-usuario" target="_blank" class="btn btn-secondary">GitHub</a>
```

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona perfeitamente em:
- 📱 Celulares (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos, animações e layout
- **JavaScript Vanilla** - Interatividade sem dependências
- **Google Fonts** - Tipografia (Poppins, Inter, Fira Code)

## 📄 Licença

Livre para usar e modificar conforme necessário.

---

Desenvolvido com ❤️ por Guilherme Azevedo
