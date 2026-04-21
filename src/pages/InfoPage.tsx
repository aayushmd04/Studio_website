import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";
import heroConcert from "@/assets/hero-concert.jpg";

const members = [
  { name: "Maya Chen", role: "Vocals, Synths" },
  { name: "David Torres", role: "Guitar, Production" },
  { name: "Jordan Lee", role: "Bass" },
  { name: "Sam Rivera", role: "Drums" },
];

export default function InfoPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Info</h1>

            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed text-lg">
                Velvet Ruins emerged from Brooklyn's underground music scene in 2019, blending post-punk 
                aesthetics with electronic experimentation. Led by vocalist Maya Chen and guitarist David Torres, 
                the band has evolved from DIY basement shows to international tours.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Their sound—characterized by atmospheric guitars, driving rhythms, and introspective 
                lyrics—has earned critical acclaim and a devoted following. With three studio albums and 
                countless live performances, Velvet Ruins continues to push boundaries while staying true 
                to their raw, emotional core.
              </p>
            </div>

            <div>
              <h3 className="label-caps mb-4">Members</h3>
              <div className="space-y-3">
                {members.map((m) => (
                  <div key={m.name}>
                    <p className="text-foreground font-medium">{m.name}</p>
                    <p className="text-muted-foreground text-sm">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 space-y-4">
              <h3 className="label-caps mb-2">Contact</h3>
              <a href="mailto:management@velvetruins.com" className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors">
                <Mail className="w-4 h-4" /> management@velvetruins.com
              </a>
              <a href="mailto:press@velvetruins.com" className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors">
                <Mail className="w-4 h-4" /> press@velvetruins.com
              </a>

              <div className="flex gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img src={heroConcert} alt="Velvet Ruins band portrait" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
