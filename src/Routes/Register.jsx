import { useState } from "react";
import { register } from '../Auth';
import { useNavigate } from "react-router-dom";

export function Register() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(user);
            navigate("/users");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div style={{ maxWidth: "320px", margin: "2rem auto", padding: "2rem", fontFamily: "sans-serif" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <label htmlFor="email" style={{ fontSize: "0.875rem", fontWeight: "500" }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleChange}
                        style={{ padding: "0.5rem", border: "1px solid #e2e8f0", borderRadius: "0.25rem" }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <label htmlFor="password" style={{ fontSize: "0.875rem", fontWeight: "500" }}>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleChange}
                        style={{ padding: "0.5rem", border: "1px solid #e2e8f0", borderRadius: "0.25rem" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{ width: "50%", marginInline: "auto", padding: "0.5rem", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "0.25rem", cursor: "pointer", marginTop: "0.5rem" }}
                >
                    Register
                </button>
            </form>
            {error && <p style={{ color: "#ef4444", marginTop: "1rem", textAlign: "center", fontSize: "0.875rem" }}>{error}</p>}
        </div>
    );
}