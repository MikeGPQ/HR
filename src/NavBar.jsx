import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Login } from './Routes/Login';
import { Register } from './Routes/Register';
import { AuthContext } from "./AuthContext";
import { signOut } from "firebase/auth";
import { UserList } from './Routes/Users';
import { auth } from "./firebase";

export function Loading() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const authLinks = [
        {name:"Users", path:"/users"},
        { name: 'Logout', action: handleLogout }
    ];

    const guestLinks = [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' }
    ];

    const navLinks = currentUser ? authLinks : guestLinks;

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <nav style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '8rem', backgroundColor: '#4CAF50' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem', padding: '1rem 0' }}>
                    {navLinks.map((link) => (
                        link.action ? (
                            <button
                                key={link.name}
                                onClick={link.action}
                                style={{display: 'block', backgroundColor: '#4CAF50', color: 'white', padding: '0.75rem', textDecoration: 'none', fontWeight: 'normal', border: 'none', textAlign: 'left',  cursor: 'pointer',
                                    ':hover': {
                                        backgroundColor: '#388E3C'
                                    }
                                }}
                            >
                                {link.name}
                            </button>
                        ) : (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                style={({ isActive }) => ({display: 'block',   backgroundColor: isActive ? '#388E3C' : '#4CAF50',   color: 'white',  padding: '0.75rem',  textDecoration: 'none',  fontWeight: isActive ? 'bold' : 'normal',  borderLeft: isActive ? '3px solid white' : 'none',
                                    ':hover': {
                                        backgroundColor: '#388E3C'
                                    }
                                })}
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}
                </div>
            </nav>

            <div style={{ marginLeft: '8rem', flex: 1, padding: '2rem' }}>
                <Routes>
                    <Route path="/" element={<h1>Welcome</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/users" element={
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '0.3rem' }} >
                            <UserList/>
                        </div>}
                    />
                </Routes>
            </div>
        </div>
    );
}