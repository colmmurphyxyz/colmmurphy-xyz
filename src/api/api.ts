import { SpotifyStatus, Track } from './types';

const getRestUrl = (): string => `http://localhost:8080/api`;

export const getSpotifyStatus = async () =>
    fetch(`${getRestUrl()}/spotify/status`)
        .then((response) => response.json())
        .then((json) => json as SpotifyStatus)

export const getRecentTracks = async (limit: number) =>
    fetch(`${getRestUrl()}/spotify/recenttracks?limit=${limit}`)
        .then((response) => response.json())
        .then((json) => json as Track[]);

export const getCurrentlyPlayingTrack = async () => {
    const response = await fetch(`${getRestUrl()}/spotify/currentlyplaying`);
    if (response.status != 200) {
        return null;
    }
    return await response.json() as Track;
};