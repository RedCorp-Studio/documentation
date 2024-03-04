import styles from './youtube.module.css';

export default function Youtube({
    link = null
}) {
    return (
        <div className={styles.videoContainer}>
            <iframe className={styles.videoContainerIframe} src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}
