import { API_URL, ENV } from "../../env";
import { getCookie, setCookie } from "../lib/cookie";
type Environment = 'development' | 'production';

const isDevelopment = (ENV as Environment) === 'development';

const getAuthUserHeaders = (userInfo) => {
    const userJwtToken = userInfo ? userInfo : getCookie('user_info');
    return {
        "Authorization": isDevelopment ? `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`: `Basic ${userJwtToken}`,
        "Content-Type": "application/json"
    };
};

const getAuthHeaders = () => {
    return {
        "Authorization": `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`,
        "Content-Type": "application/json"
    };
};

const WPSupporter = (admin: boolean = false, user_info?: string) => {
    const isAdmin = admin;
    const userInfo = user_info;

    if (userInfo) {
        setCookie('user_info', user_info);
    }
    const get = async (slug: string, options?: any) => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/`;
        const url = `${baseUrl}${slug}`;
      
        const response = await window.fetch(url, {
            ...options,
            headers: isAdmin? getAuthUserHeaders(userInfo) : getAuthHeaders(),
            method: 'GET',
        });
        
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        
        return await response.json();
    };

    const myGet = async () => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/users/me`;
        

        const response = await window.fetch(baseUrl, {
            headers: getAuthUserHeaders(userInfo),
            method: 'GET',
        })

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        
        return await response.json();
    }
    
    return {
        get,myGet
    };
}

export default WPSupporter;