import React, { useState, useEffect } from "react";
import { getData } from "../firestore";
import { Card } from "../Components/Card"
import { FillForm } from "../Components/FillForm"

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
        async function fetchUserData() {
            const userData = await getData("empleados");
            setUsuarios(userData);
        } 

        fetchUserData();
    }, [buttonIndex]);

    return (
        <div>
            <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '0.75rem 1rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', marginBottom: '1rem', ':hover': { backgroundColor: '#388E3C' } }}
                onClick={onClick}
            >
                {buttonValues[buttonIndex].label}
            </button>

            {buttonValues[buttonIndex].turnOn && (<FillForm />)}

            {!buttonValues[buttonIndex].turnOn && (<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {usuarios.map((usuario, index) => (
                    <Card
                        key={index}
                        image={usuario.imagen}
                        name={usuario.nombre}
                        mail={usuario.correo}
                        puesto={usuario.puesto}
                    />
                ))}
            </div>)}
        </div>
    );
}


