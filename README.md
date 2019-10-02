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
- Formulaires
- Breadcrumb
- Loader
- Login form
- Cartouche prix
- Ajout au panier
- Selection de quantité
- Carte produit
- Ligne produit
- Tableau de totaux

Deux thèmes sont inclus :
- Standard (*pdb-style*) utilisé sur pdb_node, pdb_hermes, pdb_faf
- Minimal (*pdb-minimal-style*) utilisé sur pdb_icc, pdb_fce

## Documentation

### Header

    <header class="pdb-header">
        <div class="pdb-branding">
            <a href="/" title="Retour à l'accueil">
                <img src="https://www.laplateforme.com/cms/i?o=%2Fsites%2Fdefault%2Ffiles%2F2017-04%2Flogo_pdb_bsl-1.jpg" alt="Logo de la plateforme du bâtiment">
            </a>
        </div>
        <div class="header-items-container">
            <a href="/" class="header-item">
                <i class="fi fi-shopping-store icon"></i>
                <div class="header-item-label">Dépôt</div>
            </a>
            <div class="header-item">
                <i class="fi fi-shopping-basket icon"></i>
                <div class="header-item-label">Panier</div>
            </div>
        </div>
    </header>

### Boutons

Les trois types de boutons :

    <button class="pdb-btn btn-orange">Bouton orange</button>
    <button class="pdb-btn btn-black">Bouton noir</button>
    <button class="pdb-btn btn-clear">Bouton transparent</button>

Un bouton désactivé :

    <button class="pdb-btn btn-black" disabled>Bouton disabled</button>

Pour changer la taille d'un bouton, il faut changer la font-size du parent :

    <div style="font-size: 20px">
        <button class="pdb-btn btn-orange">Gros bouton</button>
    </div>

    <div style="font-size: 12px">
        <button class="pdb-btn btn-orange">Petit bouton</button>
    </div>

### Formulaires

Styliser les champs :

    <input type="text" class="form-input" />
    <select class="form-input"></select>
    <textarea class="form-input"></textarea>

Intégrer un champ avec un libellé :

    <div class="form-item">
        <label for="i1">Libellé</label>
        <input type="text" class="form-input" id="i1" />
    </div>

Pour un champ requis :

    <label for="i1" class="required">Libellé</label>

### Breadcrumb
### Loader
### Login form
### Cartouche prix
### Ajout au panier
### Selection de quantité

Selecteur associé à un bouton d'ajout :

    <div class="quantity-selector express-style">
        <button class="quantity-adjust-btn" type="button"><i class="fi fi-minus-a"></i></button>
        <input type="number" class="product-quantity" min="1" maxlength="4">
        <button class="quantity-adjust-btn" type="button"><i class="fi fi-plus-a"></i></button>
    </div>

Pour changer la taille du selecteur, il faut changer la font-size du parent.


Modificateur dans une liste :

    <div class="quantity-selector list-style">
        <button class="quantity-adjust-btn" type="button"><i class="fi fi-minus-a"></i></button>
        <input type="number" class="product-quantity"min="1" maxlength="4">
        <button class="quantity-adjust-btn" type="button"><i class="fi fi-plus-a"></i></button>
    </div>

### Carte produit
### Tableaux
### Ligne produit
### Tableau des totaux

Le tableau doit être défini avec la classe :

    <table class="pdb-totals-table">
        ...
    </table>

Dans celui-ci peut être ajouté les lignes suivantes :

    <tr class="row-primary"><th>Label</th><td>Valeur</td></tr> // Ligne orange
    <tr class="row-secondary"><th>Label</th><td>Valeur</td></tr> // Ligne noire

    <tr class="row-secondary small"><th>Label</th><td>Valeur</td></tr> // Petite ligne


## Developpement

- Installer l'environnement avec: `npm i`
- Installer l'extension Chrome [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
- Executer `npm run dev` pour lancer le serveur de developpement
- Se rendre sur http://127.0.0.1:8080
- Activer l'extension LiveReload
- Tout changement sur les fichiers sass sont pris en compte immédiatement
- Le code HTML des composants doit se trouver dans `public/index.html`

