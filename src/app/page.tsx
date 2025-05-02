import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About Us</Link>
      </nav>
      <div className="flex">
        <div>
          <h2>At [Your Business Name], gardens aren&apos;t just plants — they&apos;re memories.</h2>
          <p>Our handcrafted beds are made to last and designed to make growing easy, whether you&apos;re a seasoned gardener or just starting out.</p>
          <p>Let&apos;s grow something amazing together.</p>
          <Link href="/products">[Shop Now]</Link>
        </div>
        <div>
          <Image 
            src="/garden_bed.jpeg"
            alt="Garden Bed"
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}