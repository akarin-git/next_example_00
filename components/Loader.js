import styles from "../styles/Loader.module.scss";

function Loader() {
    return (
    <div className={styles.LoaderWrap}>
        <div className={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    );
}

export default Loader;