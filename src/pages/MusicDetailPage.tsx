import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { releases } from "@/data/content";

const platforms = [
  { name: "Apple Music", url: "#" },
  { name: "Spotify", url: "#" },
  { name: "Bandcamp", url: "#" },
  { name: "SoundCloud", url: "#" },
  { name: "YouTube Music", url: "#" },
];

const merchOptions = [
  { name: "Vinyl (Black, Limited Edition)", price: "$29.99" },
  { name: "CD (Digipak)", price: "$14.99" },
  { name: "Digital Download (WAV/MP3)", price: "$9.99" },
  { name: "Vinyl + T-Shirt Bundle", price: "$49.99" },
];

export default function MusicDetailPage() {
  const { slug } = useParams();
  const release = releases.find((r) => r.slug === slug);

  if (!release) {
    return (
      <div className="page-container">
        <div className="page-inner text-center">
          <p className="text-muted-foreground">Release not found.</p>
          <Link to="/music" className="btn-primary mt-4 inline-flex">Back to Music</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-inner">
        <Link to="/music" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Music
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{release.title}</h1>
              <p className="text-muted-foreground text-lg">{release.type} · {release.year}</p>
            </div>

            <p className="text-foreground/80 leading-relaxed">{release.description}</p>

            <div>
              <h3 className="label-caps mb-4">Listen</h3>
              <div className="space-y-3">
                {platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    className="glass-card-hover flex items-center justify-between p-4 group"
                  >
                    <span className="text-foreground font-medium">{p.name}</span>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="label-caps mb-4">Merch</h3>
              <div className="space-y-3">
                {merchOptions.map((m) => (
                  <a
                    key={m.name}
                    href="#"
                    className="glass-card-hover flex items-center justify-between p-4 group"
                  >
                    <span className="text-foreground font-medium">{m.name}</span>
                    <span className="text-muted-foreground font-semibold text-sm">{m.price}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 order-1 lg:order-2"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src={release.image} alt={release.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
