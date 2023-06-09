import React, { useState, useContext, createContext } from "react";

const defaultState = {
  gameId: "",
  game: {
    id: "",
    name: "",
  },
  feed: {},
};



export const GameContext = createContext();
export const useGameContext = () => useContext(GameContext);

const loadGame = async (gameId) => {
  try {
    const response = await fetch(`/api/games/${gameId}`);
    const gameData = response.json();
    return gameData;
  } catch (error) {
    console.error("Error loading game:", error);
    throw error;
  }
};

export const DashboardProvider = ({ children }) => {
  const [gameId, setGameId] = useState(defaultState.gameId);
  const [game, setGame] = useState(defaultState.game);
  const [feed, setFeed] = useState(defaultState.feed);

  return (
    <GameContext.Provider
      value={{
        game,
        gameId,
        setGame,
        feed,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default DashboardProvider;
