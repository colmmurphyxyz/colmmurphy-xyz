export const getRestUrl = (): string => {
    if (import.meta.env.PROD) {
        return "https://api.colmmurphy.xyz/api";
    }
    return "http://127.0.0.1:8080/api";
};
