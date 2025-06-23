import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { Login } from './Routes/Login';
import { Register } from './Routes/Register';
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { signOut } from "firebase/auth";
import { Template } from './Routes/Template';
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
        { name: 'Aztecs', path: '/aztecs' },
        { name: 'Mayas', path: '/mayas' },
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

                    <Route path="/aztecs" element={<Template
                        image="https://i.pinimg.com/originals/14/e9/ee/14e9eed98b582c87a3a31899018dbb22.jpg"
                        title="Aztec Empire"
                        description="The Aztecs were a Mesoamerican civilization that flourished in central Mexico in the post-classic period from 1300 to 1521. The Aztec people included different ethnic groups of central Mexico, particularly those groups who spoke the Nahuatl language and who dominated large parts of Mesoamerica from the 14th to the 16th centuries."
                    />}/>
                    <Route path="/mayas" element={<Template
                        image="https://www.lisapoyakama.org/wp-content/uploads/2016/08/360-maya-reconstitution-gpc-edu.jpg"
                        title="Maya Civilization"
                        description="The Maya civilization was a Mesoamerican civilization that existed from antiquity to the early modern period. It is known by its ancient temples and glyphs (script). The Maya script is the most sophisticated and highly developed writing system in the pre-Columbian Americas."
                    />} />
                </Routes>
            </div>
        </div>
    );
}