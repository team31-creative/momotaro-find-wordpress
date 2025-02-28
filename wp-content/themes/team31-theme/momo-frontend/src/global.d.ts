declare module "*.svg" {
    const content: string;
    export default content;
}

interface Window {
    wpApiSettings: {
      root: string;
      nonce: string;
    };
}