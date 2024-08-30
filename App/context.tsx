
import * as React from 'react';
import { createContext, useState } from 'react';


interface GamePointsContextValue {
    gamePoints: number;
    setGamePoints: React.Dispatch<React.SetStateAction<number>>;
  }
  
  interface GamePointsProviderProps {
    children: React.ReactNode;
  }
  
  export const GamePointsContext = React.createContext<GamePointsContextValue>({
    gamePoints: 0,
    setGamePoints: () => {}, 
  });
  
  export const GamePointsProvider: React.FC<GamePointsProviderProps> = ({ children }) => {
    const [gamePoints, setGamePoints] = useState(0);
  
  
    return (
      <GamePointsContext.Provider value={{ gamePoints, setGamePoints }}>
        {children}
      </GamePointsContext.Provider>
    );
  };
  