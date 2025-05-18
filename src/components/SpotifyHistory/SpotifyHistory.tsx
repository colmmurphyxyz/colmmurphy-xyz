import { useEffect, useState } from "react"
import styles from './SpotifyHistory.module.css';
import { Track } from '../../api/types';
import { getCurrentlyPlayingTrack, getRecentTracks } from "../../api/api";
import { SpotifyTrackCard } from "./SpotifyTrackCard";

export const SpotifyHistory: React.FC = () => {
    const [recentTracks, setRecentTracks] = useState<Track[]>([]);

    useEffect(() => {
        Promise.all([
                getCurrentlyPlayingTrack().then((track) => {
                    console.log(`Currently Playing ${track?.name}`)
                }),
                getRecentTracks(5).then(setRecentTracks)
            ]
        )
    }, []);
    
    return (
        <ul id={styles.spotifyHistoryList}>
            {
                recentTracks.map((track) => (
                    <SpotifyTrackCard key={track.id} track={track} />
                ))
            }
        </ul>
    )
}