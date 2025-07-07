import { useState } from "react";
import { updateData } from "../firestore";

export function Card({id, image, name, mail, puesto }) {
    const [user, setUser] = useState({
        nombre: name,
        correo: mail,
        puesto: puesto,
        image: image,
        active: true
    });


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await updateData("empleados", {
                ...user,
                active: false
            }, id);  
        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    return (
        <div style={{ width: '18rem', borderRadius: '0.25rem', backgroundColor: '#4CAF50' }}>
            <div style={{ padding: '1.25rem', textAlign: 'center' }}>

                <p style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
                    {id}
                </p>

                <img src={image || "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '1rem' }} />
                
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

                <button
                    type="submit"
                    onClick={handleSubmit}
                    style={{ width: '35%', padding: '0.75rem', backgroundColor: '#000000', color: "#FFFFFF", border: 'none', borderRadius: '0.25rem', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer', marginTop: '1rem', ':hover': { backgroundColor: '#388E3C' } }}
                >
                    Disable
                </button>

            </div>
        </div>
    );
}