import { CartContextProvider } from "@/components/CartContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "20px",
            padding: "8px 16px",
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",
            whiteSpace: "nowrap",
          },
        }}
      />
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
