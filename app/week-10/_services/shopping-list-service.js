import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemRef = collection(db, "users", userId, "items");
  const itemSnap = await getDocs(itemRef);
  return itemSnap.docs.map((doc) => doc.data());
};

export const addItem = async (userId, item) => {
  const itemCollection = collection(db, "users", userId, "items");
  const itemRef = await addDoc(itemCollection, item);

  return itemRef;
};