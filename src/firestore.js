import { collection, getDocs, setDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";
import { db } from './firebase';
import React, { useState } from "react";


export async function getData(collectionName) {
    try {
        const newCollection = await getDocs(collection(db, collectionName));
        return newCollection.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching documents: ", error);
        return [];
    }
}


export async function setData(collectionName, documentData) {
    try {
        const documents = await getData(collectionName);

        
        let maxId = 0;
        documents.forEach(doc => {
            const idParts = doc.id.split(': ');
            if (idParts.length === 2 && !isNaN(idParts[1])) {
                const currentId = parseInt(idParts[1]);
                if (currentId > maxId) {
                    maxId = currentId;
                }
            }
        });

        const nextId = "ID: " + (maxId + 1); 
        const docRef = doc(db, collectionName, nextId.toString());
        await setDoc(docRef, { ...documentData });
    } catch (error) {
        console.error("Error uploading documents: ", error);
    }
}

export async function updateData(collectionName, documentData, id) {
    try {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, documentData);

        console.log("Update successful");
        return true;
    } catch (error) {
        console.error("Detailed error:", {
            errorMessage: error.message,
            errorCode: error.code,
            fullError: error
        });
        return false;
    }
}


export async function deleteData(collectionName, documentData, id) {
    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef, documentData);

        console.log("Deletion successful");
        return true;
    } catch (error) {
        console.error("Detailed error:", {
            errorMessage: error.message,
            errorCode: error.code,
            fullError: error
        });
        return false;
    }
}