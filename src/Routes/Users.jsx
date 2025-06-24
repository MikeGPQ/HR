import React, { useState, useEffect } from "react";
import { getData } from "../firestore";

export function UserList() {
    const [usuarios, setUsuarios] = useState([]);
    

    useEffect(() => {
        async function fetchUserData() {
            const userData = await getData("empleados");
            setUsuarios(userData);
        }

        fetchUserData();
    }, []);

    return (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {usuarios.map((usuario, index) => (
                <Card
                    key={index}
                    image={usuario.imagen}
                    name={usuario.nombre}
                    mail={usuario.correo}
                    puesto={usuario.puesto}
                />
            ))}
        </div>
    );
}

function Card({ image, name, mail, puesto }) {
    return (
        <div style={{ width: '18rem', borderRadius: '0.25rem', backgroundColor: '#4CAF50' }}>
            <div style={{ padding: '1.25rem', textAlign: 'center' }}>

                {image && (
                    <img src={image} style={{ borderRadius: '50%',width: '150px',height: '150px',objectFit: 'cover',marginBottom: '1rem'}}/>
                )}

                {name && (
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '500', lineHeight: '1.2', color: "#FFFFFF" }}>
                        {name}
                    </h3>
                )}

                {mail && (
                    <p style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
                        Mail: {mail}
                    </p>
                )}

                {puesto && (
                    <p style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
                        Puesto: {puesto}
                    </p>
                )}

            </div>
        </div>
    );
}
