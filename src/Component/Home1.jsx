import React, { useContext, useEffect } from "react";
import { ContextUser } from "./ContextUser";
import Navbar1 from "./Navbar1";
export default function Home1() {
    const { user, setUser } = useContext(ContextUser);

    useEffect(() => {
        if (!user) {
            const stored = localStorage.getItem("user");
            if (stored) setUser(JSON.parse(stored));
        }
    }, [user, setUser]);

    return (
        <>
            <Navbar1 user={user} />
            <div>
                <h2>Welcome, {user?.name}!</h2>
                <p>Your email: {user?.email}</p>
            </div>
        </>
    );

}