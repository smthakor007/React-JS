import React, { useContext } from "react";
import { ContextUser } from './ContextUser';

export default function Navbar1() {
    const { user } = useContext(ContextUser);

    return (
        <nav style={{ background: "#558", padding: "10px 20px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontWeight: "bold" }}>UseContext</div>

            <div style={{ display: "flex", gap: "15px" }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>About</a>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
            </div>

            {user?.name && (
                <span style={{ color: "yellow" }}>Welcome, {user.name}</span>
            )}
        </nav>
    );
}