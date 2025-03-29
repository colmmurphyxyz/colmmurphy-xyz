import styles from "./ProjectButton.module.css"

export type ProjectButtonProps = {
    imageUrl?: string;
    title: string;
    destinationUrl: string;
}

export const ProjectButton: React.FC<ProjectButtonProps> = ({imageUrl, title, destinationUrl}) => {
    return (
    <>
        <div className={styles.projectButton}>
            <a href={destinationUrl}>
                <img src={imageUrl || ""} alt={`Icon for ${title} button`}/>
                <p> {title} </p>
            </a>
        </div>
    </>
    )
}