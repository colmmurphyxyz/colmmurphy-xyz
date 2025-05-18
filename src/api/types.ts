export type SpotifyStatus = {
    available: boolean;
    reason?: string;
};

export type SimplifiedArtist = {
    external_urls: { spotify: string };
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
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: { reason: string };
    type: string;
    uri: string;
    artists: SimplifiedArtist[];
};

export type Track = {
    album: Album;
    artists: SimplifiedArtist[];
    available_markets: string[];
    disc_number: number,
    duration_ms: number;
    explicit: boolean;
    href: string;
    id: string;
    is_playable: boolean;
    name: string;
    popularity: boolean;
    preview_url?: string;
    track_number: number;
    type: string;
    url: string;
    is_local: boolean;
};