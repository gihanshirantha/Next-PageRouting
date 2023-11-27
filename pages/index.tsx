import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center p-10">Home Page</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/products">products</Link>
    </>
  );
}
