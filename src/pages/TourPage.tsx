import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { tourDates } from "@/data/content";

export default function TourPage() {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Tour</h1>
        <div className="space-y-4">
          {tourDates.map((show, i) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card-hover p-6 flex flex-col md:flex-row md:items-center md:justify-between ${
                show.status === "sold-out" ? "opacity-60" : ""
              }`}
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <p className="text-3xl font-bold text-foreground">{show.day}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wide">{show.month}</p>
              </div>

              <div className="flex-grow">
                <p className="label-caps text-xs mb-1">{show.city}, {show.state}</p>
                <h2 className="text-xl font-semibold text-foreground mb-1">{show.eventName}</h2>
                <p className="text-foreground/80 text-sm">{show.venue}</p>
              </div>

              <div className="flex-shrink-0 mt-4 md:mt-0">
                {show.status === "available" && (
                  <a href="#" className="btn-primary text-sm py-2 gap-2">
                    Tickets <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {show.status === "sold-out" && (
                  <span className="inline-flex items-center px-6 py-2 rounded-full font-semibold text-sm bg-sold-out/20 text-sold-out-foreground border border-sold-out/30">
                    Sold Out
                  </span>
                )}
                {show.status === "presale" && (
                  <span className="inline-flex items-center px-6 py-2 rounded-full font-semibold text-sm bg-presale/20 text-presale-foreground border border-presale/30">
                    Presale
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
