# Portfolio JF Prodz — Guide de démarrage

## Structure des fichiers

```
portfolio/
├── index.html        ← Page principale
├── css/
│   └── style.css     ← Tous les styles (couleurs, layout, polices...)
├── js/
│   └── main.js       ← Animations et interactions
├── images/
│   └── photo.jpg     ← TA PHOTO ICI (voir ci-dessous)
└── README.md
```

---

## Comment ajouter ta photo

1. Copie ta photo dans le dossier `images/`
2. Renomme-la `photo.jpg` (ou note son nom exact)
3. Ouvre `index.html` dans un éditeur
4. Trouve ce bloc (vers la ligne 80) :

```html
<!-- OPTION B — Pas encore de photo -->
<div class="hero-photo-placeholder">
  ...
</div>
```

5. **Supprime** ce bloc OPTION B
6. **Décommente** ce bloc OPTION A juste au-dessus :

```html
<img class="hero-photo" src="images/photo.jpg" alt="Jonas — JF Prodz" />
```

---

## Modifications rapides

### Changer les couleurs → `css/style.css`
Lignes 14–22 dans la section `:root` :
- `--gold` → couleur principale dorée
- `--navy` → fond sombre
- `--muted` → texte gris

### Modifier les textes → `index.html`
Recherche les commentaires `✏️ MODIFIE` pour trouver chaque zone éditable.

### Changer les liens → `index.html`
- Upwork : cherche `TON_ID_ICI`
- GitHub : cherche `TON_USERNAME`
- Email : cherche `jfprodz@gmail.com`

---

## Ouvrir en local
Double-clique sur `index.html` — ça s'ouvre directement dans ton navigateur.

## Déployer gratuitement
- **Netlify** : drag & drop du dossier sur netlify.com
- **GitHub Pages** : push sur GitHub, activer Pages dans les settings
- **Vercel** : connecte ton repo GitHub
