import { CartProvider } from "@/context/CartContext";
import "@/styles/globals.css";
import { Header } from "@/ui-core";
import { ClerkProvider } from "@clerk/clerk-react";
import type { AppProps } from "next/app";

const clerkPubKey =
  "pk_test_bW92aW5nLWphdmVsaW4tNTMuY2xlcmsuYWNjb3VudHMuZGV2JA";

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
