import { Track } from "../../api/types";
import { timeAgo } from "./time-formatting";
import styles from "./SpotifyTrackCard.module.css";

export type SpotifyTrackCardProps = {
    track: Track;
    playedAt: string;
};

const getCoverAlt = (track: Track): string =>
    `Cover art for ${track.name} by ${track.artists[0].name}`;

export const SpotifyTrackCard: React.FC<SpotifyTrackCardProps> = ({ track, playedAt }) => {
    const coverImage = track.album.images[0];
    
    return <div className={styles.spotifyTrackCard}>
        <img src={coverImage.url} width="120" height="120" alt={getCoverAlt(track)}/>
        <div>
            <h3>{track.artists[0].name}</h3>
            <p>{track.name}</p>
        </div>
        <p>{playedAt === "" ? "now" : timeAgo(Date.parse(playedAt))}</p>
    </div>
}