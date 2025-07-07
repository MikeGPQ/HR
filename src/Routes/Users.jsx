import React, { useState, useEffect } from "react";
import { getData } from "../firestore";
import { Card } from "../Components/Card"
import { FillForm } from "../Components/FillForm"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export function UserList() {
    const [usuarios, setUsuarios] = useState([]);
    const [buttonIndex, setIndex] = useState(0);

    const buttonValues = [
        { turnOn: false, label: "Add" },
        { turnOn: true, label: "User List" }
    ]

    function onClick() {
        setIndex(buttonIndex === 0 ? 1 : 0)
    }
    
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "empleados"), (snapshot) => {
            const userData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsuarios(userData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '0.75rem 1rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', marginBottom: '1rem', ':hover': { backgroundColor: '#388E3C' } }}
                onClick={onClick}
            >
                {buttonValues[buttonIndex].label}
            </button>

            {buttonValues[buttonIndex].turnOn && (<FillForm />)}

            {!buttonValues[buttonIndex].turnOn && (<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {usuarios
                    .filter((usuario) => usuario.active)
                    .map((usuario) => (
                    <Card
                        key={usuario.id}
                        id={usuario.id}
                        image={usuario.image}
                        name={usuario.nombre}
                        mail={usuario.correo}
                        puesto={usuario.puesto}
                    />
                ))}
            </div>)}
        </div>
    );
}


