import { CartProvider } from "@/context/CartContext";
import "@/styles/globals.css";
import { Header } from "@/ui-core";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ClerkProvider publishableKey={clerkPubKey}>
          <CartProvider>
            <Header />
            <Component {...pageProps} />
          </CartProvider>
        </ClerkProvider>
      </QueryClientProvider>
    </>
  );
}
