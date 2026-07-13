import { Heart, BookOpen, Mail, ArrowRight } from 'lucide-react';

const WAYS_TO_HELP = [
  {
    icon: Heart,
    title: 'Parrainer un enfant',
    price: '30€/mois',
    description:
      "Soutenez un enfant tout au long de sa scolarité. Votre parrainage couvre les manuels, le soutien scolaire et le matériel nécessaire à sa réussite.",
    highlight: true,
  },
  {
    icon: BookOpen,
    title: 'Constituer une bibliothèque',
    price: 'Don libre',
    description:
      "Aidez-nous à nous établir pour offrir une bibliothèque de qualité aux enfants. Chaque livre est une fenêtre ouverte sur le monde.",
    highlight: false,
  },
  {
    icon: Mail,
    title: 'Don en nature',
    price: 'Livres & manuels',
    description:
      "Favorisez le réemploi de vos livres et manuels scolaires français en les remettant à disposition des élèves togolais que nous soutenons.",
    highlight: false,
  },
];

export default function Donate() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="aider" className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-semibold text-accent-700">
            Nous aider ?
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl">
            Ensemble, changeons l'avenir d'un enfant
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Chaque geste compte. Que ce soit par un parrainage, un don ou le don de
            livres, votre soutien a un impact direct et durable sur la vie des
            enfants et des familles au Togo.
          </p>
        </div>

        {/* Donation cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {WAYS_TO_HELP.map((way) => (
            <div
              key={way.title}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1 ${
                way.highlight
                  ? 'border-accent-300 bg-white shadow-xl shadow-accent-500/10 hover:shadow-2xl hover:shadow-accent-500/20'
                  : 'border-neutral-200 bg-white hover:border-primary-300 hover:shadow-xl'
              }`}
            >
              {way.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  Le plus impact
                </span>
              )}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  way.highlight
                    ? 'bg-accent-500 text-white'
                    : 'bg-primary-100 text-primary-700'
                }`}
              >
                <way.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                {way.title}
              </h3>
              <p className="mt-1 font-display text-2xl font-semibold text-accent-600">
                {way.price}
              </p>
              <p className="mt-4 flex-1 text-base leading-relaxed text-neutral-600">
                {way.description}
              </p>
              <button
                onClick={() => scrollTo('#contact')}
                className={`group mt-6 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  way.highlight
                    ? 'bg-accent-500 text-white hover:bg-accent-600'
                    : 'bg-neutral-100 text-neutral-800 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                Nous contacter
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 shadow-2xl">
          <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Votre don en livres peut changer une vie
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Nous collectons des livres et manuels scolaires français pour les
                remettre à disposition des élèves togolais. Si vous avez des livres
                à donner, contactez-nous — nous organisons l'acheminement.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <button
                onClick={() => scrollTo('#contact')}
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary-700 transition-all hover:bg-neutral-100"
              >
                Donner des livres
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
