import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main-container">
      <nav className="nav-menu">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/products" className="nav-link">Products</Link>
        <Link href="/about" className="nav-link">About Us</Link>
      </nav>
      <div className="wrapper">
        <div className="content-left">
          <h2>At [Your Business Name], gardens aren&apos;t just plants — they&apos;re memories.</h2>
          <p>Our handcrafted beds are made to last and designed to make growing easy, whether you&apos;re a seasoned gardener or just starting out.</p>
          <p>Let&apos;s grow something amazing together.</p>
          <Link href="/products" className="shop-button">[Shop Now]</Link>
        </div>
        <div className="content-right">
          <Image 
            src="/garden_bed.jpeg"
            alt="Garden Bed"
            className="featured-image"
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}