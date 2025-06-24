import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from './firebase';
import React, { useState } from "react";

export async function getData(collectionName) {
    try {
        const newCollection = await getDocs(collection(db, collectionName));
        return newCollection.docs.map(doc => doc.data());
    } catch (error) {
        console.error("Error fetching documents: ", error);
        return []; 
    }
}

export async function setData(collectionName, documentData) {
    try {
        const documents = await getData(collectionName);
        const nextId = "ID: " + (documents.length + 1);
        const docRef = doc(db, collectionName, nextId.toString());
        await setDoc(docRef, {
            ...documentData
        });
    } catch (error) {
        console.error("Error uploading documents: ", error);
    }
}