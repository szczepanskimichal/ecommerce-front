import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";

export default function Table({ products, cartProducts }) {
  const { removeProduct, addProduct, clearCart } = useContext(CartContext);

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Product name</td>
          <td>Quantity</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id} className="border-t-2">
            <td className="h-[140px] sm:h-[150px] mb-2 rounded-lg flex flex-col justify-center gap-1">
              <Link href={"/products/" + product._id}></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
