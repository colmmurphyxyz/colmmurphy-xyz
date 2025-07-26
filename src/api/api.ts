import { PlayHistory, SpotifyStatus, Track } from './types';

// const getRestUrl = (): string => `http://localhost:8080/api`;
const getRestUrl = (): string => {
    if (import.meta.env.PROD) {
        return 'http://144.91.84.195:8080/api'
    }
    return 'http://localhost:8080/api'
}

export const getSpotifyStatus = async () =>
    fetch(`${getRestUrl()}/spotify/status`)
        .then((response) => response.json())
        .then((json) => json as SpotifyStatus)

export const getRecentTracks = async (limit: number) =>
    fetch(`${getRestUrl()}/spotify/recenttracks?limit=${limit}`)
        .then((response) => response.json())
        .then((json) => json as PlayHistory[]);

export const getCurrentlyPlayingTrack = async (): Promise<Track | null> => {
    const response = await fetch(`${getRestUrl()}/spotify/currentlyplaying`);
    if (response.status != 200) {
        return null;
    }
    try {
        return await response.json() as Track
    } catch {
        return null;
    }
};

export const getCurrentAndRecentTracks = async (recentLimit: number): Promise<PlayHistory[]> => {
    const [current, recent] = await Promise.all([getCurrentlyPlayingTrack(), getRecentTracks(recentLimit)]);
    if (current === null) {
        return recent;
    }
    return [{ playedAt: "", track: current }, ...recent]
}
