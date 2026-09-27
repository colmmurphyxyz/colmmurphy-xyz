export type GetRecentTracksResponse = {
    recentTracks: LastFMTrack[]
}

export type LastFMTrack = {
        artistName: string;
        images: LastFMImagePreview[];
        albumName: string;
        trackName: string;
    }

export type LastFMImagePreview = {
    size: "small" | "medium" | "large" | "extralarge";
    url?: string | undefined | null
}