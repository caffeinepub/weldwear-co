import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame, RefreshCw, Star, Truck } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Truck,
    title: "Fast Amazon Shipping",
    description:
      "Every order ships directly from Amazon warehouses. Prime-eligible and blazing fast.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description:
      "Amazon's trusted return policy. No hassle, no headaches — 100% backed.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "We design, you wear. Every tee crafted with high-quality materials that feel great all day.",
  },
];

export function AboutPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen" data-ocid="about.page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-xs font-black uppercase tracking-[0.4em] text-neon-cyan mb-3">
            The Story
          </p>
          <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight mb-6">
            WeldWear <span className="neon-text-lime">Co.</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Forged in fire, built for the trade.
          </p>
        </motion.div>

        {/* Brand story */}
        <motion.section
          className="card-neon-border rounded-sm bg-card p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-ocid="about.section"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 rounded-sm bg-neon-cyan/10 neon-glow-cyan">
              <Flame className="w-5 h-5 text-neon-cyan" fill="currentColor" />
            </div>
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight pt-1">
              We Live For The Trade
            </h2>
          </div>
          <div className="font-body text-muted-foreground space-y-4 leading-relaxed">
            <p>
              WeldWear Co. started with a simple belief: the hardest working
              people in America deserve gear that represents them. We design for
              welders, fabricators, pipefitters, and everyone who works with
              fire and metal every day. Every tee we drop is a statement — built
              for the trade.
            </p>
            <p>
              We're a design studio, not a warehouse. Our shirts are sold and
              fulfilled entirely through Amazon, which means you get Prime-speed
              shipping, easy returns, and Amazon's trusted platform — while
              wearing designs that actually mean something to the craft.
            </p>
            <p>
              Whether you're in the shop, at the job site, or living off the
              clock — we design for{" "}
              <span className="text-neon-cyan font-semibold">your trade</span>.
            </p>
          </div>
        </motion.section>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-neon-border rounded-sm bg-card p-6 flex flex-col gap-4"
              data-ocid="about.card"
            >
              <div className="p-2.5 rounded-sm bg-neon-cyan/10 w-fit neon-glow-cyan">
                <feature.icon className="w-5 h-5 text-neon-cyan" />
              </div>
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wider">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/shop"
            data-ocid="about.primary_button"
            className="btn-neon-cyan inline-flex items-center gap-2 text-sm font-display font-black uppercase tracking-widest px-8 py-4 rounded-sm"
          >
            Shop Our Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
