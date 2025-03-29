import styles from "./QuickLink.module.css"

export type QuickLinkProps = {
    icon: string;
    iconAlt: string;
    title: string;
    url: string;
}

export const QuickLink: React.FC<QuickLinkProps> = ({ icon, iconAlt, title, url }) => {
    return (
        <li key={title} className={styles.quickLink}>
            <a href={url}>
                <img src={icon} alt={iconAlt} />
                <h3>{title}</h3>
            </a>
        </li>
    )
}