import { useEffect, useRef, useState } from "react"
import { PlayHistory } from "../../api/types"
import { SpotifyTrackCard } from "./SpotifyTrackCard"
import styles from "./SpotifyTrackCard.module.css";
import { getCurrentAndRecentTracks } from "../../api/api";

export const SpotifyHistory: React.FC<{}> = () => {
    const [history, setHistory] = useState<PlayHistory[]>([]);

    useEffect(() => {
        console.log("fetching...")
        const fetchTracks = async () => {
            try {
                const data = await getCurrentAndRecentTracks(10);
                setHistory(data);
            } catch(err) {
                console.log("caught " + err);
                setHistory([]);
            }
        }

        fetchTracks();
    }, []);

    const ref = useRef<HTMLUListElement>(null);
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    useEffect(() => {
        const list = ref.current;
        if (list === null) {
            return;
        }
        list.addEventListener("mousedown", (e) => {
            isDown = true;
            list.classList.add("dragging");
            startX = e.pageX - list.offsetLeft;
            scrollLeft = list.scrollLeft;
        });
    
        list.addEventListener("mouseleave", () => {
            isDown = false;
            list.classList.remove("dragging");
        });
    
        list.addEventListener("mouseup", () => {
            isDown = false;
            list.classList.remove("dragging");
        });
    
        list.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - list.offsetLeft;
            const walk = (x - startX) * 1.5; // adjust multiplier as needed
            list.scrollLeft = scrollLeft - walk;
        });
    
        // Touch support
        list.addEventListener("touchstart", (e) => {
            isDown = true;
            startX = e.touches[0].pageX - list.offsetLeft;
            scrollLeft = list.scrollLeft;
        });
    
        list.addEventListener("touchmove", (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - list.offsetLeft;
            const walk = (x - startX) * 1.5;
            list.scrollLeft = scrollLeft - walk;
        });
    
        list.addEventListener("touchend", () => {
            isDown = false;
        });
    }, [history]);

    if (history.length === 0) {
        return <>
            <ul id={styles.spotifyHistory} className={styles.horizontalScroll} ref={ref}></ul>
        </>
    }

    return <>
        <h2>What I've been listening to</h2>
        <ul id={styles.spotifyHistory} className={styles.horizontalScroll} ref={ref}>
            {
                history.map(({playedAt, track}, idx) => (
                    <li key={idx}>
                        <SpotifyTrackCard track={track} playedAt={playedAt} />
                    </li>
                ))
            }
        </ul>
    </>
}