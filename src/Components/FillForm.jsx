import { useState } from "react";
import { setData } from "../firestore";

export function FillForm() {
    const [user, setUser] = useState({
        nombre: "",
        correo: "",
        puesto: "",
        image: "",
        active: true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault(); 
        try {
            await setData("empleados", user);
            setUser({ nombre: "", correo: "", puesto: "", image: "" });
        } catch (error) {
            console.error("Error adding user:", error);
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', padding: '1rem' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px' }}>
                <div style={{ padding: '1rem', backgroundColor: '#4CAF50', color: 'white', textAlign: 'center' }}>
                    <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '500' }}>Add New User</h4>
                </div>

                <form style={{ padding: '2rem' }}>
                    
                    <div style={{ marginBottom: '1.5rem', width: '100%' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#555', textAlign: 'left' }}>Full Name</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={user.nombre}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem', border: '1px solid #ddd', borderRadius: '0.25rem', display: 'block', ':focus': { outline: 'none', borderColor: '#4CAF50' } }}
                            placeholder="Enter full name"
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem', width: '100%' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#555', textAlign: 'left' }}>Email Address</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={user.correo}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem', border: '1px solid #ddd', borderRadius: '0.25rem', display: 'block', ':focus': { outline: 'none', borderColor: '#4CAF50' } }}
                            placeholder="Enter email address"
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem', width: '100%' }}>
                        <label htmlFor="puesto" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#555', textAlign: 'left' }}>Job Position</label>
                        <input
                            type="text"
                            id="puesto"
                            name="puesto"
                            value={user.puesto}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem', border: '1px solid #ddd', borderRadius: '0.25rem', display: 'block', ':focus': { outline: 'none', borderColor: '#4CAF50' } }}
                            placeholder="Enter job position"
                        />
                    </div>


                    

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '0.25rem', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer', marginTop: '1rem', ':hover': { backgroundColor: '#388E3C' } }}
                    >
                        Add User
                    </button>
                </form>
            </div>
        </div>
    );
}

