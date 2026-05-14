// src/engine/WordEngineContext.tsx
import {
  createContext,
  useContext,
  useState,
} from "react";
import type { ReactNode } from "react";

import { WordEngine } from "./wordEngine";

type WordEngineContextType = {
  engine: WordEngine | null;
  setEngine: (engine: WordEngine | null) => void;
};

const WordEngineContext =
  createContext<WordEngineContextType>({
    engine: null,
    setEngine: () => {},
  });

export function WordEngineProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [engine, setEngine] =
    useState<WordEngine | null>(null);

  return (
    <WordEngineContext.Provider
      value={{ engine, setEngine }}
    >
      {children}
    </WordEngineContext.Provider>
  );
}

export function useWordEngine() {
  return useContext(WordEngineContext);
}