import { db } from "./config/Firebase";
import { getDocs, updateDoc,deleteDoc, collection, doc } from "firebase/firestore";

export const productsCollectionRef = collection(db, "products");
export const UsersCollectionRef = collection(db, "users");

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


export const getUsersList = async () => {
  try {
    const data = await getDocs(UsersCollectionRef);
    const userData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return userData;
  } catch (err) {
    console.log(err);
  }
};
export const updateUsers = async (id, email, password, userCat) => {
  const UsersCollectionRef = doc(db, "users", id);
  await updateDoc(UsersCollectionRef, {
    email: email,
    password: password,
    userCat: userCat,
  });
};

export const deleteUser = async(id) => {
  await deleteDoc(doc(db, "users", id))
}