import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Flame, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
import { ProductCard } from "../components/ProductCard";
import { useGetAllProducts } from "../hooks/useQueries";

const SKELETON_KEYS = ["a", "b", "c", "d"];

export function HomePage() {
  const { data: products, isLoading } = useGetAllProducts();
  const featuredProducts = products?.slice(0, 4) ?? [];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-ocid="hero.section"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-welding.dim_1600x800.jpg"
            alt="Welder at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          {/* Spark overlay effect */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, oklch(0.7 0.18 55 / 0.12) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-display text-xs font-black uppercase tracking-[0.4em] text-weld-orange mb-4">
              Built by Welders, Worn with Pride
            </p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold uppercase leading-none tracking-tight mb-6">
              FORGE YOUR <span className="weld-text-orange">STYLE</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-md mx-auto">
              Hard-hitting tees for the trade — Bold welder gear, fulfilled fast
              via Amazon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                to="/shop"
                data-ocid="hero.primary_button"
                className="btn-weld inline-flex items-center gap-2 text-sm font-display font-black uppercase tracking-widest px-8 py-4 rounded-sm"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-widest px-8 py-4 rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Welder Features Banner */}
      <section className="py-10 border-y border-weld-border bg-weld-dark">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-12 h-12 rounded-full bg-weld-glow flex items-center justify-center">
                <Flame className="w-6 h-6 text-weld-orange" />
              </div>
              <p className="font-display text-sm font-bold uppercase tracking-widest">
                Born in the Shop
              </p>
              <p className="text-xs text-muted-foreground">
                Designs made for welders, by welders
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-weld-glow flex items-center justify-center">
                <Zap className="w-6 h-6 text-weld-orange" />
              </div>
              <p className="font-display text-sm font-bold uppercase tracking-widest">
                Fast Fulfillment
              </p>
              <p className="text-xs text-muted-foreground">
                Shipped fast through Amazon Prime
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-weld-glow flex items-center justify-center">
                <Shield className="w-6 h-6 text-weld-orange" />
              </div>
              <p className="font-display text-sm font-bold uppercase tracking-widest">
                Built Tough
              </p>
              <p className="text-xs text-muted-foreground">
                Premium quality tees that last
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section
        className="py-20 px-4 max-w-7xl mx-auto"
        data-ocid="arrivals.section"
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-xs font-black uppercase tracking-[0.4em] text-weld-orange mb-3">
            Hot Off the Press
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight">
            New Arrivals
          </h2>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="arrivals.loading_state"
          >
            {SKELETON_KEYS.map((k) => (
              <Skeleton key={k} className="aspect-square rounded-sm" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard
                key={product.id.toString()}
                product={product}
                index={i}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/shop"
            data-ocid="arrivals.primary_button"
            className="btn-weld inline-flex items-center gap-2 text-sm font-display font-black uppercase tracking-widest px-8 py-4 rounded-sm"
          >
            View All Tees <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Collections */}
      <section
        className="py-20 px-4 max-w-7xl mx-auto"
        data-ocid="collections.section"
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-xs font-black uppercase tracking-[0.4em] text-weld-orange mb-3">
            Welder Collections
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight">
            Shop the Trade
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Collection 1 */}
          <motion.div
            className="relative overflow-hidden rounded-sm aspect-[16/9] group cursor-pointer card-weld-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            data-ocid="collections.card"
          >
            <img
              src="/assets/generated/welding-sparks-1.dim_600x600.jpg"
              alt="Welder Essentials"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-center">
                WELDER <br />
                <span className="weld-text-orange">ESSENTIALS</span>
              </h3>
              <Link
                to="/shop"
                data-ocid="collections.primary_button"
                className="mt-6 btn-weld inline-flex items-center gap-2 text-xs font-display font-black uppercase tracking-widest px-6 py-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Shop Collection
              </Link>
            </div>
          </motion.div>

          {/* Collection 2 */}
          <motion.div
            className="relative overflow-hidden rounded-sm aspect-[16/9] group cursor-pointer card-weld-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-ocid="collections.card"
          >
            <img
              src="/assets/generated/welding-sparks-2.dim_600x600.jpg"
              alt="Sparks & Steel"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-center">
                SPARKS &amp; <br />
                <span className="weld-text-steel">STEEL</span>
              </h3>
              <Link
                to="/shop"
                data-ocid="collections.secondary_button"
                className="mt-6 btn-weld inline-flex items-center gap-2 text-xs font-display font-black uppercase tracking-widest px-6 py-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Shop Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welder Pride CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-weld-dark" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.6 0.18 55 / 0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-xs font-black uppercase tracking-[0.4em] text-weld-orange mb-4">
              Represent the Trade
            </p>
            <h2 className="font-display text-5xl font-extrabold uppercase tracking-tight mb-6">
              WELD IT.
              <br />
              <span className="weld-text-orange">WEAR IT.</span>
              <br />
              OWN IT.
            </h2>
            <p className="text-muted-foreground mb-10">
              Every shirt in WeldWear Co. is a nod to the craft — the arc, the
              sparks, the steel. Wear your trade loud.
            </p>
            <Link
              to="/shop"
              className="btn-weld inline-flex items-center gap-2 text-sm font-display font-black uppercase tracking-widest px-10 py-5 rounded-sm"
            >
              Browse All Tees <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
