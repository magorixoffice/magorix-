import { ProductsFeatured } from "@/components/products/products-featured";
import { ProductsFuture } from "@/components/products/products-future";
import { ProductsHero } from "@/components/products/products-hero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "Magorix Workspace—our flagship product—and what’s next on the roadmap for schools.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main className="flex flex-col bg-background">
      <ProductsHero />
      <ProductsFeatured />
      <ProductsFuture />
    </main>
  );
}
