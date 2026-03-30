import { ProductsFeatured } from "@/components/products/products-featured";
import { ProductsFuture } from "@/components/products/products-future";
import { ProductsHero } from "@/components/products/products-hero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "Wise Student and Inavora—financial literacy and real-time interactive presentations. See what’s next on the Magorix roadmap.",
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
