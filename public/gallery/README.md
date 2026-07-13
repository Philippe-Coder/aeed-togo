# Dossier des photos de la galerie

Dépose ici les photos de l'association (elles sont servies telles quelles par Vite).

## Ajouter une photo

1. Copie ton fichier dans ce dossier, par exemple `remise-fournitures.jpg`.
2. Ouvre `src/lib/gallery.ts` et ajoute une entrée dans le tableau `GALLERY` :

```ts
{
  src: '/gallery/remise-fournitures.jpg',
  alt: 'Bénévoles remettant des fournitures scolaires à des élèves à Kpalimé',
  title: 'Remise de fournitures',
  caption: 'Kpalimé, septembre 2026.',
  category: 'Soutien scolaire',
},
```

Le chemin commence toujours par `/gallery/` (pas `public/`).

## Recommandations

- **Format** : `.webp` de préférence, sinon `.jpg`.
- **Largeur** : environ 1600 px — inutile de mettre du 6000 px, la page serait lente.
- **Poids** : viser moins de 500 Ko par photo.
- **Nom de fichier** : en minuscules, sans espace ni accent (`fete-ecole-lome.jpg`).
- **`alt`** : décris ce que montre la photo, c'est ce que lisent les personnes malvoyantes.

## Catégories

Les catégories des filtres sont listées dans `GALLERY_CATEGORIES` (`src/lib/gallery.ts`).
Pour en créer une nouvelle, ajoute-la dans cette liste puis utilise-la dans `category`.

Les photos d'exemple actuellement affichées pointent vers des URLs Pexels (libres de droits) :
supprime-les de `GALLERY` au fur et à mesure que tu ajoutes tes vraies photos.
