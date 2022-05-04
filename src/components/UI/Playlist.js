/* eslint-disable jsx-a11y/iframe-has-title */
import styles from "./Playlist.module.css";

const Playlist = () => {
  return (
    <div className={styles.playlist}>
      <iframe
        className={styles.playlist_frame}
        src="https://open.spotify.com/embed/playlist/78GrC3JG4yrwDsaUt17ec5?utm_source=generator"
      />
    </div>
  );
};

export default Playlist;
