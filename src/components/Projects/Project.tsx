import { ProjectButton, type ProjectButtonProps } from "./ProjectButton/ProjectButton";
import styles from "./Project.module.css";

export type ProjectProps = { 
    imageUrl: string;
    title: string;
    description: string;
    bulletPoints: string[];
    actions: ProjectButtonProps[];
    invertColumns?: boolean,
}

export const Project: React.FC<ProjectProps> = ({imageUrl, title, description, bulletPoints, actions, invertColumns}) => {
    return (
    <>
        <div className={styles.project + (invertColumns ? ' ' + styles.columnsInverted : '')}>
            <img src={imageUrl} alt=""/>
            <h3> {title} </h3>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            <ul id={styles.projectDescription}>
                {
                    bulletPoints.map((point, index) => 
                        <li key={index}>
                            {point}
                        </li>
                    )
                }
            </ul>
            <ul id={styles.projectActions}>
            {
                actions.map((action, index) =>
                    <li key={index}>
                        <ProjectButton key={index} imageUrl={action.imageUrl} title={action.title} destinationUrl={action.destinationUrl} />
                    </li>
                )
            }
            </ul>
        </div>
    </>
    )
}