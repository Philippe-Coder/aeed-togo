import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

/**
 * `null` quand les variables d'environnement sont absentes (ex. variables non
 * configurées sur l'hébergeur). Le site reste affichable — seul le formulaire
 * de contact est désactivé — au lieu de planter au chargement du module.
 */
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

if (!supabase) {
  console.error(
    'Supabase non configuré : définissez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY ' +
      "dans les variables d'environnement, puis redéployez."
  );
}
