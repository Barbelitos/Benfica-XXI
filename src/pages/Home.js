import { useState, useEffect } from "react";

import Quote from "../components/Quote";
import MatchContainer from "../components/MatchContainer";
import Playlist from "../components/UI/Playlist";

import quotes from "../components/Quotes";

import "../App.css";

const Home = () => {
  const [lastGame, setLastGame] = useState({});
  const [nextGame, setNextGame] = useState({});

  useEffect(() => {
    const fetchLastGame = async () => {
      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/fixtures?team=211&last=1",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            "X-RapidAPI-Key":
              "bf3cb3d9efmshf2d214d2aa0db87p12371cjsn1eddbc279d73",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedData = responseData.response[0];

      const lastGameData = {
        id: loadedData.fixture.id,
        goalsHome: loadedData.goals.home,
        goalsAway: loadedData.goals.away,
        teamHome: loadedData.teams.home.name,
        logoHome: loadedData.teams.home.logo,
        teamAway: loadedData.teams.away.name,
        logoAway: loadedData.teams.away.logo,
        league:
          loadedData.league.name === "Primeira Liga"
            ? "Liga Portugal"
            : loadedData.league.name,
      };

      setLastGame(lastGameData);
    };

    const fetchNextGame = async () => {
      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/fixtures?team=211&next=1",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            "X-RapidAPI-Key":
              "bf3cb3d9efmshf2d214d2aa0db87p12371cjsn1eddbc279d73",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedData = responseData.response[0];

      const nextGameData = {
        id: loadedData.fixture.id,
        teamHome: loadedData.teams.home.name,
        logoHome: loadedData.teams.home.logo,
        teamAway: loadedData.teams.away.name,
        logoAway: loadedData.teams.away.logo,
        league:
          loadedData.league.name === "Primeira Liga"
            ? "Liga Portugal"
            : loadedData.league.name,
      };

      setNextGame(nextGameData);
    };

    fetchLastGame().catch((error) => {
      console.log(error.message);
    });

    fetchNextGame().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <>
      <div className="container">
        <Quote
          id="main_quote"
          className="main_quote"
          text={quotes[1].quote}
          author={quotes[1].author}
          background={quotes[1].background}
        />
        <MatchContainer lastGame={lastGame} nextGame={nextGame} />
      </div>
      <Playlist />
    </>
  );
};

export default Home;
