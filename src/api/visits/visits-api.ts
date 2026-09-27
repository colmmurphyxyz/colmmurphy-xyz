import { getRestUrl } from '../api'
export type Visit = {
    url: string;
    fingerprint: string;
}

export const postVisit = async (visit: Visit): Promise<void> => {
    fetch(`${getRestUrl()}/visits`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(visit)
    })
}