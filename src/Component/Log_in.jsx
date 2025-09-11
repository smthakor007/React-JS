import React, { useState, useContext, useEffect } from "react";
import { ContextUser } from "./ContextUser";
import Home1 from "./Home1";
import Navbar1 from "./Navbar1";
export default function Log_in() {
    const [email, setEmail] = useState("");
    const { user, setUser } = useContext(ContextUser);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        if (!user) {
            const stored = localStorage.getItem("user");
            if (stored) setUser(JSON.parse(stored));
        }
    }, [user, setUser]);

    if (logged) return <Home1 />;

    return (
        <>
            <Navbar1 user={null} />
            <form onSubmit={e => {
                e.preventDefault();
                const stored = localStorage.getItem("user");
                const localUser = stored ? JSON.parse(stored) : null;
                setLogged(localUser && localUser.email === email);
            }}>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <button>Login</button>
            </form>
        </>
    );

}