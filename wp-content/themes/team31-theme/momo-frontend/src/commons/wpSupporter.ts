import { API_URL } from "../../env";

const WPSupporter = () => {
    const get = async (slug: string, embed?: string, options?: any) => {
        const baseUrl = `${API_URL}/wp-json/wp/v2/`;
        const url = `${baseUrl}${slug}?_embed=${embed}`;
        const response = await window.fetch(url, {
            ...options,
            method: 'GET',
        });
        
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        
        return await response.json();
    };
    
    return {
        get,
    };
}

export default WPSupporter;