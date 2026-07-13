import { useCallback, useEffect, useMemo, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { GALLERY } from '../lib/gallery';

const ALL = 'Toutes les photos';

export default function Gallery() {
  const [filter, setFilter] = useState<string>(ALL);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(GALLERY.map((i) => i.category)))],
    []
  );

  const items = useMemo(
    () =>
      filter === ALL ? GALLERY : GALLERY.filter((i) => i.category === filter),
    [filter]
  );

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (delta: number) =>
      setLightbox((i) =>
        i === null ? null : (i + delta + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, step]);

  const active = lightbox === null ? null : items[lightbox];

  return (
    <section id="galerie" className="bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            Galerie
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl">
            Nos actions en images
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Retour en photos sur le quotidien des enfants, des jeunes filles et
            des familles que nous accompagnons au Togo.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setLightbox(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'border border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:text-primary-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {items.length === 0 ? (
          <p className="mt-16 text-center text-neutral-500">
            Aucune photo dans cette catégorie pour le moment.
          </p>
        ) : (
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {items.map((item, i) => (
              <button
                key={item.src}
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-md transition-shadow hover:shadow-2xl hover:shadow-neutral-900/15"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent opacity-70 transition-opacity group-hover:opacity-95" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-left">
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-accent-300">
                      {item.category}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Photo précédente"
                className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Photo suivante"
                className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <figure
            className="flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-6 max-w-2xl text-center">
              <p className="font-display text-xl font-semibold text-white sm:text-2xl">
                {active.title}
              </p>
              {active.caption && (
                <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                  {active.caption}
                </p>
              )}
              <p className="mt-4 text-xs font-medium text-white/40">
                {lightbox! + 1} / {items.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
