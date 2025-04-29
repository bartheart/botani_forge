import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About Us</Link>
      </div>
      <div>
        <div>
          <h2>At [Your Business Name], gardens aren't just plants — they're memories.</h2>
          <p>Our handcrafted beds are made to last and designed to make growing easy, whether you're a seasoned gardener or just starting out.</p>
          <p>Let’s grow something amazing together.</p>
          <Link href="/products">[Shop Now]</Link>
        </div>
        <div>
          <img src="/garden_bed.jpeg"/>
        </div>
      </div>
    </main>
  );
}
