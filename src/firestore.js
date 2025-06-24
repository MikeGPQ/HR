import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

export async function getData(collectionName) {
    try {
        const newCollection = await getDocs(collection(db, collectionName));
        return newCollection.docs.map(doc => doc.data());
    } catch (error) {
        console.error("Error fetching documents: ", error);
        return []; 
    }
}