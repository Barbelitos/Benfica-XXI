import styles from "./MatchContainer.module.css";

const MatchContainer = ({ lastGame, nextGame }) => {
  return (
    <div className={styles.matches}>
      <div className={styles.last_game}>
        <h2>Last Game</h2>
        <hr className={styles.underline} />
        <h5 className={styles.competition}>{lastGame.league}</h5>
        <div className={styles.match_container}>
          <div className={styles.team}>
            <img className={styles.team_logo} src={lastGame.logoHome} alt="" />
            <p className={styles.team_name}>{lastGame.teamHome}</p>
          </div>
          <p className={styles.match_result}>
            {lastGame.goalsHome} - {lastGame.goalsAway}
          </p>
          <div className={styles.team}>
            <img className={styles.team_logo} src={lastGame.logoAway} alt="" />
            <p className={styles.team_name}>{lastGame.teamAway}</p>
          </div>
        </div>
      </div>
      <div className={styles.next_game}>
        <h2>Next Game</h2>
        <hr className={styles.underline} />
        <h5 className={styles.competition}>{nextGame.league}</h5>
        <div className={styles.match_container}>
          <div className={styles.team}>
            <img className={styles.team_logo} src={nextGame.logoHome} alt="" />
            <p className={styles.team_name}>{nextGame.teamHome}</p>
          </div>
          <p className={styles.match_result}>-</p>
          <div className={styles.team}>
            <img className={styles.team_logo} src={nextGame.logoAway} alt="" />
            <p className={styles.team_name}>{nextGame.teamAway}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchContainer;
