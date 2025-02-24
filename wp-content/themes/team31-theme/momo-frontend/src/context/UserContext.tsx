import React, { createContext, useState, useEffect, useContext } from "react";
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
    const wps = WPSupporter();

    useEffect(() => {
        const fetchUser = async () => {
            return await wps.myGet();
        };

        fetchUser().then(user => {
            setUser(user);
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// Context を簡単に使えるようにするカスタムフック
export const useUser = () => useContext(UserContext);