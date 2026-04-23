import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Music, ShoppingBag, Play } from "lucide-react";
import IMG4900 from "../assets/IMG_4900.jpg";
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
	// Use simple fade-in animations for both lines

	return (
		<div className="relative min-h-screen w-screen overflow-hidden">
			{/* Hero background with Ken Burns */}
			<motion.img
				src={IMG4900}
				alt="Velvet Ruins recording studio with keyboard and DAW"
				className="absolute inset-0 w-full h-full object-cover"
				style={{ objectPosition: "-50% center" }}
				initial={{ scale: 1, x: 0 }}
				animate={{ scale: 1.12, x: -120 }}
				transition={{
					duration: 36,
					ease: "linear",
					repeat: Infinity,
					repeatType: "reverse",
				}}
			/>

			{/* Grain overlay */}
			<div className="absolute inset-0 grain-overlay pointer-events-none" />

			{/* Gradient overlays — lighter for more background visibility */}
			<div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/25 to-background/70" />
			<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)/0.35)_85%)]" />

			{/* Centered hero content */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pb-32 pt-24">
				<div className="text-center max-w-4xl mx-auto">
					{/* Decorative line */}
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="w-16 h-px bg-foreground/40 mx-auto mb-8"
					/>

					<h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-4">
						<motion.span className="block text-foreground/85" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
							Your Vision.
						</motion.span>
						<motion.span className="block text-red-500/90" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0 }}>
							Our Sound.
						</motion.span>
					</h1>
				</div>
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
									<span
										className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40 mb-1"
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
									<div
										className={`absolute inset-0 bg-gradient-to-r ${item.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
									/>
								</div>

								{/* Text content */}
								<div className="flex-1 p-3 md:p-4 flex flex-col justify-center min-w-0">
									<span className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
										{item.category}
									</span>
									<h3 className="text-foreground font-semibold text-sm md:text-base truncate">
										{item.title}
									</h3>
									<p className="text-foreground/40 text-xs mt-0.5">
										{item.subtitle}
									</p>
								</div>

								{/* Arrow */}
								<div className="flex items-center pr-4 text-foreground/20 group-hover:text-foreground/60 transition-colors duration-300">
									<svg
										className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 5l7 7-7 7"
										/>
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
