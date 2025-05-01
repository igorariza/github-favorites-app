interface ImportMetaEnv {
    readonly VITE_AUTH0_DOMAIN: string;
    readonly VITE_AUTH0_CLIENT_ID: string;
    readonly GITHUB_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}