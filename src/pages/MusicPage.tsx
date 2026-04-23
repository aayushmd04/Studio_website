import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { releases as localReleases } from "@/data/content";
import fetchGoogleSheet from "@/lib/googleSheets";
import { fetchProjectsFromSupabase, getPublicUrlFromStorage } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { normalizeImageUrl } from "@/lib/urlUtils";

export default function ProjectsPage() {
  const [items, setItems] = useState(localReleases);

  // Expose env var value for debugging in the UI
  const clientSheetId = (import.meta.env as any).VITE_PROJECTS_SHEET_ID || "";

  useEffect(() => {
    // Prefer Supabase when configured
    (async () => {
      try {
        const supaRows = await fetchProjectsFromSupabase();
        if (supaRows && supaRows.length) {
          const mapped = supaRows.map((r: any) => ({
            slug: String(r.slug || r.Slug || r.slug_text || "").trim(),
            title: String(r.title || r.Title || r.name || "").trim(),
            type: String(r.type || r.Type || "Project").trim(),
            year: Number(r.year || r.Year || 2024),
            description: String(r.description || r.Description || "").trim(),
            image: getPublicUrlFromStorage(r.image) || normalizeImageUrl(r.image || r.Image || ""),
          })).filter((it: any) => it.slug);
          if (mapped.length) {
            setItems(mapped.concat(localReleases.filter(r => !mapped.find((m:any)=>m.slug===r.slug))));
            return;
          }
        }
      } catch (e) {
        // ignore and fall back to sheet/local
      }

      // Fallback to Google Sheets if Supabase not configured or empty
      const sheetId = clientSheetId;
      const sheetName = (import.meta.env as any).VITE_PROJECTS_SHEET_NAME || "Sheet1";
      if (!sheetId) return;

      try {
        const rows = await fetchGoogleSheet(sheetId, sheetName);
        const mapped = rows.map((r: any) => ({
          slug: String(r.slug || r.Slug || r.slug_text || "").trim(),
          title: String(r.title || r.Title || r.name || "").trim(),
          type: String(r.type || r.Type || "Project").trim(),
          year: Number(r.year || r.Year || 2024),
          description: String(r.description || r.Description || "").trim(),
          image: normalizeImageUrl(r.image || r.Image || ""),
        })).filter((it: any) => it.slug);

        if (mapped.length) setItems(mapped.concat(localReleases.filter(r => !mapped.find((m:any)=>m.slug===r.slug))));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Failed to load sheet:", err);
      }
    })();
  }, []);

  return (
    <div className="page-container">
      <div className="page-inner">
        <div className="content-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((release, i) => (
            <motion.div
              key={release.slug || i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link to={`/music/${release.slug}`} className="group block">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.28 }}
                  className="aspect-square rounded-lg overflow-hidden mb-4 relative"
                >
                  {release.image ? (
                    <img src={release.image} alt={release.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-secondary/40" />
                  )}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                </motion.div>

                <p className="label-caps text-xs mb-2">{release.type} · {release.year}</p>
                <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">{release.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">{release.description}</p>

                <span className="inline-block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">View project →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
