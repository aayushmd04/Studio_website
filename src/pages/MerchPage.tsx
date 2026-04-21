import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/content";

export default function MerchPage() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Merch</h1>
        <div className="content-grid">
          {products.slice(0, 3).map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/merch/${product.slug}`} className="group block">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square rounded-lg overflow-hidden mb-4"
                >
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </motion.div>
                <span className="inline-block bg-secondary text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">{product.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{product.description}</p>
                <p className="text-foreground font-semibold text-lg mt-3">{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
