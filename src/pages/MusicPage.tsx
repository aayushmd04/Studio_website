import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchProjectsFromSupabase, getPublicUrlFromStorage } from "@/lib/supabaseClient";

export default function ProjectsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const rows = await fetchProjectsFromSupabase();
        console.log("Supabase rows:", rows); // Debug log
        const mapped = await Promise.all(rows.map(async (r: any) => ({
          slug: String(r.slug || "").trim(),
          title: String(r.title || "").trim(),
          type: String(r.type || "Project").trim(),
          year: Number(r.year || 2024),
          description: String(r.description || "").trim(),
          image: r.image ? await getPublicUrlFromStorage(r.image) : "",
        })));
        setItems(mapped.filter((it: any) => it.slug));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Failed to load projects from Supabase:", err);
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
                  className="rounded-lg overflow-hidden mb-4 relative w-full"
                >
                  {release.image ? (
                    <img src={release.image} alt={release.title} className="w-full h-auto object-cover block" />
                  ) : (
                    <div className="w-full h-auto bg-secondary/40 min-h-[220px]" />
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
