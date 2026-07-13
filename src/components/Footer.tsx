import { Heart, MapPin, Mail, ArrowUp } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Historique', href: '#historique' },
  { label: 'Missions', href: '#missions' },
  { label: 'Vision & Valeurs', href: '#vision' },
  { label: 'Nous aider', href: '#aider' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800">
                <span className="font-display text-xl font-semibold text-white">
                  A
                </span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold">AEED-TOGO</p>
                <p className="text-xs text-white/50">
                  Éducation · Développement
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Association en faveur de l'Éducation de l'Enfant et du Développement
              au Togo. Née de l'initiative d'éducateurs pour améliorer la
              situation de précarité socioéconomique des enfants et des familles
              du Togo.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Lomé', 'Kpalimé', 'Atakpamé'].map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
                >
                  <MapPin className="h-3 w-3" />
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0" />
                contact@aeed-togo.org
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0" />
                Togo, Afrique de l'Ouest
              </li>
            </ul>
            <button
              onClick={() => scrollTo('#aider')}
              className="group mt-6 flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              <Heart className="h-4 w-4 transition-transform group-hover:scale-110" />
              Faire un don
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} AEED-TOGO. Tous droits réservés.
          </p>
          <button
            onClick={() => scrollTo('#accueil')}
            className="group flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white"
          >
            Retour en haut
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
