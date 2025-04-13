import { API_URL, ENV } from "../../env";
import { getCookie, setCookie } from "../lib/cookie";
type Environment = 'development' | 'production';

const isDevelopment = (ENV as Environment) === 'development';

const getAuthUserHeaders = () => {
    const authHeader = {}
    authHeader["Authorization"] = isDevelopment ? `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`: `Bearer ${getCookie('user_token')}`;
    authHeader["Content-Type"] = "application/json";
    return authHeader;
};

const getAuthHeaders = () => {
    const authHeader = {}
    authHeader["Authorization"] = isDevelopment ? `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`: `Bearer ${getCookie('admin_token')}`;
    authHeader["Content-Type"] = "application/json";
    return authHeader;
};

const getAdminUserInfo = async () => {
    const loginUrl = `${API_URL}/wp-json/jwt-auth/v1/token`;
      
    const response = await window.fetch(loginUrl, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: "t31bot",
            password: "Tokyo_Daigaku_01",
        }),
        method: 'POST',
    });

    if (!response) {
        throw new Error('Response is undefined');
    }
    const data = await response.json();

    setCookie('admin_token', data.token);

    return data.token;
}

const getUserInfo = async (userInfo) => {
    const userInfoCookie = getCookie('user_info') || userInfo;
    if (!userInfoCookie) return;
    
    const decodedUserInfo = atob(userInfoCookie);

    const loginUrl = `${API_URL}/wp-json/jwt-auth/v1/token`;
      
    const response = await window.fetch(loginUrl, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: decodedUserInfo.split(':')[0],
            password: decodedUserInfo.split(':')[1],
        }),
        method: 'POST',
    });

    if (!response) {
        throw new Error('Response is undefined');
    }
    const data = await response.json();

    setCookie('user_token', data.token);

    return data.token;
}

const WPSupporter = (admin: boolean = false, user_info?: string) => {
    const userInfo = user_info;
    let hasAuth = true;
    if (userInfo) {
        setCookie('user_info', user_info);
    }

    const responseHasAuth = () => {
        return hasAuth;
    }

    const get = async (slug: string, options?: any) => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/`;
        const url = `${baseUrl}${slug}`;
      
        const response = await window.fetch(url, {
            ...options,
            headers: getAuthUserHeaders(),
            method: 'GET',
        });
        
        if (!response.ok) {
            console.log(response.text());
            throw new Error(response.statusText);
        }
        
        return await response.json();
    };

    const post = async (slug: string, reqBody: any) => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/`;
        const url = `${baseUrl}${slug}`;
      
        const response = await window.fetch(url, {
            headers: getAuthUserHeaders(),
            method: 'POST',
            body: JSON.stringify(reqBody),
        });
        
        if (!response.ok) {
            console.log(response.text());
            throw new Error(response.statusText);
        }
        
        return await response.json();
    }

    const forceGet = async (slug: string, options?: any) => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/`;
        const url = `${baseUrl}${slug}`;
      
        const response = await window.fetch(url, {
            ...options,
            headers:  getAuthHeaders(),
            method: 'GET',
        });
        
        if (!response.ok) {
            console.log(response.text());
            throw new Error(response.statusText);
        }
        
        return await response.json();
    };

    const myGet = async () => {

        console.log('認証済み');
        const baseUrl = `${API_URL}/wp-json/wp/v2/users/me`;
        

        const response = await window.fetch(baseUrl, {
            headers: getAuthUserHeaders(),
            method: 'GET',
        })

        if (!response.ok) {
            console.log(response.text());
            throw new Error(response.statusText);
        }
        
        return await response.json();
    }
    
    return {
        get,post,forceGet,myGet,responseHasAuth
    };
}

export default WPSupporter;