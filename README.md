<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://www.laplateforme.com/cms/i?o=%2Fsites%2Fdefault%2Ffiles%2F2017-04%2Flogo_pdb_bsl-1.jpg" alt="Pdb logo" width="200">
  </a>
</p>

<h3 align="center">pdb_style</h3>

<p align="center">
  Librairie CSS pour La Plateforme du Bâtiment
  <br>
  <a href="#documentation"><strong>Voir la doc »</strong></a>
</p>


## Sommaire

- [Quick start](#quick-start)
- [Inclus](#whats-included)
- [Documentation](#documentation)
- [Developpement](#dev)

## Quick start

- Installer avec npm: `npm i Core-Techs-Git/pdb_style#master`
- Ajouter le fichier css au script gulp `css:libs` du projet:
```
gulp.task('css:libs', () => {
    return gulp.src([
        ...,
        'node_modules/pdb_style/public/dist/pdb-style.min.css',
        ...
    ])
        .pipe(concat('vendor.css'));
        .pipe(gulp.dest('public/dist/stylesheets'));
});
```
## Inclus

Cette librairie permet de designer simplement les composants réccurents des sites La Plateforme du Bâtiment.
- Header
- Boutons
- Breadcrumb
- Loader
- Login form
- Cartouche prix
- Ajout au panier
- Selection de quantité
- Carte produit
- Tableaux
- Ligne produit

Deux thèmes sont inclus :
- Standard (*pdb-style*) utilisé sur pdb_node, pdb_hermes, pdb_faf
- Minimal (*pdb-minimal-style*) utilisé sur pdb_icc, pdb_fce

## Documentation

### Header
### Boutons
### Breadcrumb
### Loader
### Login form
### Cartouche prix
### Ajout au panier
### Selection de quantité
### Carte produit
### Tableaux
### Ligne produit

## Developpement

- Installer l'environnement avec: `npm i`
- Installer l'extension Chrome [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
- Executer `npm run dev` pour lancer le serveur de developpement
- Se rendre sur http://127.0.0.1:8080
- Activer l'extension LiveReload
- Tout changement sur les fichiers sass sont pris en compte immédiatement
- Le code HTML des composants doit se trouver dans `public/components`

