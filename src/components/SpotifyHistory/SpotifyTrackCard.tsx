import { Track } from '../../api/types';
import styles from './SpotifyHistory.module.css';

export type SpotifyTrackCardProps = {
    track: Track;
};

export const SpotifyTrackCard: React.FC<SpotifyTrackCardProps> = ({ track }) => {
    const trackName = track.name;
    const artistName = track.artists[0].name;
    const image = track.album.images[track.album.images.length - 1];
    const { url, height, width } = image;

    return (
        <li className={styles.spotifyTrackCard}>
            <img width={width} height={height} src={url} />
            <div>
                <p className={styles.trackName}>{trackName}</p>
                <p className={styles.artistName}>{artistName}</p>
            </div>
        </li>
    )
}