import { useContext, useState } from "react";
import { db } from "../../services/firebase/firebaseConfig";



import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartContext from "../../context/CartContext";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
  writeBatch,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        // Verificar si total tiene un valor definido antes de asignarlo
        total: total || 0,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      console.log("aca estoy");

      if (ids.length === 0) {
        console.error("El carrito está vacío. No hay productos para procesar.");
        return;
      }

      const productsRef = collection(db, "item");


      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where("id", "in", ids))
      );
      
      productsAddedFromFirestore.forEach((item) => {
        console.log("aca estoy de nuevo");
        const product = item.data();
        const itemInCart = cart.find((item) => item.id === product.id);
        console.log("Número de documentos encontrados: ", productsAddedFromFirestore.size);
        
        if (itemInCart.quantity > itemInCart.stock.stock) {
          outOfStock.push(itemInCart.name);
        } else {
          console.log("stock " + product.stock);
          const newStock = product.stock - itemInCart.quantity;
          const productRef = doc.ref;
          batch.update(productRef, { stock: newStock });
        }
      });
     
      if (outOfStock.length === 0) {
        const orderRef = collection(db, "orders");
        const newOrderDoc = await addDoc(orderRef, objOrder);
        const newOrderId = newOrderDoc.id;

        // Confirmar la orden y limpiar el carrito
        await batch.commit();
        clearCart();

        // Establecer orderId con el ID generado por Firestore
        setOrderId(newOrderId);
      } else {
        console.error(`Productos fuera de stock: ${outOfStock.join(", ")}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderId) {
    return <h1>El ID de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
