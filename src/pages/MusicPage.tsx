import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { releases } from "@/data/content";

export default function MusicPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Music</h1>
        <div className="content-grid">
          {releases.slice(0, 3).map((release, i) => (
            <motion.div
              key={release.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/music/${release.slug}`} className="group block">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square rounded-lg overflow-hidden mb-4 relative"
                >
                  <img src={release.image} alt={release.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                </motion.div>
                <p className="label-caps text-xs mb-2">{release.type} · {release.year}</p>
                <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">{release.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{release.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
