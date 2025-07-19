export type SpotifyStatus = {
    available: boolean;
    reason?: string;
};

export type SimpleArtist = {
    externalUrls: { spotify: string };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
};

export type SpotifyImage = {
    url: string;
    height: number;
    width: number;
};

export type Album = {
    albumType: string;
    totalTracks: number;
    externalUrls: { spotify: string };
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    releaseDate: string;
    releaseDatePrecision: string;
    type: string;
    uri: string;
    artists: SimpleArtist[];
};

export type Track = {
    album: Album;
    artists: SimpleArtist[];
    discNumber: number,
    durationMs: number;
    explicit: boolean;
    href: string;
    id: string;
    isPlayable: boolean;
    name: string;
    popularity: boolean;
    trackNumber: number;
    type: string;
    url: string;
    isLocal: boolean;
};

export type PlayTime = string;

export type PlayHistory = {
    playedAt: PlayTime;
    track: Track;
};