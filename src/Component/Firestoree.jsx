import React, { useEffect } from 'react';
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../Firebase';

const db = getFirestore(app);

export default function Firestoree() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, doc.data());
                });
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };

        fetchData();
    }, []);

    async function addData() {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Sunil",
                last: "Thakor",
                born: 2003
            });
            console.log("Document written with ID: ", docRef.id);
            alert('Success');
        } catch (e) {
            console.error("Error adding document: ", e);
            alert(e)
        }
    }

    return (
        <div>
            <h1>Firestore Example</h1>
            <button onClick={addData}>Add Data</button>
        </div>
    );
}
