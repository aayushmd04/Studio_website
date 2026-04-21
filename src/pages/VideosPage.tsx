import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { videos } from "@/data/content";

export default function VideosPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Videos</h1>
        <div className="content-grid">
          {videos.slice(0, 3).map((video, i) => (
            <motion.div
              key={video.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/videos/${video.slug}`} className="group block">
                <div className="aspect-video rounded-lg overflow-hidden relative mb-3">
                  <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm border-2 border-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-background/80 text-foreground text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <p className="label-caps text-xs mb-1">{video.type}</p>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{video.title}</h2>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
