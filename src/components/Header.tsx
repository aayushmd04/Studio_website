import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/swaralogy-logo.png";

const navLinks = [
	{ label: "Projects", path: "/music" },
	{ label: "About us", path: "/info" },
	{ label: "Contact us", path: "/contact" },
];

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const { pathname } = useLocation();

	return (
		<>
			{/* Left sidebar with links (desktop) */}
			<aside className="fixed left-0 top-0 bottom-0 z-[10010] hidden md:flex flex-col items-center md:items-start gap-6 bg-transparent p-6 md:px-8 md:py-10 w-20 md:w-64 pt-28 md:pt-48">
				<nav className="flex flex-col items-center md:items-start gap-3 mt-4 w-full">
					{navLinks.map((link) => (
						<motion.div
							key={link.path}
							whileHover={{ y: -4, scale: 1.08 }}
							whileTap={{ scale: 0.98 }}
							animate={pathname === link.path ? { y: -6, scale: 1.18 } : { y: 0, scale: 1 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
							className="w-full h-12 md:h-14 overflow-visible flex items-center"
							style={{ zIndex: pathname === link.path ? 10020 : undefined, transformOrigin: 'left center' }}
						>
							<Link
								to={link.path}
								className={`no-underline w-full text-left px-2 md:px-4 h-full flex items-center rounded-md text-base md:text-xl font-semibold uppercase tracking-[0.12em] transition-colors ${
									pathname === link.path
										? "text-foreground"
										: "text-foreground/60 hover:text-foreground"
								}`}
							>
								{link.label}
							</Link>
						</motion.div>
					))}
				</nav>
			</aside>

			{/* Top header with centered logo (all sizes) */}
			<header className="fixed top-0 left-0 right-0 z-[9999] bg-transparent">
				<div className="max-w-7xl mx-auto px-4 py-0 h-32 md:h-48 flex items-center justify-center">
					{/* Centered logo - enlarged */}
					<Link
						to="/"
						aria-label="Swaralogy — home"
						className="flex items-center justify-center pointer-events-auto"
					>
						<img
							src={logo}
							alt="Swaralogy — the home studio"
							className="relative z-[10000] h-36 md:h-56 w-auto object-contain"
						/>
					</Link>

					{/* Mobile menu button */}
					<button
						className="md:hidden absolute right-4 top-4 text-foreground pointer-events-auto"
						onClick={() => setMobileOpen(true)}
						aria-label="Open menu"
					>
						<Menu className="w-6 h-6" />
					</button>
				</div>
			</header>

			{/* Mobile full-screen menu */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "tween", duration: 0.3 }}
						className="fixed inset-0 bg-background z-[60] md:hidden flex flex-col items-center justify-center gap-8"
					>
						<button
							className="absolute top-6 right-6 text-foreground"
							onClick={() => setMobileOpen(false)}
							aria-label="Close menu"
						>
							<X className="w-6 h-6" />
						</button>

						{navLinks.map((link) => (
							<motion.div
								key={link.path}
								whileHover={{ y: -6, scale: 1.1 }}
								whileTap={{ scale: 0.98 }}
								animate={pathname === link.path ? { y: -8, scale: 1.22 } : { y: 0, scale: 1 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
								className="overflow-visible"
								style={{ zIndex: pathname === link.path ? 10020 : undefined, transformOrigin: 'left center' }}
							>
								<Link
									to={link.path}
									onClick={() => setMobileOpen(false)}
									className="no-underline text-3xl font-semibold text-foreground/60 uppercase tracking-widest hover:text-foreground transition-colors"
								>
									{link.label}
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
