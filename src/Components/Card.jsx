import { useState } from "react";
import { deleteData, updateData } from "../firestore";

export function Card({ id, image, name, mail, puesto }) {
    const [editable, setEditable] = useState(false);

    function toggleEdit() {
        setEditable(!editable);
    }

    const [user, setUser] = useState({
        nombre: name,
        correo: mail,
        puesto: puesto,
        image: image,
        active: true
    });

    async function updateHandle(e) {
        e.preventDefault();
        try {
            await updateData("empleados", user, id);  
            setEditable(false);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    async function deleteHandle(e) {
        e.preventDefault();
        try {
            await deleteData("empleados",user, id);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }

    return (
        <div style={{ width: '18rem', borderRadius: '0.25rem', backgroundColor: '#4CAF50' }}>
            <div style={{ padding: '1.25rem', textAlign: 'center' }}>

                

                <button
                    onClick={deleteHandle}
                    style={{
                        display: "flex", justifyContent: "center", alignItems: "center", width: '24px', height: '24px', padding: '0', backgroundColor: '#000000', color: "#FFFFFF", border: 'none', borderRadius: '50%', fontSize: '0.9rem', cursor: 'pointer', margin: 0,
                        ':hover': {
                            backgroundColor: '#388E3C'
                        }
                    }}
                >
                    x
                </button>

                <p style={{ margin: 0, color: '#FFFFFF', marginBottom: '1rem' }}>
                    {id}
                </p>

                <img src={image || "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '1rem' }} />

                {!editable && (
                    <>
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
                    </>
                )}

                {editable && (


                    <>

                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            onChange={handleChange}
                            value={user.nombre}
                        />

                        <input
                            type="email"
                            id="correo"
                            name="coreo"
                            onChange={handleChange}
                            value={user.correo}
                        />

                        <input
                            type="text"
                            id="puesto"
                            name="puesto"
                            onChange={handleChange}
                            value={user.puesto}
                        />


                        <button
                            type="submit"
                            onClick={updateHandle}
                            style={{ width: '35%', padding: '0.75rem', backgroundColor: '#000000', color: "#FFFFFF", border: 'none', borderRadius: '0.25rem', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer', marginTop: '1rem', ':hover': { backgroundColor: '#388E3C' } }}
                        >
                            Update
                        </button>

                    </>
                ) }

                

                
                <button
                    type="submit"
                    onClick={toggleEdit}
                    style={{ width: '35%', padding: '0.75rem', backgroundColor: '#000000', color: "#FFFFFF", border: 'none', borderRadius: '0.25rem', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer', marginTop: '1rem', ':hover': { backgroundColor: '#388E3C' } }}
                >
                    {editable ? "Cancel":"Edit"}
                </button>

            </div>
        </div>
    );
}