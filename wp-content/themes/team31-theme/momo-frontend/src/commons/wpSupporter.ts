import { API_URL, ENV } from "../../env";
import { getCookie, setCookie } from "../lib/cookie";
type Environment = 'development' | 'production';

const isDevelopment = (ENV as Environment) === 'development';

const getAuthUserHeaders = (userInfo) => {
    const userInfoCookie = getCookie('user_info');
    if (userInfoCookie) {
        console.log(atob(userInfoCookie));
    }
    const userJwtToken = userInfo ? userInfo : getCookie('user_info');
    const authHeader = {}
    authHeader["Authorization"] = isDevelopment ? `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`: `Basic ${userJwtToken}`;
    authHeader["Content-Type"] = "application/json";
    return authHeader;
};

const getAuthHeaders = () => {
    return {
        "Authorization": `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`,
        "Content-Type": "application/json"
    };
};

const getAdminUserInfo = () => {

}

const getUserInfo = async () => {
    const userInfoCookie = getCookie('user_info');
    if (!userInfoCookie) return;
    
    const decodedUserInfo = atob(userInfoCookie);

    const loginUrl = `${API_URL}/wp-json/wp/v2/`;
      
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

    const data = await response.json();

    return data.token;
}

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
            console.log(response.text());
            throw new Error(response.statusText);
        }
        
        return await response.json();
    };

    const myGet = async () => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/users/me`;

        console.log(getAuthUserHeaders(userInfo));
        

        const response = await window.fetch(baseUrl, {
            headers: getAuthUserHeaders(userInfo),
            method: 'GET',
        })

        if (!response.ok) {
            console.log(response.text());
            throw new Error(response.statusText);
        }
        
        return await response.json();
    }
    
    return {
        get,myGet
    };
}

export default WPSupporter;