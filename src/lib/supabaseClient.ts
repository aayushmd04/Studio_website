// Dynamic Supabase client helper
let supabase: any = null;

async function getSupabaseClient() {
  if (supabase) return supabase;
  if (typeof window === 'undefined') return null;
  const SUPABASE_URL = (import.meta.env as any).VITE_SUPABASE_URL || '';
  const SUPABASE_PUBLISHABLE_KEY = (import.meta.env as any).VITE_SUPABASE_PUBLISHABLE_KEY || '';
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) return null;
  const mod = await import('@supabase/supabase-js');
  supabase = mod.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  return supabase;
}

export async function fetchProjectsFromSupabase() {
  const client = await getSupabaseClient();
  if (!client) return [] as any[];
  const { data, error } = await client.from('projects').select('*').order('order', { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function getPublicUrlFromStorage(path?: string) {
  const client = await getSupabaseClient();
  if (!path || !client) return path || '';
  // If already a full URL, return as-is
  if (/^https?:\/\//i.test(path)) return path;
  try {
    const { data } = client.storage.from('images').getPublicUrl(path);
    return data?.publicUrl || path;
  } catch (e) {
    return path;
  }
}
