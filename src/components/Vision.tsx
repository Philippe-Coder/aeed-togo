import { Heart, Globe, Shield } from 'lucide-react';
import { IMAGES } from '../lib/images';

const VALUES = [
  {
    icon: Heart,
    title: 'Bien-être de la personne',
    description:
      "Nous plaçons au cœur de nos actions le bien-être de la personne humaine, dans toutes ses dimensions.",
  },
  {
    icon: Shield,
    title: 'Droits humains',
    description:
      "Nous croyons au respect inconditionnel des droits de l'Homme, particulièrement des enfants et des femmes.",
  },
  {
    icon: Globe,
    title: 'Inclusion universelle',
    description:
      "Quelles que soient l'origine, la religion, la culture — chacun mérite d'être accompagné.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="overflow-hidden bg-neutral-950 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        {/* Vision */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90">
              Notre Vision
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Faire des filles et des femmes l'épine dorsale du développement
              inclusif et durable
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Nous croyons que l'autonomisation des filles et des femmes est la clé
              d'un développement qui profite à toute la communauté. Chaque jeune
              fille accompagnée, chaque femme formée, c'est une famille entière qui
              s'élève.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Développement durable', 'Inclusion', 'Autonomisation'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={IMAGES.vision}
                alt={IMAGES.visionAlt}
                className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[480px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-3xl bg-accent-500/20" />
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90">
              Nos Valeurs
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              Ce qui nous guide au quotidien
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-accent-400/30 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/20 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                  <value.icon className="h-7 w-7" />
                </div>
                <h4 className="mt-6 font-display text-xl font-semibold text-white">
                  {value.title}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-white/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
