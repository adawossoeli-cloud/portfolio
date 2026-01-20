# 📋 Guide d'utilisation du Portfolio

## Vue d'ensemble

Ce portfolio est un site web professionnel **100% HTML/CSS/JavaScript vanilla** (pas de frameworks) pour ingénieur en systèmes, réseaux et sécurité.

---

## 🚀 Démarrage rapide

### 1. Accès immédiat
```bash
# Ouvrir simplement le fichier index.html dans votre navigateur
# Pas d'installation, pas de serveur nécessaire
```

### 2. Servir localement (optionnel)
```bash
# Python 3
python3 -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

Accédez à : `http://localhost:8000`

---

## 📝 Personnalisation

### Modification du contenu

**Fichier** : `index.html`

#### 1. Informations personnelles
```html
<div class="nav-logo">
    <span class="logo-symbol">⚙️</span>
    <span class="logo-text">Élie</span>  <!-- Modifier le nom -->
</div>
```

#### 2. Section Héro
```html
<h1 class="hero-title">Ingénieur en Systèmes,<br>Réseaux & Sécurité</h1>
<p class="hero-subtitle">Linux • Sécurité • Virtualisation • Infrastructure</p>
```

#### 3. Projets
```html
<div class="project-card" data-category="infrastructure">
    <!-- Modifier les détails du projet -->
</div>
```

#### 4. Contact
```html
<a href="mailto:contact@elie-portfolio.fr">contact@elie-portfolio.fr</a>
```

### Modification des couleurs

**Fichier** : `style.css`

```css
:root {
    --primary: #0066ff;        /* Couleur principale (bleu) */
    --primary-dark: #0052cc;   /* Bleu foncé */
    --secondary: #ff6b35;      /* Couleur secondaire (orange) */
    --success: #00d084;        /* Vert succès */
    /* ... autres couleurs ... */
}
```

**Palette recommandée pour ingénieur IT** :
- Bleu professionnel : `#0066ff`
- Gris moderne : `#1a1a1a`
- Orange accent : `#ff6b35`
- Vert succès : `#00d084`

### Modification des fonts

**Fichier** : `style.css` et `index.html`

```html
<!-- Google Fonts import -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

Alternatives populaires :
- **Sans-serif** : Inter, Roboto, IBM Plex Sans
- **Monospace** : JetBrains Mono, Fira Code, Courier Prime

---

## 📱 Responsive Design

Le portfolio est optimisé pour :
- **Desktop** : 1200px+
- **Tablet** : 768px - 1200px
- **Mobile** : < 768px

Test sur différents appareils :
```bash
# Chrome DevTools : F12 ou Ctrl+Shift+I
# Puis cliquer sur l'icône "Toggle device toolbar"
```

---

## 🎨 Sections personnalisables

### 1. Section "À propos" (#about)
```html
<div class="about-list">
    <li>Modifier les points clés</li>
    <li>Ajouter/retirer des compétences</li>
</div>
```

### 2. Section "Compétences" (#skills)
```html
<div class="skill-category">
    <h3>Votre catégorie</h3>
    <div class="skill-item">
        <span class="skill-name">Compétence</span>
        <div class="skill-bar">
            <div class="skill-progress" style="width: XX%"></div>
        </div>
    </div>
</div>
```

### 3. Section "Projets" (#projects)
```html
<div class="project-card" data-category="infrastructure">
    <!-- Modifier le titre, description, détails -->
</div>
```

**Catégories disponibles** :
- `infrastructure`
- `security`
- `network`
- `monitoring`

### 4. Section "Formation" (#education)
```html
<div class="education-card certification">
    <!-- Ajouter vos certifications -->
</div>
```

---

## 🔧 Fonctionnalités JavaScript

### 1. Navigation responsive
- Hamburger menu auto sur mobile
- Smooth scroll vers les sections
- Active link highlighting

### 2. Filtrage des projets
```javascript
// Clics automatiques sur les boutons de filtre
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Filtrer et animer les projets
    });
});
```

### 3. Formulaire de contact
```javascript
// Ouvrir le client mail par défaut
// Alternative : intégrer un service comme Formspree, Netlify Forms
```

### 4. Animations
- Fade-in au scroll (Intersection Observer)
- Hover effects sur les cards
- Smooth transitions

---

## 📤 Déploiement

### Option 1 : GitHub Pages (Gratuit)
```bash
# Créer un repo 'portfolio' sur GitHub
# Cloner le repo localement
git clone https://github.com/votre-username/portfolio.git

