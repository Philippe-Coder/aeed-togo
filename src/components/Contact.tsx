import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MapPin, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!supabase) {
      setStatus('error');
      setErrorMsg(
        "Le formulaire est momentanément indisponible. Écrivez-nous directement à contact@aeed-togo.org."
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name,
        email,
        subject,
        message,
      });

      if (error) throw error;

      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Une erreur est survenue. Réessayez.'
      );
    }
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Info side */}
          <div>
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
              Contact
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Parlons de votre engagement
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Une question, un projet de parrainage, une proposition de
              partenariat ou un don de livres ? Écrivez-nous — nous répondons à
              chaque message.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-neutral-900">
                    Nos villes d'action
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Lomé · Kpalimé · Atakpamé — Togo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-neutral-900">
                    Email
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    contact@aeed-togo.org
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-primary-200 bg-primary-50 p-6">
              <p className="text-sm leading-relaxed text-primary-800">
                <strong className="font-semibold">Vous êtes enseignant ou éducateur ?</strong>{' '}
                Rejoignez notre réseau de bénévoles et aidez-nous à soutenir les
                enfants au plus près.
              </p>
            </div>
          </div>

          {/* Form side */}
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-lg sm:p-10">
            {status === 'success' ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Message envoyé !
                </h3>
                <p className="mt-3 text-base text-neutral-600">
                  Merci pour votre message. Nous vous répondrons dans les plus
                  brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-neutral-700"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-neutral-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="vous@exemple.com"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-neutral-700"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  >
                    <option value="" disabled>
                      Choisissez un sujet
                    </option>
                    <option value="Parrainage d'enfant">Parrainage d'enfant</option>
                    <option value="Don financier">Don financier</option>
                    <option value="Don de livres">Don de livres</option>
                    <option value="Bénévolat">Bénévolat</option>
                    <option value="Partenariat">Partenariat</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-neutral-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Votre message..."
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />
                    <p className="text-sm text-red-700">{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary-700/20 transition-all hover:bg-primary-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
