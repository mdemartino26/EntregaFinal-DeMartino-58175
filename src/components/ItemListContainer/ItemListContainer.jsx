import "./ItemListContainer.css";
import { useState, useEffect } from "react";
//import { getProducts, getProductByCategory } from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "item"), where("category", "==", categoryId))
      : collection(db, "item");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      }, [categoryId]);
  });

  return (
    <>
      <h1 className="Titulo">Productos:</h1>
      <div className="ItemListContainer">
        {/* Renderizar el componente ItemList con los productos y la carga */}
        <ItemList products={products} loading={loading} />
      </div>
    </>
  );
};

export default ItemListContainer;
