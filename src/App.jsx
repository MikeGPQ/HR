import './App.css'
import { Loading } from './NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/*" element={<Loading />} />
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
