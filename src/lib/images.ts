const pexels = (id: number, width: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const IMAGES = {
  hero: pexels(14909652, 1920),
  heroAlt:
    'Écoliers ouest-africains en uniforme bleu dans la cour de leur école',
  about: pexels(32293359, 1600),
  aboutAlt:
    "Élève levant la main dans une salle de classe au Togo, entourée de camarades en uniforme",
  mission1: pexels(26855714, 1200),
  mission1Alt: 'Deux élèves lisant et écrivant sur leurs pupitres en classe',
  mission2: pexels(36188072, 1200),
  mission2Alt:
    "Élèves ouest-africains en uniforme rassemblés dans la cour de récréation",
  mission3: pexels(21036083, 1200),
  mission3Alt:
    'Femmes ouest-africaines en pagne wax lors d’une réunion communautaire',
  vision: pexels(28646079, 1600),
  visionAlt:
    "Jeune fille écrivant avec application à son pupitre dans une salle de classe",
  donate: pexels(28593044, 1600),
  donateAlt: 'Enfants souriants à la fenêtre de leur salle de classe',
  ctaAlt: 'Enfants ouest-africains apprenant dans une salle de classe',
  cta: pexels(34211747, 1920),
};
