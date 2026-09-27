import { getRestUrl } from "../api";

export const getFastFetchLogo = async (): Promise<string> => {
    const response = await fetch(`${getRestUrl()}/fastfetch/logo`);
    return response.text();
};

export const getFastFetchText = async (): Promise<string> => {
    const response = await fetch(`${getRestUrl()}/fastfetch/text`);
    return response.text();
};