# Ajouter les fichiers
cp index.html style.css script.js README.md /portfolio/
cd portfolio
git add .
git commit -m "Initial portfolio"
git push origin main

# Activer GitHub Pages dans les settings
# Branche : main, Dossier : root
# Votre portfolio sera à : https://votre-username.github.io/portfolio
```

### Option 2 : Netlify (Gratuit + Features)
```bash
# Drag & drop dossier sur netlify.com
# ou lier votre GitHub repo
```

### Option 3 : Serveur personnel/VPS
```bash
# Transférer les fichiers via SFTP/FTP
# Servir avec Nginx/Apache
```

### Option 4 : Domaine personnalisé
```bash
# Acheter domaine (GoDaddy, Namecheap, OVH)
# Pointer DNS vers GitHub Pages ou Netlify
```

---

## 📊 Formulaire de contact

### Option A : Client mail (défaut)
```javascript
// Dans script.js, modifiez l'email
mailto:contact@elie-portfolio.fr
```

### Option B : Service de formulaire (meilleur)

#### Formspree
```html
<form action="https://formspree.io/f/FORM_ID" method="POST">
    <!-- Les champs du formulaire restent identiques -->
</form>
```

#### Netlify Forms
```html
<!-- Ajouter ces attributs au formulaire -->
<form name="contact" method="POST" netlify>
```

---

## 🖨️ Impression / PDF

### Imprimer depuis le navigateur
1. `Ctrl+P` ou `Cmd+P`
2. Sauvegarder en PDF
3. Styles CSS print optimisés (navbar, footer masqués)

### Générer un PDF professionnel
```bash
# Avec Google Chrome
# Imprimer > Sauvegarder en PDF > Format A4, Marges minimales

# Avec wkhtmltopdf (Linux)
wkhtmltopdf --print-media-type index.html portfolio.pdf
```

---

## 🔍 Optimisation SEO

### Métadonnées (à adapter)
```html
<meta name="description" content="...">
<meta name="author" content="...">
<meta name="keywords" content="...">
```

### Open Graph (réseaux sociaux)
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">
```

---

## 📈 Analytics (optionnel)

### Google Analytics
```html
<!-- Dans <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🐛 Dépannage

### Le site ne s'affiche pas correctement
- Vérifier la structure des fichiers (index.html, style.css, script.js dans le même dossier)
- Vérifier la console du navigateur (F12 > Console)

### Les styles ne s'appliquent pas
- Vérifier le lien CSS dans `index.html`
- Vider le cache du navigateur (Ctrl+Shift+Del)

### JavaScript ne fonctionne pas
- Vérifier le lien script en bas de `index.html`
- Vérifier la console pour les erreurs

### Les polices ne chargent pas
- Vérifier la connexion Internet
- Tester avec les fonts système comme fallback

---

## 🚀 Améliorations possibles

### Court terme
- [ ] Ajouter un dark mode
- [ ] Intégrer Formspree ou Netlify Forms
- [ ] Ajouter un sitemap.xml
- [ ] Optimiser les images

### Moyen terme
- [ ] Créer un blog technique
- [ ] Ajouter des statistiques GitHub
- [ ] Intégrer un système de newsletter
- [ ] Créer une API pour les projets

### Long terme
- [ ] Migrer vers un framework (Next.js, Hugo)
- [ ] Ajouter un système de commentaires
- [ ] Créer une communauté
- [ ] Monétiser le contenu

---

## 📚 Ressources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Design
- [Figma](https://figma.com)
- [Color Palettes](https://coolors.co)
- [Google Fonts](https://fonts.google.com)

### Déploiement
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)

---

## 💬 Support & Questions

**Pour modifier le portfolio** :
1. Éditer les fichiers HTML/CSS/JS
2. Tester localement
3. Pousser vers GitHub/Netlify

**Besoin d'aide ?**
- Consulter la section "Dépannage"
- Vérifier la documentation MDN
- Utiliser Stack Overflow

---

## ✅ Checklist avant publication

- [ ] Nom et titre personnalisés
- [ ] Photo/avatar ajoutée
- [ ] Projets décrits avec détails
- [ ] Compétences mises à jour
- [ ] Formations et certifications listées
- [ ] Email de contact correct
- [ ] Liens GitHub/LinkedIn actifs
- [ ] Site testé sur mobile
- [ ] Formulaire de contact fonctionne
- [ ] Hébergé et accessible en ligne

---

**Bonne chance avec votre portfolio !** 🚀

Pour toute question, n'hésitez pas à me contacter via le formulaire.
