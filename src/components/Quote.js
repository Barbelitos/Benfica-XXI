import styles from "./Quote.module.css";

const Quote = ({ text, author, background }) => {
  return (
    <figure
      style={{
        backgroundImage: `linear-gradient(rgb(196, 26, 26, 0.8),
      rgb(196, 26, 26, 0.4)), url(${background})`,
      }}
      className={styles.quote}
    >
      <blockquote className={styles.quote_text}>{text}</blockquote>
      <figcaption className={styles.quote_author}>&mdash; {author}</figcaption>
    </figure>
  );
};

export default Quote;
