/* eslint-disable jsx-a11y/iframe-has-title */
import styles from "./Playlist.module.css";
import { Box } from "@mui/material";

const Playlist = () => {
  return (
    <Box className={styles.playlist}>
      <iframe
        className={styles.playlist_frame}
        src="https://open.spotify.com/embed/playlist/78GrC3JG4yrwDsaUt17ec5?utm_source=generator"
      />
    </Box>
  );
};

export default Playlist;
