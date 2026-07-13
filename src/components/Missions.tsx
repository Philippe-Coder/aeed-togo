import {
  BookOpen,
  HeartHandshake,
  Library,
  Network,
  Users,
  Scale,
  Laptop,
  GraduationCap,
} from 'lucide-react';
import { IMAGES } from '../lib/images';

const MISSIONS = [
  {
    icon: BookOpen,
    title: 'Soutien scolaire',
    description:
      'Soutien offert aux enfants — en particulier les jeunes filles poursuivant un parcours scolaire prometteur mais dont les ressources sont limitées.',
  },
  {
    icon: Library,
    title: 'Lecture & culture générale',
    description:
      "Soutien dans les matières principales enseignées, lecture, culture générale et constitution d'une bibliothèque de quartier avec des classiques.",
  },
  {
    icon: Laptop,
    title: 'Initiation au numérique',
    description:
      "Initiation des enfants aux outils numériques pour réduire la fracture digitale et les préparer au monde de demain.",
  },
  {
    icon: Scale,
    title: 'Égalité des chances',
    description:
      "L'association s'engage à respecter une parité stricte entre filles et garçons afin de donner à chacun une chance de s'offrir un avenir.",
  },
  {
    icon: HeartHandshake,
    title: "Parrainage d'enfants",
    description:
      "Parrainage des enfants déshérités et favoriser le réemploi des livres et manuels scolaires français pour les remettre aux élèves togolais.",
  },
  {
    icon: Network,
    title: 'Réseau de bénévoles',
    description:
      "Créer un réseau de bénévoles à travers le Togo pour soutenir au plus près les enfants. Présents à Lomé, Kpalimé et Atakpamé.",
  },
  {
    icon: Users,
    title: 'Renforcer les capacités',
    description:
      "Renforcer les capacités des femmes et des jeunes pour les aider à s'impliquer dans le développement durable de leurs communautés.",
  },
  {
    icon: GraduationCap,
    title: 'Autonomisation des jeunes filles',
    description:
      "Aider à la prise en charge de la jeune fille déscolarisée, contribuer à son autonomisation et son insertion professionnelle.",
  },
];

export default function Missions() {
  return (
    <section id="missions" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            Nos Missions
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl">
            Un engagement quotidien pour l'éducation et l'égalité
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Chaque action d'AEED-TOGO vise à offrir aux enfants, aux jeunes filles
            et aux femmes du Togo les moyens de construire leur propre avenir.
          </p>
        </div>

        {/* Featured images */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { src: IMAGES.mission1, alt: IMAGES.mission1Alt, label: 'Lecture' },
            { src: IMAGES.mission2, alt: IMAGES.mission2Alt, label: 'Soutien scolaire' },
            { src: IMAGES.mission3, alt: IMAGES.mission3Alt, label: 'Autonomisation' },
          ].map((img, i) => (
            <div
              key={i}
              className="group relative h-56 overflow-hidden rounded-2xl shadow-lg sm:h-64"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-neutral-900 backdrop-blur-sm">
                {img.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mission cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MISSIONS.map((mission) => (
            <div
              key={mission.title}
              className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:-translate-y-1 hover:border-primary-300 hover:bg-white hover:shadow-xl hover:shadow-primary-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <mission.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-neutral-950">
                {mission.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
