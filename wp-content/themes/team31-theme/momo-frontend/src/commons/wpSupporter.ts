import { API_URL, ENV } from "../../env";
import { getCookie, setCookie } from "../lib/cookie";
type Environment = 'development' | 'production';

const isDevelopment = (ENV as Environment) === 'development';

const getAuthUserHeaders = (userInfo) => {
    const authHeader = {}
    authHeader["Authorization"] = isDevelopment ? `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`: `Bearer ${userInfo}`;
    authHeader["Content-Type"] = "application/json";
    return authHeader;
};

const getAuthHeaders = (adminInfo) => {
    const authHeader = {}
    authHeader["Authorization"] = isDevelopment ? `Basic ${btoa('t31bot:Tokyo_Daigaku_01')}`: `Bearer ${adminInfo}`;
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
    const isAdmin = admin;
    const userInfo = user_info;
    let hasAuth = true;
    let userAuth: string | null = null;
    let adminAuth: string | null = null;

    if (userInfo) {
        setCookie('user_info', user_info);
    }

    const cookieUserInfo = getCookie('user_info');

    const responseHasAuth = () => {
        return hasAuth;
    }

    const get = async (slug: string, options?: any) => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/`;
        const url = `${baseUrl}${slug}`;
        const adminToken = getCookie('admin_token');

        if (!admin && !adminToken) {
            adminAuth = await getAdminUserInfo();
        } else {
            adminAuth = adminToken;
        }
      
        const response = await window.fetch(url, {
            ...options,
            headers: isAdmin? getAuthUserHeaders(userAuth) : getAuthHeaders(adminAuth),
            method: 'GET',
        });
        
        if (!response.ok) {
            console.log(response.text());
            throw new Error(response.statusText);
        }
        
        return await response.json();
    };

    const post = async (slug: string, reqBody: any, options?: any) => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/`;
        const url = `${baseUrl}${slug}`;
        const adminToken = getCookie('admin_token');

        if (!admin && !adminToken) {
            adminAuth = await getAdminUserInfo();
        } else {
            adminAuth = adminToken;
        }
      
        const response = await window.fetch(url, {
            headers: isAdmin ? getAuthUserHeaders(userAuth) : getAuthHeaders(adminAuth),
            method: 'POST',
            body: JSON.stringify(reqBody),
        });
        
        if (!response.ok) {
            console.log(response.text());
            throw new Error(response.statusText);
        }
        
        return await response.json();
    }

    const myGet = async () => {

        const userToken = getCookie('user_token');

        if ((userInfo || cookieUserInfo) && !userToken) {
            userAuth = await getUserInfo(userInfo);
        } else {
            userAuth = userToken;
        }

        console.log('認証済み');
        const baseUrl = `${API_URL}/wp-json/wp/v2/users/me`;
        

        const response = await window.fetch(baseUrl, {
            headers: getAuthUserHeaders(userAuth),
            method: 'GET',
        })

        if (!response.ok) {
            console.log(response.text());
            throw new Error(response.statusText);
        }
        
        return await response.json();
    }
    
    return {
        get,post,myGet,responseHasAuth
    };
}

export default WPSupporter;