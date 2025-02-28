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

    useEffect(() => {
        const fetchUser = async () => {
            return await wps.myGet();
        };

        fetchUser().then(user => {
            setUser(user);
        });

        if (user_info) {
            navigate("/");
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// Context を簡単に使えるようにするカスタムフック
export const useUser = () => useContext(UserContext);