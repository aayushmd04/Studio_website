import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = (import.meta.env as any).VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = (import.meta.env as any).VITE_SUPABASE_ANON_KEY || '';

export const supabase: SupabaseClient | null =
  SUPABASE_URL && SUPABASE_ANON_KEY ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

export async function fetchProjectsFromSupabase() {
  if (!supabase) return [] as any[];
  const { data, error } = await supabase.from('projects').select('*').order('order', { ascending: true });
  if (error) throw error;
  return data || [];
}

export function getPublicUrlFromStorage(path?: string) {
  if (!path) return '';
  if (!supabase) return path;
  // If already a full URL, return as-is
  if (/^https?:\/\//i.test(path)) return path;
  try {
    const { data } = supabase.storage.from('images').getPublicUrl(path);
    return data?.publicUrl || path;
  } catch (e) {
    return path;
  }
}
