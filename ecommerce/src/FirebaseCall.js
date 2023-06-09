import { db } from './config/Firebase'
import { getDocs, collection } from "firebase/firestore";

const productsCollectionRef = collection(db, "products");


  export const getProductList = async () => {
    try {
      const data = await getDocs(productsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
   

      console.log(filteredData);
      return filteredData
    } catch (err) {
      console.error(err);
    }
  };
