import { Project, type ProjectProps } from "./Project";
import styles from "./Project.module.css"

const projects: ProjectProps[] = [
        {
            imageUrl: "/img/pcc_example.png",
            title: "Pseudo-Code Compiler",
            description: "My Final-Year Project was to develop a runtime environment for pseudocode, as defined in " +
                "<a href=\"https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/\">Introduction To Algorithms</a> " +
                "by <em>Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest</em> and <i>Clifford Stein</i>.",
            bulletPoints: [
                "Tokenises, parses, transpiles pseudocode to executable Python code.",
                "Provides a graphical interface to support interactive execution of pseudocode.",
                "Accompanied with a standard library with implementations of various data structures.",
            ],
            actions: [
                {
                    imageUrl: "/img/github.svg",
                    title: "Source Code",
                    destinationUrl: "https://github.com/colmmurphyxyz/pseudo-code-compiler",
                },
            ]
        },
        {
            imageUrl: "/img/sandsoforisis.png",
            title: "Sands of Orisis",
            description: "A top-down Real-Time Strategy game developed in Godot 4 for a university group project",
            bulletPoints: [
                "Developed in eight weeks by a team of 4 students.",
                "Real-time peer-to-peer multiplayer.",
                "Compatible with Windows, Linux and macOS systems.",
                "Event-driven architecture to handle network replication and synchronisation.",
            ],
            actions: [
                {
                    imageUrl: "/img/github.svg",
                    title: "Source Code",
                    destinationUrl: "https://github.com",
                },
                {
                    imageUrl: "/img/github.svg",
                    title: "Ben Shorten",
                    destinationUrl: "https://github.com/benshorten72",
                },
                {
                    imageUrl: "/img/github.svg",
                    title: "David Wilson",
                    destinationUrl: "https://github.com/Szazlo",
                },
                {
                    imageUrl: "/img/github.svg",
                    title: "Darragh Murphy",
                    destinationUrl: "https://github.com/Durph21",
                },
            ]
        },
        {
            imageUrl: "/img/react.svg",
            title: "colmmurphy.xyz",
            description: "My Personal Website.",
            bulletPoints: [
                "Developed with Astro React and TypeScript.",
                "Hosted on GitHub Pages.",
                "Continuous Integration via GitHub Actions.",
            ],
            actions: [
                {
                    imageUrl: "/img/github.svg",
                    title: "Source Code",
                    destinationUrl: "https://github.com/colmmurphyxyz/colmmurphyxyz.github.io",
                },
            ]
        },
        {
            imageUrl: "/img/klaassify_screenshot.png",
            title: "Klaassify",
            description: "JavaFX desktop Application to visualise your music taste in a novel format.",
            bulletPoints: [
                "Integrates with the Spotify API to aggregate your listening history and retrieve your favourite artists.",
                "Uses an ExpressJS server to communicate with Spotify without leaking API credentials.",
                "Represents your favourites as vertices of a graph, with edges connecting similar artists.",
                "Implements force simulation algorithms to optimally render a graph to the user.",
            ],
            actions: [
                {
                    imageUrl: "/img/github.svg",
                    title: "Server",
                    destinationUrl: "https://github.com/benshorten72/cs3500-team36-server",
                },
                {
                    imageUrl: "/img/github.svg",
                    title: "Client",
                    destinationUrl: "https://github.com/colmmurphyxyz/cs3500-team36-client",
                },
            ]
        },
    ]

export const ProjectsList = () =>
    <div id={styles.projectsList}>
        {
            projects.map((project, index) => 
                <>
                    <Project 
                        key={index}
                        imageUrl={project.imageUrl}
                        title={project.title}
                        description={project.description}
                        bulletPoints={project.bulletPoints}
                        actions={project.actions}
                        invertColumns={index % 2 === 0}
                    />
                    <hr />
                </>
            )
        }
    </div>
