import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Music, ShoppingBag, Play } from "lucide-react";
import heroConcert from "@/assets/studio-hero.jpg";
import albumSilentThunder from "@/assets/album-silent-thunder.jpg";
import merchTshirt from "@/assets/merch-tshirt.jpg";
import albumMidnightEcho from "@/assets/album-midnight-echo.jpg";

const showcaseItems = [
  {
    icon: Music,
    category: "New Release",
    label: "Music",
    title: "Silent Thunder",
    subtitle: "Latest Single · Out Now",
    cta: "Listen Now",
    link: "/music/silent-thunder",
    image: albumSilentThunder,
    accentColor: "from-blue-500/60 to-indigo-600/60",
    borderColor: "border-blue-500/40",
    glowColor: "shadow-blue-500/20",
  },
  {
    icon: ShoppingBag,
    category: "Just Dropped",
    label: "Merch",
    title: "Tour 2024 Tee",
    subtitle: "Limited Edition · Black",
    cta: "Shop Now",
    link: "/merch/tour-2024-tshirt",
    image: merchTshirt,
    accentColor: "from-rose-500/60 to-pink-600/60",
    borderColor: "border-rose-500/40",
    glowColor: "shadow-rose-500/20",
  },
  {
    icon: Play,
    category: "New Upload",
    label: "Video",
    title: "Midnight Echo",
    subtitle: "Live Session · Full Set",
    cta: "Watch Now",
    link: "/videos/midnight-echo-live",
    image: albumMidnightEcho,
    accentColor: "from-amber-500/60 to-orange-600/60",
    borderColor: "border-amber-500/40",
    glowColor: "shadow-amber-500/20",
  },
];

export default function Index() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Hero background with Ken Burns */}
      <motion.img
        src={heroConcert}
        alt="Velvet Ruins recording studio with keyboard and DAW"
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

          {/* Gradient overlays — tuned for the studio image's deep blues */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.55)_75%)]" />

      {/* Centered hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pb-32 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-16 h-px bg-foreground/40 mx-auto mb-8"
          />

          <h1 className="font-serif text-8xl md:text-[10rem] lg:text-[12rem] font-black text-foreground tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl">
            <span className="block">Your Vision.</span>
            <span className="block text-foreground/80 italic">Our Sound</span>
          </h1>

          {/* Animated waveform decoration */}
          <div className="flex items-center justify-center gap-1 my-6">
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                className="w-0.5 bg-foreground/30 rounded-full"
                animate={{
                  height: [4, Math.random() * 20 + 6, 4],
                }}
                transition={{
                  duration: 1.2 + Math.random() * 0.8,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <p className="text-foreground/50 text-lg md:text-xl tracking-widest uppercase font-light">
            Immersed in the melody
          </p>
        </motion.div>
      </div>

      {/* Bottom showcase cards */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:pb-12 z-10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
            >
              <Link
                to={item.link}
                className={`group relative flex overflow-hidden rounded-xl border ${item.borderColor} bg-background/40 backdrop-blur-xl hover:bg-background/60 transition-all duration-500 hover:shadow-2xl ${item.glowColor} hover:scale-[1.02]`}
              >
                {/* Vertical label */}
                <div className="relative w-10 md:w-12 flex-shrink-0 flex items-center justify-center border-r border-border/30">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40 rotate-180 whitespace-nowrap"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Image */}
                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Text content */}
                <div className="flex-1 p-3 md:p-4 flex flex-col justify-center min-w-0">
                  <span className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-foreground font-semibold text-sm md:text-base truncate">
                    {item.title}
                  </h3>
                  <p className="text-foreground/40 text-xs mt-0.5">{item.subtitle}</p>
                </div>

                {/* Arrow */}
                <div className="flex items-center pr-4 text-foreground/20 group-hover:text-foreground/60 transition-colors duration-300">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
