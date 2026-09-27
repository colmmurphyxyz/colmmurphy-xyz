import { getRestUrl } from "../api";
import { GetRecentTracksResponse } from "./types";

export const getRecentTracks = async (limit: number) =>
    fetch(`${getRestUrl()}/lastfm/recenttracks?limit=${limit}`)
    .then(response => response.json())
    .then(json => json as GetRecentTracksResponse)