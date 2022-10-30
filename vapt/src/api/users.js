import { firestore } from "@/plugins/firebase";
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const collectionName = "users";

const getAll = async () => {
  const users = [];
  const collectionRef = collection(firestore, collectionName);
  const snapshots = await getDocs(collectionRef);
  snapshots.forEach(async (snapshots) => {
    let user = { id: snapshots.id, ...snapshots.data() };
    user.role = await getDoc(user.role.path);
    user.status = await getDoc(user.status.path);
    users.push(user);
  });
  return users;
};

const get = async (id) => {
  const docRef = doc(firestore, collectionName, id);
  const snapshots = await getDoc(docRef);

  let user = { id: snapshots.id, ...snapshots.data() };
  user.role = (await getDoc(user.role)).data();
  user.status = (await getDoc(user.status)).data();
  return user;
};

const create = async (user) => {
  const colRef = collection(firestore, collectionName);
  const result = await addDoc(colRef, user);
  // console.log(result);
  return result;
};

const update = async (user) => {
  const docRef = doc(firestore, collectionName, user.id);
  const result = await setDoc(docRef, user);
  return result;
};

const remove = async (user) => {
  const docRef = doc(firestore, collectionName, user.id);
  return await deleteDoc(docRef, user);
};

export { getAll, get, create, update, remove };
