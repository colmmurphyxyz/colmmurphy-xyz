import { MouseEventHandler, TouchEventHandler, useEffect, useRef, useState } from "react"
import { PlayHistory } from "../../api/types"
import { SpotifyTrackCard } from "./SpotifyTrackCard"
import styles from "./SpotifyTrackCard.module.css";
import { getCurrentAndRecentTracks } from "../../api/api";

export const SpotifyHistory: React.FC<{}> = () => {
    const [history, setHistory] = useState<PlayHistory[]>([]);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const data = await getCurrentAndRecentTracks(10);
                setHistory(data);
            } catch (err) {
                setHistory([]);
            }
        }

        fetchTracks();
    }, []);

    const scrollRef = useRef<HTMLUListElement>(null);

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown: MouseEventHandler<HTMLUListElement> = (e) => {
        if (scrollRef.current === null) return;
        isDown = true;
        scrollRef.current.classList.add("dragging");
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
    };

    const onMouseLeave = () => {
        if (scrollRef.current === null) return;
        isDown = false;
        scrollRef.current.classList.remove("dragging");
    };

    const onMouseUp = () => {
        if (scrollRef.current === null) return;
        isDown = false;
        scrollRef.current.classList.remove("dragging");
    };

    const onMouseMove: MouseEventHandler<HTMLUListElement> = (e) => {
        if (scrollRef.current === null) return;
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // multiplier = scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    if (history.length === 0) {
        return <>
        </>
    }

    return <>
        <h2>What I've been listening to</h2>
        <ul id={styles.spotifyHistory}
            className={styles.horizontalScroll}
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}>
            {
                history.map(({ playedAt, track }, idx) => (
                    <li key={idx}>
                        <SpotifyTrackCard track={track} playedAt={playedAt} />
                    </li>
                ))
            }
        </ul>
    </>
}