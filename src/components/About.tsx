import { IMAGES } from '../lib/images';

export default function About() {
  return (
    <section id="historique" className="bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-neutral-900/10">
              <img
                src={IMAGES.about}
                alt={IMAGES.aboutAlt}
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px]"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-3xl bg-primary-200/60" />
            <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-3xl bg-accent-100" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur-sm">
              <p className="font-display text-2xl font-semibold text-primary-700">
                AEED
              </p>
              <p className="text-xs text-neutral-500">
                Association en faveur de l'Éducation
                <br />
                de l'Enfant et du Développement au Togo
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
              Historique
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Née de l'engagement d'éducateurs pour un Togo meilleur
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
              <p>
                Le Togo, comme de nombreux pays en développement, est confronté à
                divers défis en matière d'éducation. L'accès limité à l'éducation,
                en particulier dans les zones rurales, les taux d'abandon élevés
                pour faute de moyens financiers et la qualité de l'enseignement
                sont des problèmes persistants.
              </p>
              <p>
                C'est pour agir contre cet état de fait qu'a été initiée
                l'Association en faveur de l'Éducation de l'Enfant et du
                Développement au Togo, en abrégé{' '}
                <strong className="font-semibold text-primary-700">AEED-TOGO</strong>.
                Née de l'initiative d'éducateurs et de personnes désirant améliorer
                la situation de précarité socioéconomique des enfants et des
                familles du Togo, l'association apporte une contribution
                significative à la promotion de l'éducation de qualité.
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { value: 'Lomé', label: 'Présence' },
                { value: 'Kpalimé', label: 'Bénévoles' },
                { value: 'Atakpamé', label: 'Réseau' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <p className="font-display text-lg font-semibold text-neutral-900">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
