import styles from "./page.module.css"
import { VideoData } from "../page"

function Header(
    { videoData }:
    { videoData: VideoData | undefined }) {

    // videoData props
    let { title, composer, imgPath } = videoData === undefined ?
        { title: undefined, composer: undefined, imgPath: undefined } :
        videoData

    return <div className={styles.header}>

        {/* Title Container */}
        <div className={styles["title-container"]}>
            <h2> {title === undefined ? "..." : title} </h2>
            <p> By: {composer === undefined ? "..." : composer} </p>
        </div>

        {/* Album Image */}
        <div className={styles["image-container"]}>
            {imgPath === undefined ? null :
            <img
                src={imgPath}
                width="100%"
                height="auto"
                alt="Image of the album cover"
            />}
        </div>
    </div>
}

export default Header;