import { ArrowRight, Heart, BookOpen, Users } from 'lucide-react';
import { IMAGES } from '../lib/images';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt={IMAGES.heroAlt}
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/50 to-neutral-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-8xl flex-col justify-center px-6 py-32 lg:px-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Association togolaise · Lomé · Kpalimé · Atakpamé
            </span>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 mt-6 font-display text-4xl font-semibold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Offrir aux enfants du Togo l'éducation qu'ils méritent
          </h1>

          <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            AEED-TOGO accompagne les enfants et les familles du Togo vers un avenir
            meilleur, par le soutien scolaire, le parrainage, et l'autonomisation
            des femmes et des jeunes filles.
          </p>

          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollTo('#aider')}
              className="group flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-accent-500/30 transition-all hover:bg-accent-600 hover:shadow-2xl hover:shadow-accent-500/40"
            >
              <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
              Parrainer un enfant — 30€/mois
            </button>
            <button
              onClick={() => scrollTo('#missions')}
              className="group flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
            >
              Découvrir nos missions
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-600 mt-16 grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { icon: BookOpen, value: '3', label: 'Villes au Togo' },
              { icon: Users, value: '50/50', label: 'Parité filles/garçons' },
              { icon: Heart, value: '30€', label: 'Par mois, par enfant' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <stat.icon className="h-5 w-5 text-accent-400" />
                  <span className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </span>
                </div>
                <span className="mt-1 text-xs text-white/60 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
