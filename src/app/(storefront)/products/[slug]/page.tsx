import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductImageGallery } from "@/features/storefront/components/product-image-gallery";
import { ProductInfo } from "@/features/storefront/components/product-info";
import { RelatedProducts } from "@/features/storefront/components/related-products";

interface ProductDetail {
  id: string;
  slug: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  category: string;
  isNew?: boolean;
  sku: string;
  inStock: boolean;
  images: string[];
}

const BAGZILLAS_CATALOG: Record<string, ProductDetail> = {
  "s1-premium-leather-backpack": {
    id: "albus-s1-bundle",
    slug: "s1-premium-leather-backpack",
    title: "S1 Premium Leather Backpack + One Fanny Bag Free",
    price: 2499,
    compareAtPrice: 4999,
    description:
      "Crafted from premium textured synthetic leather, the S1 Premium Leather Backpack combines modern elegance with smart functionality. Features a spacious main compartment, dedicated laptop protection, and includes a matching Fanny Bag absolutely FREE with this limited launch bundle.",
    category: "Backpacks",
    sku: "BAGZILLAS-S1-PREMIUM",
    inStock: true,
    images: [
      "https://www.albus.pk/cdn/shop/files/media.jpg?v=1784714546&width=896",
      "https://www.albus.pk/cdn/shop/files/1sst.png?v=1781867609&width=768",
      "https://www.albus.pk/cdn/shop/files/7thh.png?v=1781896441&width=768",
      "https://www.albus.pk/cdn/shop/files/3rdd.png?v=1781896451&width=768",
      "https://www.albus.pk/cdn/shop/files/9thh.png?v=1781896457&width=793",
    ],
  },
  "the-onyx-backpack": {
    id: "albus-onyx",
    slug: "the-onyx-backpack",
    title: "The Onyx Backpack",
    price: 1999,
    compareAtPrice: 4999,
    description:
      "Meet the Onyx Backpack—where sleek minimalist aesthetics meet ultimate everyday functionality. Designed for university students, commuters, and travelers with water-resistant fabric, multi-pocket smart organization, and air-mesh ergonomic back padding.",
    category: "Backpacks",
    sku: "BAGZILLAS-ONYX-01",
    inStock: true,
    isNew: true,
    images: [
      "https://www.albus.pk/cdn/shop/files/Black_4.png?v=1784643766&width=1122",
      "https://www.albus.pk/cdn/shop/files/Black_3.png?v=1784643766&width=1122",
      "https://www.albus.pk/cdn/shop/files/Black_2.png?v=1784643766&width=1254",
      "https://www.albus.pk/cdn/shop/files/Brown_3.png?v=1784643766&width=1122",
      "https://www.albus.pk/cdn/shop/files/Grey_1.png?v=1784643766&width=1122",
    ],
  },
  "all-in-one-carry-bag": {
    id: "albus-all-in-one",
    slug: "all-in-one-carry-bag",
    title: "All in One Carry Bag",
    price: 2490,
    compareAtPrice: 3200,
    description:
      "A versatile gym, travel, and everyday carry bag engineered with a dedicated zippered bottom shoe compartment to keep footwear isolated from clean apparel. Sized at 19\" x 13\" x 6\" with high-elasticity side pockets and durable water-resistant construction.",
    category: "Travel Bags",
    sku: "BAGZILLAS-AIO-01",
    inStock: true,
    images: [
      "https://www.albus.pk/cdn/shop/files/Black_Bag_1.png?v=1785407749&width=1254",
      "https://www.albus.pk/cdn/shop/files/Black_Bag_2.png?v=1785407750&width=1254",
      "https://www.albus.pk/cdn/shop/files/Black_Bag_3.png?v=1785407750&width=1254",
      "https://www.albus.pk/cdn/shop/files/Grey_Bag_1.png?v=1785407751&width=1254",
    ],
  },
  "s1-backpack": {
    id: "albus-s1",
    slug: "s1-backpack",
    title: "S1 BackPack",
    price: 2390,
    compareAtPrice: 3000,
    description:
      "The flagship S1 BackPack features a modern matte finish, generous interior volume for 15.6\" laptops, books, and gadgets, and ergonomic shoulder straps for effortless daily commuting across Pakistan.",
    category: "Backpacks",
    sku: "BAGZILLAS-S1-STD",
    inStock: true,
    isNew: true,
    images: [
      "https://www.albus.pk/cdn/shop/files/5.jpg?v=1782210619&width=768",
      "https://www.albus.pk/cdn/shop/files/14.jpg?v=1782210630&width=768",
      "https://www.albus.pk/cdn/shop/files/13.jpg?v=1782210637&width=768",
      "https://www.albus.pk/cdn/shop/files/2.jpg?v=1782210650&width=768",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = BAGZILLAS_CATALOG[slug];
  if (!product) return { title: "Product | Bagzillas Pakistan" };

  return {
    title: `${product.title} | Bagzillas Pakistan`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = BAGZILLAS_CATALOG[slug] || BAGZILLAS_CATALOG["s1-backpack"];

  return (
    <>
      <SectionContainer className="py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <ProductImageGallery images={product.images} productName={product.title} />
          <div className="lg:py-4">
            <ProductInfo product={product} />
          </div>
        </div>
      </SectionContainer>

      <RelatedProducts />
    </>
  );
}
