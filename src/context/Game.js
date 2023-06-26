import React, { useState, useContext } from "react";
import { GameContext } from "./context/GameContext";



const defaultState = {
  gameId: '',
  game: {
    id: '',
    name: '',
  },
  feed: {

  }
}

export const useGameContext = () => useContext(GameContext);

export const DashboardProvider = ({ children }) => {
  const [gameId, setGameId] = useState(defaultstate.gameId);
  const [game, setGame] = useState(defaultState.game);
  const [feed, setFeed] = useState(defaultState.feed);
  const [gamesList, setGamesList] = useState();

  const handleGameChange = (gameId) => {
    setGameId(gameId);
    loadGame(gameud).then(game => {
      setGame(game);
      setFeed(game.feed);
    });
  }
}

return (
  <GameContext.Provider
  value={{
    game,
    gameId,
    handleGameChange,
    feed
  }} />
)