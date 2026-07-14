import { useEffect, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Historique', href: '#historique' },
  { label: 'Missions', href: '#missions' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Vision & Valeurs', href: '#vision' },
  { label: 'Nous aider', href: '#aider' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-10">
        <button
          onClick={() => handleNav('#accueil')}
          className="group flex items-center"
          aria-label="AEED-TOGO — retour à l'accueil"
        >
          <img
            src="/logo-wide.png"
            alt="AEED-TOGO — Association en faveur de l'Éducation de l'Enfant et du Développement au Togo"
            className={`w-auto transition-all duration-500 group-hover:scale-105 ${
              scrolled
                ? 'h-12'
                : // Sur le hero sombre, le vert du logo a besoin d'un fond clair pour rester lisible.
                  'h-14 rounded-xl bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm'
            }`}
          />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={() => handleNav('#aider')}
            className="group flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/40"
          >
            <Heart className="h-4 w-4 transition-transform group-hover:scale-110" />
            Faire un don
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
            scrolled
              ? 'text-neutral-800 hover:bg-neutral-100'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-[480px] border-t border-neutral-100' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="rounded-lg px-4 py-3 text-left text-base font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#aider')}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-accent-500/30"
          >
            <Heart className="h-5 w-5" />
            Faire un don
          </button>
        </div>
      </div>
    </header>
  );
}
