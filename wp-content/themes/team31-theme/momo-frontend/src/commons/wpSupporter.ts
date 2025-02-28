import { API_URL, ENV } from "../../env";
import { getCookie } from "../lib/cookie";
type Environment = 'development' | 'production';

const isDevelopment = (ENV as Environment) === 'development';

const getAuthUserHeaders = () => {
    const userJwtToken = getCookie('user_info');
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

const WPSupporter = (admin: boolean) => {
    const isAdmin = admin;
    const get = async (slug: string, options?: any) => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/`;
        const url = `${baseUrl}${slug}`;

        console.log(getAuthUserHeaders());
      
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
        console.log(getCookie('user_info'));

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