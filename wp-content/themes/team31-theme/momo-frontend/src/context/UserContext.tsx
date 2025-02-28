import React, { createContext, useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WPSupporter from "../commons/wpSupporter";

interface UserContextType {
    user: any;
    loading: boolean;
}

// UserContext を作成
const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading] = useState(true);
    const { user_info } = useParams();
    const navigate = useNavigate();
    const wps = WPSupporter(false, user_info);
    let hasAuth = wps.responseHasAuth();

    useEffect(() => {
        if (!hasAuth) {
            const interval = setInterval(() => {
                console.log("Checking authentication status...");
                hasAuth = wps.responseHasAuth();
                if (hasAuth) {
                    clearInterval(interval);
                    window.location.reload();
                }
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [hasAuth]);

    useEffect(() => {
        console.log(hasAuth);
        if (!hasAuth) return;
        const fetchUser = async () => {
            return await wps.myGet();
        };

        fetchUser().then(user => {
            setUser(user);
            console.log(user);
        });

        if (user_info) {
            navigate("/");
        }
    }, [navigate, user_info, hasAuth]);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// Context を簡単に使えるようにするカスタムフック
export const useUser = () => useContext(UserContext);