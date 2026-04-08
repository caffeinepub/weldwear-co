import { motion } from "motion/react";
import { useState } from "react";
import type { Product } from "../hooks/useQueries";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>("M");

  const badgeNumber = index + 1;

  return (
    <motion.div
      className="card-neon-border rounded-sm bg-card flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      data-ocid={`product.item.${badgeNumber}`}
    >
      {/* Image area */}
      <div className="relative bg-secondary aspect-square overflow-hidden">
        {/* Badge */}
        <span className="absolute top-2 left-2 z-10 font-display text-xs font-black uppercase tracking-widest text-accent-foreground bg-accent/90 px-2 py-1 rounded-sm neon-glow-lime">
          #{badgeNumber}
        </span>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Card content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-foreground leading-tight">
            {product.name}
          </h3>
          <span className="font-display text-base font-black text-neon-cyan whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-xs text-muted-foreground font-body leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Size selectors */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              data-ocid="product.toggle"
              className={`text-xs font-display font-bold uppercase px-2.5 py-1 rounded-sm border transition-all duration-150 ${
                selectedSize === size
                  ? "border-neon-cyan text-neon-cyan bg-neon-cyan/10 neon-glow-cyan"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Amazon CTA */}
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`product.primary_button.${badgeNumber}`}
          className="btn-neon-cyan mt-2 flex items-center justify-center text-xs font-display font-black uppercase tracking-widest px-4 py-3 rounded-sm w-full"
        >
          Buy on Amazon
        </a>
      </div>
    </motion.div>
  );
}
