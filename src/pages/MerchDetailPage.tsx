import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { products } from "@/data/content";

const purchaseLinks = [
  { name: "Bandcamp", url: "#" },
  { name: "Official Store", url: "#" },
];

export default function MerchDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="page-container">
        <div className="page-inner text-center">
          <p className="text-muted-foreground">Product not found.</p>
          <Link to="/merch" className="btn-primary mt-4 inline-flex">Back to Merch</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-inner">
        <Link to="/merch" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Merch
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start space-y-8 order-2 lg:order-1">
            <div>
              <span className="inline-block bg-secondary text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{product.title}</h1>
              <p className="text-foreground text-2xl font-bold">{product.price}</p>
            </div>

            <p className="text-foreground/70 leading-relaxed">{product.description}</p>

            <div>
              <h3 className="label-caps mb-4">Purchase</h3>
              <div className="space-y-3">
                {purchaseLinks.map((p) => (
                  <a key={p.name} href={p.url} className="glass-card-hover flex items-center justify-between p-4 group">
                    <div className="flex items-center gap-3">
                      <span className="text-foreground font-medium">{p.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground font-semibold text-sm">{product.price}</span>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="space-y-4 order-1 lg:order-2">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
