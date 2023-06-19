import { db } from "./config/Firebase";
import { getDocs, updateDoc, collection, doc } from "firebase/firestore";

export const productsCollectionRef = collection(db, "products");

export const getProductList = async () => {
  try {
    const data = await getDocs(productsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return filteredData;
  } catch (err) {
    console.error(err);
  }
};

export const updateProducts = async (id, brand, price, name, stateStatus) => {
  const productCollectionID = doc(db, "products", id);
  await updateDoc(productCollectionID, {
    BRAND: brand,
    PRICE: price,
    PRODUCT: name,
    STATE: stateStatus,
  });
};