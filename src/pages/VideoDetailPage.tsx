import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { videos } from "@/data/content";

export default function VideoDetailPage() {
  const { slug } = useParams();
  const video = videos.find((v) => v.slug === slug);

  if (!video) {
    return (
      <div className="page-container">
        <div className="page-inner text-center">
          <p className="text-muted-foreground">Video not found.</p>
          <Link to="/videos" className="btn-primary mt-4 inline-flex">Back to Videos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-inner max-w-4xl">
        <Link to="/videos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Videos
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-video rounded-lg overflow-hidden bg-secondary mb-8">
            <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-2">{video.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
            <span>{video.type}</span>
            <span>·</span>
            <span>{video.duration}</span>
          </div>

          <p className="text-foreground/80 leading-relaxed">
            Experience this visual journey from Velvet Ruins. Filmed with passion and precision, 
            this piece captures the essence of our creative vision.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
