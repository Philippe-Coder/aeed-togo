export type GalleryItem = {
  /** Chemin de l'image. Fichier local -> '/gallery/mon-image.jpg' (déposé dans public/gallery/). */
  src: string;
  /** Description de l'image, lue par les lecteurs d'écran. Toujours la remplir. */
  alt: string;
  title: string;
  /** Légende affichée sous le titre dans la lightbox. Optionnelle. */
  caption?: string;
  /** Catégorie utilisée par les filtres. Ajoute-la aussi dans GALLERY_CATEGORIES. */
  category: string;
};

export const GALLERY_CATEGORIES = [
  'Soutien scolaire',
  'Parrainage',
  'Bibliothèque',
  'Femmes & jeunes filles',
  'Vie de l’association',
] as const;

/**
 * Pour ajouter une photo :
 *  1. Dépose le fichier dans  public/gallery/  (ex: public/gallery/remise-fournitures.jpg)
 *  2. Ajoute une entrée ci-dessous avec  src: '/gallery/remise-fournitures.jpg'
 *
 * Formats conseillés : .webp ou .jpg, largeur ~1600px, moins de 500 Ko.
 */
export const GALLERY: GalleryItem[] = [
  {
    src: 'https://images.pexels.com/photos/14909652/pexels-photo-14909652.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Écoliers en uniforme bleu rassemblés dans la cour de leur école',
    title: 'Rentrée scolaire',
    caption: 'Les élèves accompagnés par AEED-TOGO à la rentrée.',
    category: 'Soutien scolaire',
  },
  {
    src: 'https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Deux élèves lisant et écrivant sur leurs pupitres en classe',
    title: 'Heure de lecture',
    caption: 'Travail sur les matières principales et la lecture.',
    category: 'Bibliothèque',
  },
  {
    src: 'https://images.pexels.com/photos/32293359/pexels-photo-32293359.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Élève levant la main dans une salle de classe, entourée de camarades',
    title: 'En classe',
    caption: 'Parité stricte entre filles et garçons dans nos actions.',
    category: 'Soutien scolaire',
  },
  {
    src: 'https://images.pexels.com/photos/21036083/pexels-photo-21036083.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Femmes ouest-africaines en pagne wax lors d’une réunion communautaire',
    title: 'Réunion communautaire',
    caption: 'Renforcer les capacités des femmes de la communauté.',
    category: 'Femmes & jeunes filles',
  },
  {
    src: 'https://images.pexels.com/photos/28646079/pexels-photo-28646079.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Jeune fille écrivant avec application à son pupitre',
    title: 'Autonomisation des jeunes filles',
    caption: 'Chaque jeune fille accompagnée, c’est une famille qui s’élève.',
    category: 'Femmes & jeunes filles',
  },
  {
    src: 'https://images.pexels.com/photos/36188072/pexels-photo-36188072.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Élèves en uniforme rassemblés dans la cour de récréation',
    title: 'Récréation',
    caption: 'Nos bénévoles présents à Lomé, Kpalimé et Atakpamé.',
    category: 'Vie de l’association',
  },
  {
    src: 'https://images.pexels.com/photos/28593044/pexels-photo-28593044.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Enfants souriants à la fenêtre de leur salle de classe',
    title: 'Enfants parrainés',
    caption: 'Le parrainage, 30 € par mois, change une scolarité.',
    category: 'Parrainage',
  },
  {
    src: 'https://images.pexels.com/photos/34211747/pexels-photo-34211747.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Élèves attentifs assis sur les bancs d’une salle de classe',
    title: 'Cours de soutien',
    caption: 'Accompagnement des élèves aux ressources limitées.',
    category: 'Soutien scolaire',
  },
];
