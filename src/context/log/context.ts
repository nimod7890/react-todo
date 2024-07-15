import { createContext } from "react";
import { Log } from "src/models/log";

type LogContextType = {
  logs: Log[];
  addLog: (entry: Log) => void;
};

export const LogContext = createContext<LogContextType | undefined>(undefined);
