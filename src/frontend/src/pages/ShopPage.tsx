import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { ProductCard } from "../components/ProductCard";
import { useGetAllProducts } from "../hooks/useQueries";

const SKELETON_KEYS = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function ShopPage() {
  const { data: products, isLoading, isError } = useGetAllProducts();

  return (
    <main className="pt-24 pb-20 min-h-screen" data-ocid="shop.page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-xs font-black uppercase tracking-[0.4em] text-neon-cyan mb-3">
            Amazon Fulfilled
          </p>
          <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight mb-4">
            The Collection
          </h1>
          <p className="font-body text-base text-muted-foreground max-w-md mx-auto">
            Every tee ships direct from Amazon — fast delivery, easy returns,
            guaranteed quality.
          </p>
        </motion.div>

        {/* Loading state */}
        {isLoading && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="shop.loading_state"
          >
            {SKELETON_KEYS.map((k) => (
              <div key={k} className="flex flex-col gap-3">
                <Skeleton className="aspect-square rounded-sm" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div
            className="text-center py-20 text-destructive"
            data-ocid="shop.error_state"
          >
            <p className="font-display text-lg">
              Could not load products. Please refresh.
            </p>
          </div>
        )}

        {/* Products grid */}
        {!isLoading &&
          !isError &&
          products &&
          (products.length === 0 ? (
            <div className="text-center py-20" data-ocid="shop.empty_state">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="font-display text-xl font-bold uppercase text-muted-foreground">
                No products yet
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, i) => (
                <ProductCard
                  key={product.id.toString()}
                  product={product}
                  index={i}
                />
              ))}
            </div>
          ))}
      </div>
    </main>
  );
}
