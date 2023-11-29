import { CartProvider } from "@/context/CartContext";
import "@/styles/globals.css";
import { Header } from "@/ui-core";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <CartProvider>
          <Header />
          <Component {...pageProps} />
        </CartProvider>
      </ClerkProvider>
    </>
  );
}
