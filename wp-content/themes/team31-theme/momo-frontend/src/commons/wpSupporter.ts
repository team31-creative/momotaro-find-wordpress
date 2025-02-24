import { API_URL, ENV } from "../../env";
import { getCookie } from "../lib/cookie";
type Environment = 'development' | 'production';

const isDevelopment = (ENV as Environment) === 'development';

const getAuthUserHeaders = () => {
    const userJwtToken = getCookie('user_jwt_token');
    return {
        "Authorization": isDevelopment ? `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`: `Bearer ${userJwtToken}`,
        "Content-Type": "application/json"
    };
};

const getAuthHeaders = () => {
    const adminToken = getCookie('admin_token');
    return {
        "Authorization": isDevelopment ? `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`: `Bearer ${adminToken}`,
        "Content-Type": "application/json"
    };
};

const WPSupporter = () => {
    const get = async (slug: string, isAdmin: boolean = false, options?: any) => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/`;
        const url = `${baseUrl}${slug}`;
        const response = await window.fetch(url, {
            ...options,
            headers: isAdmin? getAuthUserHeaders() : getAuthHeaders(),
            method: 'GET',
        });
        
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        
        return await response.json();
    };

    const myGet = async () => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/users/me`;
        console.log(getCookie('user_jwt_token'));

        const response = await window.fetch(baseUrl, {
            headers: getAuthUserHeaders(),
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